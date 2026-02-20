import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

export class Module05Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });
    const defs: ExerciseDef[] = [
      { id: "00", title: "Exhaustive switch", snippet: "enum Direction { case north, south, east, west }\nfunc opposite(of dir: Direction) -> Direction", sections: [{ label: "Constraint", items: ["Use switch without a default case"], dim: true }, { label: "Test", items: ["Test with all four directions"], dim: true }] },
      { id: "01", title: "Associated values", snippet: "enum Shape {\n    case point\n    case circle(radius: Double)\n    case rectangle(width: Double, height: Double)\n}\nfunc area(of shape: Shape) -> Double", sections: [{ label: "Rules", items: [".point area is 0", "Circle area is πr²", "Rectangle area is w×h"] }, { label: "Task", items: ["Create one of each shape and print the areas"], dim: true }] },
      { id: "02", title: "Raw values and failable init", snippet: "enum Planet: Int {\n    case mercury = 1, venus, earth, mars\n}", sections: [{ label: "Tasks", items: ["Create a value using Planet(rawValue:) for at least one valid and one invalid raw value", "Print the planet name when it exists, otherwise print unknown"] }] },
      { id: "03", title: "CaseIterable", intro: "Update Direction to conform to CaseIterable.", sections: [{ label: "Task", items: ["Print all cases using Direction.allCases"] }] },
      { id: "04", title: "Recursive enums with indirect", snippet: "indirect enum Expr {\n    case number(Int)\n    case add(Expr, Expr)\n    case mul(Expr, Expr)\n}\nfunc eval(_ expr: Expr) -> Int", sections: [{ label: "Test", items: ["(2 + 3) * 4 → let expr = Expr.mul(.add(.number(2), .number(3)), .number(4))"], dim: true }, { label: "Expected result", items: ["20"], dim: true }] },
      { id: "05", title: "Model state with an enum", snippet: "enum LoadState {\n    case idle\n    case loading\n    case loaded(String)\n    case failed(String)\n}\nfunc statusLine(for state: LoadState) -> String", sections: [{ label: "Rules", items: ["idle -> \"idle\"", "loading -> \"loading\"", "loaded(value) -> \"loaded: <value>\"", "failed(message) -> \"error: <message>\""] }, { label: "Test", items: ["Test with one value of each case"], dim: true }] },
      { id: "06", title: "if case and guard case", intro: "Using LoadState from Exercise 05.", sections: [{ label: "Tasks", items: ["Use if case to extract the associated value from .loaded", "Use guard case to early-return unless the state is .failed"] }] },
    ];
    buildModulePage(this, {
      moduleId: "05",
      title: "Enums",
      description: "Enums as data models — associated values, exhaustive switch, raw values, CaseIterable, indirect enums, and enum-driven state.",
      pills: ["enum", "associated values", "switch", "indirect", "CaseIterable"],
      defs,
      prev: { href: "/04", label: "← 04: Extensions" },
      next: { href: "/06", label: "06: Error Handling →" },
    });
  }
}
