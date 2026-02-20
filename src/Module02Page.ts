import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module02Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "Copying a struct", intro: "Create a Point struct and observe copy semantics.", snippet: "struct Point {\n    var x: Int\n    var y: Int\n}", sections: [{ label: "Tasks", items: ["Create a Point and assign it to a second variable", "Modify the second variable", "Print both points"] }] },
      { id: "01", title: "let with value types", intro: "Declare a struct with let and attempt to mutate it.", snippet: "struct Rectangle {\n    var width: Double\n    var height: Double\n    mutating func scale(by factor: Double) {\n        width *= factor\n        height *= factor\n    }\n}", sections: [{ label: "Tasks", items: ["Declare a Rectangle instance using let", "Attempt to call scale(by:) and record the compiler error message"] }] },
      { id: "02", title: "Nested structs and copying", intro: "Copy a struct that contains another struct.", snippet: "struct Engine { var horsepower: Int }\nstruct Car { var brand: String; var engine: Engine }", sections: [{ label: "Tasks", items: ["Create a Car and copy it", "Modify the copied car's engine.horsepower", "Print both cars"] }] },
      { id: "03", title: "Choosing struct vs class", intro: "Decide whether each type should be a struct or a class.", sections: [{ label: "Task", items: ["UserProfile — struct or class? Write a short justification", "ThemeSettings — struct or class? Write a short justification", "SessionManager — struct or class? Write a short justification"] }] },
      { id: "04", title: "Copy-on-write in standard library collections", intro: "Observe when array buffers are shared and when they are copied.", snippet: "var a = [1, 2, 3]\nvar b = a", sections: [{ label: "Tasks", items: ["Print the base address of a's buffer and b's buffer using withUnsafeBufferPointer", "Mutate b (e.g. b.append(4))", "Print both base addresses again", "Print a and b"] }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 02 (Value semantics)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can run the same code multiple times and understand why value copies do not share mutations."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 02.md.", "Your examples clearly show that struct assignment copies values."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You modeled the same concept once as a struct and once as a class, then compared behavior when assigning and mutating."] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You built a nested value type (a struct containing another struct) and showed how copying affects the whole object graph."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You introduced a helper method that returns a modified copy (instead of mutating in place) and used it at least once."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You repeated the copy test using a standard library collection (Array or String) and a custom struct."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared two designs and wrote down when you would prefer: struct (value); class (identity / shared state)"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how value semantics interacts with protocols and generics (protocols often target value types)."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Implement an immutable \"settings\" type: struct Settings { let theme: String; let fontSize: Int }; Write func updating(theme:) and func updating(fontSize:) that return new copies"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["Create one file that demonstrates: struct copy vs class reference; let immutability stopping mutation; copy-on-write observation on an Array using withUnsafeBufferPointer"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "02",
      title: "Value Semantics",
      description: "struct copying, let immutability, nested value types, and copy-on-write in standard library collections.",
      pills: ["struct", "let", "copy", "mutating", "Copy-on-write"],
      defs,
      prev: { href: "/01", label: "← 01: Optionals" },
      next: { href: "/03", label: "03: Protocols →" },
      eval: evaluation,
    });
  }
}
