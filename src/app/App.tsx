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
