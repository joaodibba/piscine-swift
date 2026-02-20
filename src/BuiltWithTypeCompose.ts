import { DivElement, SpanElement, ImageElement } from "typecomposer";

type BuiltWithTypeComposeProps = {
  className?: string;
};

export class BuiltWithTypeCompose extends DivElement {
  constructor(options: BuiltWithTypeComposeProps = {}) {
    super({
      className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-gray-800 font-medium text-xs shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 ${
        options.className || ""
      } no-mobile`,
      style: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        cursor: "pointer",
      },
    });

    this.onclick = () => window.open("https://typecomposer.com", "_blank");

    const logoImage = new ImageElement({
      src: `${import.meta.env.BASE_URL}typecomposer.svg`,
      style: {
        width: "14px",
        height: "14px",
      },
    });

    this.append(logoImage);
    this.append(new SpanElement({ text: "Made with TypeComposer" }));
  }
}
