import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

function colorAdjustFix() {
  return {
    postcssPlugin: "color-adjust-fix",
    Declaration(decl) {
      if (decl.prop === "color-adjust") {
        decl.prop = "print-color-adjust";
      }
    },
  };
}
colorAdjustFix.postcss = true;

export default {
  plugins: [colorAdjustFix(), tailwindcss(), autoprefixer()],
};
