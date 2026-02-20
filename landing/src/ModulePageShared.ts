import {
  AnchorElement,
  CodeElement,
  DivElement,
  H1Element,
  H2Element,
  HBox,
  ParagraphElement,
  PreElement,
  SpanElement,
  VBox,
} from "typecomposer";
import { BuiltWithTypeCompose } from "./BuiltWithTypeCompose";

export const prose = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.82rem",
  lineHeight: "1.8",
  color: "rgba(240,236,226,0.5)",
};

export const codeBlock = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.78rem",
  lineHeight: "1.65",
  color: "rgba(200,242,58,0.85)",
  background: "rgba(200,242,58,0.04)",
  border: "1px solid rgba(200,242,58,0.12)",
  padding: "14px 18px",
  borderRadius: "3px",
  overflowX: "auto" as const,
  display: "block",
};

export function inlineCode(text: string) {
  return new CodeElement({
    text,
    style: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.78rem",
      color: "rgba(200,242,58,0.75)",
      background: "rgba(200,242,58,0.06)",
      border: "1px solid rgba(200,242,58,0.12)",
      padding: "1px 6px",
      borderRadius: "2px",
    },
  });
}

export function bullet(text: string, dim = false) {
  const row = new HBox({
    style: { gap: "10px", alignItems: "flex-start", padding: "2px 0" },
  });
  row.append(
    new SpanElement({
      text: "—",
      style: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.78rem",
        color: "rgba(200,242,58,0.5)",
        flexShrink: "0",
        marginTop: "1px",
        userSelect: "none",
      },
    }),
  );
  row.append(
    new DivElement({
      text,
      style: {
        ...prose,
        color: dim ? "rgba(240,236,226,0.35)" : "rgba(240,236,226,0.55)",
      },
    }),
  );
  return row;
}

export function subSection(label: string, items: string[], dim = false) {
  const box = new VBox({ style: { gap: "4px" } });
  box.append(
    new DivElement({
      text: label,
      style: {
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(240,236,226,0.28)",
        marginBottom: "4px",
      },
    }),
  );
  items.forEach((item) => box.append(bullet(item, dim)));
  return box;
}

export function codeSnippet(code: string) {
  const pre = new PreElement({ style: codeBlock });
  pre.append(new CodeElement({ text: code }));
  return pre;
}

export interface ExerciseDef {
  id: string;
  title: string;
  intro?: string;
  snippet?: string;
  sections: { label: string; items: string[]; dim?: boolean }[];
}

export function ExerciseCard(m: ExerciseDef) {
  const card = new VBox({
    style: {
      padding: "36px 0 36px 0",
      borderBottom: "1px solid rgba(240,236,226,0.07)",
      gap: "20px",
      position: "relative",
    },
  });

  const headerRow = card.appendChild(
    new HBox({ style: { gap: "20px", alignItems: "flex-start" } }),
  );

  headerRow.appendChild(
    new DivElement({
      text: m.id,
      style: {
        fontFamily: "'Instrument Serif', serif",
        fontSize: "2.75rem",
        lineHeight: "1",
        color: "#c8f23a",
        opacity: "0.7",
        letterSpacing: "-0.04em",
        minWidth: "56px",
        flexShrink: "0",
        paddingTop: "4px",
      },
    }),
  );

  const titleBox = headerRow.appendChild(new VBox({ style: { gap: "6px", paddingTop: "8px" } }));
  titleBox.append(
    new H2Element({
      text: m.title,
      style: {
        fontFamily: "'Instrument Serif', serif",
        fontSize: "1.35rem",
        fontWeight: "400",
        letterSpacing: "-0.01em",
        color: "#f0ece2",
      },
    }),
  );
  if (m.intro) {
    titleBox.append(
      new ParagraphElement({
        text: m.intro,
        style: prose,
      }),
    );
  }

  const body = card.appendChild(
    new VBox({ style: { gap: "20px", paddingLeft: "76px" } }),
  );

  if (m.snippet) {
    body.append(codeSnippet(m.snippet));
  }

  m.sections.forEach((s) => body.append(subSection(s.label, s.items, s.dim)));

  return card;
}

export const ROOT_STYLE = {
  width: "100dvw",
  minHeight: "100dvh",
  background: "#0e0d0b",
  display: "flex",
  justifyContent: "center",
  overflowX: "hidden",
} as const;

const NAV_LINK_STYLE = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.72rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "rgba(240,236,226,0.4)",
  textDecoration: "none" as const,
};

const SECTION_LABEL_STYLE = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#c8f23a",
};

const H1_STYLE = {
  fontFamily: "'Instrument Serif', serif",
  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
  lineHeight: "0.95",
  letterSpacing: "-0.03em",
  color: "#f0ece2",
  fontWeight: "400",
};

const DESCRIPTION_STYLE = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.82rem",
  lineHeight: "1.8",
  color: "rgba(240,236,226,0.5)",
  maxWidth: "520px",
};

const PILL_STYLE = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.62rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  background: "rgba(200,242,58,0.08)",
  border: "1px solid rgba(200,242,58,0.2)",
  color: "#c8f23a",
  padding: "3px 10px",
  borderRadius: "999px",
};

export interface ModulePageOptions {
  moduleId: string;
  title: string;
  description: string;
  pills: string[];
  defs: ExerciseDef[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}

interface ModulePageHost {
  appendChild(node: Node): Node;
}

export function buildModulePage(host: ModulePageHost, options: ModulePageOptions) {
  const { moduleId, title, description, pills, defs, prev, next } = options;

  const badge = new BuiltWithTypeCompose();
  badge.style.position = "fixed";
  badge.style.bottom = "16px";
  badge.style.right = "16px";
  badge.style.zIndex = "1000";
  host.appendChild(badge);

  const page = host.appendChild(
    new VBox({ style: { width: "100%", maxWidth: "960px", padding: "0 32px", gap: "0" } }),
  ) as VBox;

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
  ) as HBox;
  nav.append(new DivElement({ className: "meta-label", text: "Piscine Swift" }));
  const navRight = nav.appendChild(new HBox({ style: { gap: "24px", alignItems: "center" } })) as HBox;
  navRight.append(new AnchorElement({ text: "Home", href: "/", rlink: "/", className: "meta-label", style: { textDecoration: "none" } }));
  navRight.append(new AnchorElement({ text: "Repo", href: ".", className: "meta-label", style: { textDecoration: "none" } }));

  const header = page.appendChild(
    new VBox({
      style: { padding: "56px 0 48px", gap: "16px", borderBottom: "1px solid rgba(240,236,226,0.08)" },
      className: "fade-up",
    }),
  ) as VBox;
  header.append(new DivElement({ text: `Module ${moduleId}`, style: SECTION_LABEL_STYLE }));
  header.append(new H1Element({ text: title, style: H1_STYLE }));
  header.append(new ParagraphElement({ text: description, style: DESCRIPTION_STYLE }));
  const pillRow = header.appendChild(new HBox({ style: { gap: "8px", flexWrap: "wrap", marginTop: "8px" } })) as HBox;
  pills.forEach((tag) => pillRow.append(new DivElement({ text: tag, style: PILL_STYLE })));

  const exercises = page.appendChild(new VBox({ style: { padding: "8px 0 80px", gap: "0" } })) as VBox;
  defs.forEach((def) => exercises.append(ExerciseCard(def)));

  const moduleNav = page.appendChild(
    new HBox({
      style: {
        padding: "32px 0 72px",
        borderTop: "1px solid rgba(240,236,226,0.08)",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      },
    }),
  ) as HBox;
  if (prev) moduleNav.append(new AnchorElement({ text: prev.label, href: prev.href, rlink: prev.href, style: NAV_LINK_STYLE }));
  if (next) moduleNav.append(new AnchorElement({ text: next.label, href: next.href, rlink: next.href, style: NAV_LINK_STYLE }));
}
