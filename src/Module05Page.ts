import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


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

    const evaluation: EvalDef = {
      title: "Evaluation — Module 05 (Enums)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can compile enums with associated values and write exhaustive switches without default."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 05.md.", "Your switch statements are exhaustive and readable."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You modeled the same \"state\" both as: an enum with associated values; a struct with optionals; then compared which one produces clearer call sites."] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You used pattern matching to extract associated values in at least two ways: switch; if case / guard case"] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You wrote small helper functions that take an enum and return derived information (string/number)."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You repeated an exhaustive switch exercise after adding a new enum case and observed the compiler forcing updates."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You reviewed another solution and wrote down: one place where naming associated values improves clarity; one place where a nested enum might simplify the model"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how optionals and error handling can often be replaced by a single enum state model."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Model a command system: enum Command { case add(Int); case mul(Int); case reset }; Write func apply(_ cmd: Command, to value: Int) -> Int; Parse commands from strings like \"add 3\""] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["One file that demonstrates: an enum state machine with associated values; pattern matching with switch and guard case; a small reducer-like function that updates state based on an enum \"event\""] },
      ],
    };

    buildModulePage(this, {
      moduleId: "05",
      title: "Enums",
      description: "Enums as data models — associated values, exhaustive switch, raw values, CaseIterable, indirect enums, and enum-driven state.",
      pills: ["enum", "associated values", "switch", "indirect", "CaseIterable"],
      defs,
      prev: { href: "/04", label: "← 04: Extensions" },
      next: { href: "/06", label: "06: Error Handling →" },
      eval: evaluation,
    });
  }
}
