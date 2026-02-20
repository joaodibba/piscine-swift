import {
  AnchorElement,
  ButtonElement,
  Component,
  DivElement,
  H2Element,
  HBox,
  ParagraphElement,
  Router,
  VBox,
} from "typecomposer";
import { BuiltWithTypeCompose } from "./BuiltWithTypeCompose";

export class AppPage extends Component {
  constructor() {
    super({
      className: "tc-root",
      style: {
        width: "100dvw",
        minHeight: "100dvh",
        background: "#0e0d0b",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      },
    });

    const page = this.appendChild(
      new VBox({
        style: {
          width: "100%",
          maxWidth: "960px",
          padding: "0 32px",
          gap: "0",
        },
      }),
    );

    const badge = new BuiltWithTypeCompose();
    badge.style.position = "fixed";
    badge.style.bottom = "16px";
    badge.style.right = "16px";
    badge.style.zIndex = "1000";
    this.appendChild(badge);

    const nav = page.appendChild(
      new HBox({
        style: {
          padding: "24px 0",
          borderBottom: "1px solid rgba(240,236,226,0.08)",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        },
      }),
    );

    nav.append(
      new DivElement({
        className: "meta-label",
        text: "Piscine Swift",
      }),
    );

    const navRight = nav.appendChild(new HBox({ style: { gap: "24px", alignItems: "center" } }));
    navRight.append(
      new AnchorElement({
        text: "GitHub",
        href: "https://github.com/joaodibba/piscine-swift",
        className: "meta-label",
        style: { textDecoration: "none" },
      }),
    );
    const hero = page.appendChild(
      new VBox({
        style: {
          padding: "80px 0 72px",
          gap: "32px",
          borderBottom: "1px solid rgba(240,236,226,0.08)",
        },
        className: "fade-up",
      }),
    );

    hero.append(
      new DivElement({
        className: "section-label",
        text: "42-style module set · Swift language",
      }),
    );

    const titleBox = hero.appendChild(new VBox({ style: { gap: "0" } }));
    titleBox.append(
      new DivElement({
        className: "hero-title",
        text: "Learn Swift",
      }),
    );
    titleBox.append(
      new DivElement({
        className: "hero-title hero-title-accent",
        text: "the 42 way.",
      }),
    );

    hero.append(
      new ParagraphElement({
        text: "A hands-on tour of Swift. Ten modules covering optionals, value semantics, protocols, enums, error modeling, ARC, closures, and SwiftUI state — each with exercises and an evaluation checklist.",
        style: {
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85rem",
          lineHeight: "1.75",
          color: "rgba(240,236,226,0.55)",
          maxWidth: "560px",
        },
      }),
    );
    hero.append(
      new ParagraphElement({
        text: "Each module is a short set of exercises with brief context. The exercises are prompts, not \"one correct answer\" — be creative with your solutions: add small extras (more test cases, extra helper functions/types, alternative implementations) as long as you keep the core constraints of the exercise.",
        style: {
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85rem",
          lineHeight: "1.75",
          color: "rgba(240,236,226,0.55)",
          maxWidth: "560px",
        },
      }),
    );

    const ctaRow = hero.appendChild(
      new HBox({ style: { gap: "12px", flexWrap: "wrap", alignItems: "center" } }),
    );
    ctaRow.append(
      new ButtonElement({
        text: "→ Start learning",
        className: "cta-primary",
        onclick: () => Router.go("/00"),
      }),
    );
    const modulesSection = page.appendChild(
      new VBox({
        style: { padding: "56px 0 0" },
        id: "modules",
      }),
    );

    const modulesHeader = modulesSection.appendChild(
      new HBox({ style: { marginBottom: "32px", alignItems: "baseline", gap: "16px" } }),
    );
    modulesHeader.append(new DivElement({ className: "section-label", text: "Modules" }));
    modulesHeader.append(
      new H2Element({
        text: "Ten modules",
        style: {
          fontFamily: "'Instrument Serif', serif",
          fontSize: "1.75rem",
          fontWeight: "400",
          letterSpacing: "-0.02em",
          color: "#f0ece2",
        },
      }),
    );

    const modules = [
      {
        id: "00",
        title: "Syntax & Types",
        tag: "Foundations",
        desc: "Variables, functions, control flow, and your first struct. Ground-level Swift.",
      },
      {
        id: "01",
        title: "Optionals",
        tag: "Safety",
        desc: "Absence as a type. Safe unwrapping, chaining, ?? operator, and optional map/flatMap.",
      },
      {
        id: "02",
        title: "Value Semantics",
        tag: "Memory",
        desc: "struct copying, let immutability, and copy-on-write in standard library collections.",
      },
      {
        id: "03",
        title: "Protocols",
        tag: "Abstraction",
        desc: "Interfaces without inheritance — mutating requirements, composition, generics vs any, and associated types.",
      },
      {
        id: "04",
        title: "Extensions",
        tag: "Composition",
        desc: "Add behavior and conformances after the fact: constrained extensions and protocol default implementations.",
      },
      {
        id: "05",
        title: "Enums",
        tag: "Data Modeling",
        desc: "Enums as data models — associated values, exhaustive switching, recursion, and enum-driven state machines.",
      },
      {
        id: "06",
        title: "Error Handling",
        tag: "Reliability",
        desc: "Model failure explicitly: throws, Result, Optional, defer, and how call sites change.",
      },
      {
        id: "07",
        title: "ARC",
        tag: "Memory",
        desc: "Reference counting, retain cycles, weak/unowned, and cycles created through stored closures.",
      },
      {
        id: "08",
        title: "Closures",
        tag: "Functional",
        desc: "Closure syntax, higher-order functions, @escaping, and capture behavior including value snapshots.",
      },
      {
        id: "09",
        title: "SwiftUI",
        tag: "UI",
        desc: "Declarative UI and state: @State, @Binding, lists/navigation, and enum-driven view state.",
      },
    ] as const;

    const moduleList = modulesSection.appendChild(
      new VBox({ style: { gap: "0" } }),
    );

    for (const m of modules) {
      const card = moduleList.appendChild(
        new AnchorElement({
          href: `/${m.id}`,
          rlink: `/${m.id}`,
          className: "module-card",
          style: {
            display: "flex",
            padding: "28px 16px 28px 24px",
            gap: "24px",
            alignItems: "flex-start",
            cursor: "pointer",
            background: "transparent",
            textDecoration: "none",
            color: "inherit",
          },
        }),
      );

      card.append(
        new DivElement({
          className: "module-num",
          text: m.id,
          style: { minWidth: "72px", flexShrink: "0" },
        }),
      );

      const content = card.appendChild(
        new VBox({ style: { flex: "1", gap: "8px", paddingTop: "6px" } }),
      );

      const titleRow = content.appendChild(
        new HBox({ style: { gap: "12px", alignItems: "center", flexWrap: "wrap" } }),
      );
      titleRow.append(new DivElement({ className: "module-title", text: m.title }));
      titleRow.append(new DivElement({ className: "pill", text: m.tag }));

      content.append(
        new ParagraphElement({
          text: m.desc,
          style: {
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            lineHeight: "1.7",
            color: "rgba(240,236,226,0.45)",
          },
        }),
      );

    }

    const footer = page.appendChild(
      new HBox({
        style: {
          padding: "20px 0 56px",
          borderTop: "1px solid rgba(240,236,226,0.08)",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        },
      }),
    );

    footer.append(
      new DivElement({
        className: "meta-label",
        text: "piscine-swift — hands-on Swift",
      }),
    );

    footer.append(
      new AnchorElement({
        text: "↑ Back to top",
        href: "#",
        className: "meta-label",
        style: { textDecoration: "none" },
      }),
    );
  }
}