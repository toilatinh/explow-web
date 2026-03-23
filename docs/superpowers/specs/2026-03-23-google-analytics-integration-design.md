# Google Analytics Integration — Design Spec

**Date:** 2026-03-23
**Status:** Approved

---

## Overview

Integrate Google Analytics 4 (GA4) into the explow-web React + Vite SPA to automatically track page views on every React Router route change. No custom events are in scope.

**Measurement ID:** `G-D0ZYSQ14PR`

---

## Approach

Plain `gtag.js` script in `index.html` plus a small `usePageTracking` hook — no new npm packages.

---

## Components

### 1. `index.html` — Script injection

Add two tags inside `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D0ZYSQ14PR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-D0ZYSQ14PR', { send_page_view: false });
</script>
```

`send_page_view: false` disables the automatic page view on load. All page view hits — including the first — are owned by the hook, preventing double-counting on the landing route.

### 2. `src/app/components/usePageTracking.ts` — Route change hook

A hook that fires a `page_view` event on every React Router location change:

```ts
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    gtag('event', 'page_view', { page_path: location.pathname });
  }, [location.pathname]);
}
```

The dependency is `location.pathname` only — search params and hash changes are intentionally not tracked as distinct page views (the app does not use search params as logical pages).

This uses the `gtag` global declared via a TypeScript shim (see below).

### 3. `src/vite-env.d.ts` — TypeScript global shim

Add a minimal declaration so TypeScript recognises the `gtag` global:

```ts
declare function gtag(...args: unknown[]): void;
```

### 4. `src/main.tsx` — Router provider

The app currently has no Router context. Wrap `<App />` with `<BrowserRouter>` so that `useLocation()` in the hook resolves correctly:

```tsx
import { BrowserRouter } from 'react-router';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 5. `src/app/App.tsx` — Hook call site

Call `usePageTracking()` once at the top of `App`. With the Router established in `main.tsx`, `useLocation()` will resolve correctly.

---

## Data Flow

```
Route change
  → useLocation() triggers useEffect
  → gtag('event', 'page_view', { page_path })
  → Google Analytics 4 dashboard
```

---

## Out of Scope

- Custom event tracking (button clicks, form submissions)
- Cookie consent / GDPR banner
- Environment-specific disabling (e.g. skip tracking in dev)

---

## Files Changed

| File | Change |
|------|--------|
| `index.html` | Add gtag script tags to `<head>` |
| `src/vite-env.d.ts` | Add `gtag` global declaration |
| `src/main.tsx` | Wrap `<App />` with `<BrowserRouter>` |
| `src/app/components/usePageTracking.ts` | New file — page tracking hook |
| `src/app/App.tsx` | Call `usePageTracking()` |
