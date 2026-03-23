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
