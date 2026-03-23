# Google Analytics Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add GA4 page view tracking to the explow-web React + Vite SPA with no new npm packages.

**Architecture:** Inject the `gtag.js` script in `index.html` with `send_page_view: false`, establish a `BrowserRouter` context in `main.tsx`, then call a small `usePageTracking` hook from `App.tsx` that fires `gtag('event', 'page_view')` on every React Router pathname change.

**Tech Stack:** React 18, Vite 6, React Router 7, TypeScript (via Vite esbuild), Tailwind CSS

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `index.html` | Modify | Load gtag.js and initialize GA4 without auto page view |
| `src/vite-env.d.ts` | Modify | Declare `gtag` as a global function so TypeScript doesn't error |
| `src/main.tsx` | Modify | Wrap `<App />` with `<BrowserRouter>` to provide Router context |
| `src/app/components/usePageTracking.ts` | Create | Hook that fires `page_view` on route changes |
| `src/app/App.tsx` | Modify | Call `usePageTracking()` once inside the component |

---

## Task 1: Inject gtag scripts into index.html

**Files:**
- Modify: `index.html:4-7` (inside `<head>`)

- [ ] **Step 1: Add the gtag scripts**

Open `index.html`. Inside `<head>`, after the existing `<meta>` tags and before `</head>`, add:

```html
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0ZYSQ14PR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D0ZYSQ14PR', { send_page_view: false });
    </script>
```

`send_page_view: false` is critical — the hook owns all page_view hits. Without it, the initial load would be counted twice.

The result should look like (preserve the existing 2-space indentation and leading blank line):

```html

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Explow – Meet your possible future selves. Observe & Take action</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0ZYSQ14PR"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D0ZYSQ14PR', { send_page_view: false });
      </script>
    </head>

    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>

```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add GA4 gtag script to index.html"
```

---

## Task 2: Declare gtag global type in vite-env.d.ts

**Files:**
- Modify: `src/vite-env.d.ts`

- [ ] **Step 1: Add the global declaration**

Open `src/vite-env.d.ts`. Append at the end of the file:

```ts
declare function gtag(...args: unknown[]): void;
```

The full file should look like:

```ts
/// <reference types="vite/client" />

declare module "*.png" {
  const src: string
  export default src
}

declare module "*.mov" {
  const src: string
  export default src
}

declare function gtag(...args: unknown[]): void;
```

- [ ] **Step 2: Commit**

```bash
git add src/vite-env.d.ts
git commit -m "feat: declare gtag global type"
```

---

## Task 3: Add BrowserRouter to main.tsx

**Files:**
- Modify: `src/main.tsx`

`useLocation()` (used in the hook we're about to write) throws if called outside a Router context. This task establishes that context at the app root.

- [ ] **Step 1: Wrap App with BrowserRouter**

Open `src/main.tsx`. The current content is (note 2-space indentation and leading blank line):

```tsx

  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);

```

Update it to:

```tsx

  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

```

`react-router` is already installed (v7.13.0 in package.json) — no install needed.

- [ ] **Step 2: Verify the app still renders**

Run the dev server and confirm the page loads without errors:

```bash
npm run dev
```

Open the browser. The page should render exactly as before. Check the browser console — there should be no errors. Ctrl+C to stop.

- [ ] **Step 3: Commit**

```bash
git add src/main.tsx
git commit -m "feat: wrap App with BrowserRouter for router context"
```

---

## Task 4: Create the usePageTracking hook

**Files:**
- Create: `src/app/components/usePageTracking.ts`

- [ ] **Step 1: Create the hook file**

Create `src/app/components/usePageTracking.ts` with this content:

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

How it works:
- `useLocation()` returns the current React Router location object
- The `useEffect` re-runs whenever `location.pathname` changes (i.e. on every SPA navigation)
- `gtag('event', 'page_view', ...)` sends a hit to GA4
- Search params and hash are intentionally excluded — only pathname changes count as page views

- [ ] **Step 2: Commit**

```bash
git add src/app/components/usePageTracking.ts
git commit -m "feat: add usePageTracking hook for GA4 page view events"
```

---

## Task 5: Call usePageTracking in App.tsx

**Files:**
- Modify: `src/app/App.tsx`

- [ ] **Step 1: Call the hook in App**

Open `src/app/App.tsx`. The current content is:

```tsx
import Frame45 from "../imports/Frame1321313994.tsx";
import { SmoothScroll } from "./components/SmoothScroll";
import { Toaster } from "sonner";

export default function App() {
  return (
    <SmoothScroll>
      <Frame45 />
      <Toaster position="top-center" />
    </SmoothScroll>
  );
}
```

Update it to:

```tsx
import Frame45 from "../imports/Frame1321313994.tsx";
import { SmoothScroll } from "./components/SmoothScroll";
import { Toaster } from "sonner";
import { usePageTracking } from "./components/usePageTracking";

export default function App() {
  usePageTracking();

  return (
    <SmoothScroll>
      <Frame45 />
      <Toaster position="top-center" />
    </SmoothScroll>
  );
}
```

The hook call must be at the top level of the component (React rules of hooks), not inside a conditional or callback.

- [ ] **Step 2: Verify end-to-end in the browser**

```bash
npm run dev
```

Open the app and open browser DevTools → Network tab → filter by "google-analytics" or "collect". Navigate between pages (if the app has multiple routes). You should see `page_view` hits firing to `https://www.google-analytics.com/g/collect`.

Alternatively, open GA4 → Reports → Realtime to confirm hits are arriving.

Ctrl+C to stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add src/app/App.tsx
git commit -m "feat: call usePageTracking in App for GA4 page view tracking"
```
