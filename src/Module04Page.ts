import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module04Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "String.isBlank", snippet: "extension String {\n    var isBlank: Bool {\n    }\n}", sections: [{ label: "Test with", items: ["\"\"", "\"   \"", "\"\\n\\t\"", "\"hello\""] }, { label: "Constraint", items: ["Use trimmingCharacters(in: .whitespacesAndNewlines) in your implementation"], dim: true }] },
      { id: "01", title: "Int.times(_:)", snippet: "extension Int {\n    func times(_ action: () -> Void) {\n    }\n}\n// Test: 3.times { print(\"Hi\") }", sections: [{ label: "Test", items: ["3.times { print(\"Hi\") }"] }] },
      { id: "02", title: "Protocol conformance in an extension", snippet: "struct Point { let x: Int; let y: Int }\nextension Point: CustomStringConvertible {\n    var description: String { \"(x: \\(x), y: \\(y))\" }\n}", sections: [{ label: "Task", items: ["Print a point"] }] },
      { id: "03", title: "Convenience initializer in an extension", snippet: "struct ColorRGB { let r: Int; let g: Int; let b: Int }\nextension ColorRGB {\n    init(gray: Int) { self.r = gray; self.g = gray; self.b = gray }\n}", sections: [{ label: "Test", items: ["ColorRGB(gray: 128)"] }] },
      { id: "04", title: "Stored properties in extensions", snippet: "extension String {\n    var cachedHash: Int = 0\n}", sections: [{ label: "Task", items: ["Try to add the above; record the compiler error", "Write a short explanation of why Swift forbids stored properties in extensions"] }] },
      { id: "05", title: "Constrained extension with where", intro: "Add a constrained extension on Array where Element == Int with a computed property sum: Int.", sections: [{ label: "Tasks", items: ["Implement sum to return the total of all elements", "Test with at least two arrays (including an empty one)"] }] },
      { id: "06", title: "Default implementation in a protocol extension", snippet: "protocol Tagged { var tag: String { get } }\nextension Tagged {\n    var tag: String { String(describing: Self.self) }\n}", sections: [{ label: "Tasks", items: ["Create a type that adopts Tagged without implementing tag and print tag", "Create a second type that adopts Tagged and provides its own tag, and print tag"] }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 04 (Extensions)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can add methods/properties in an extension and use them from a separate file or scope."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 04.md.", "Your extensions compile without adding stored properties."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You implemented one utility both as: an extension method/property; a free function; then compared usage and readability"] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You added protocol conformance in an extension and confirmed the behavior with prints/tests."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You split a type's functionality into multiple extensions grouped by feature (even if in one file)."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You wrote one constrained extension using where and tested it on multiple inputs."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You reviewed someone else's extension usage and noted: one case where an extension improves readability; one case where it hides too much logic"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how extensions and protocol extensions interact (default implementations)."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Add a constrained extension to Sequence: extension Sequence where Element: Hashable { func frequencies() -> [Element: Int] }; Test on an array of strings"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["One file that demonstrates: a computed property extension on String; a constrained extension (where) on a generic type; a protocol default implementation via extension"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "04",
      title: "Extensions",
      description: "Add behavior and conformances after the fact: computed properties, methods, protocol conformance in extensions, and constrained extensions with where.",
      pills: ["extension", "computed property", "where", "default implementation"],
      defs,
      prev: { href: "/03", label: "← 03: Protocols" },
      next: { href: "/05", label: "05: Enums →" },
      eval: evaluation,
    });
  }
}
