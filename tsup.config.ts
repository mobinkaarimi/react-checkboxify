import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/components/Checkbox/index.tsx"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
