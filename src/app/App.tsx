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
