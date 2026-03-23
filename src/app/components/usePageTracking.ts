import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    gtag('event', 'page_view', { page_path: location.pathname });
  }, [location.pathname]);
}
