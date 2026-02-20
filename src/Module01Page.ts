import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module01Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "if let unwrapping", intro: "Declare an optional and branch on its value.", snippet: "var nickname: String?", sections: [{ label: "Tasks", items: ["If nickname has a value, print Nickname: <value>", "If nickname is nil, print No nickname", "Assign a non-nil value to nickname and print again"] }, { label: "Constraints", items: ["Do not use force unwrap (!) or as!"], dim: true }] },
      { id: "01", title: "guard let and early return", intro: "Write a function that returns early when the optional is nil.", snippet: "func greet(user: String?)", sections: [{ label: "Rules", items: ["If user is nil, print No user provided and return", "Otherwise print Hello, <name>"] }, { label: "Constraints", items: ["Use guard let name = user else { ... }"], dim: true }] },
      { id: "02", title: "Nil coalescing", intro: "Use the ?? operator to supply a default value.", snippet: "var input: String?", sections: [{ label: "Task", items: ["Print input ?? \"Default value\""] }] },
      { id: "03", title: "Optional chaining", intro: "Use optional chaining to safely access nested properties.", snippet: "struct Address { var city: String; var postalCode: String? }\nstruct User { var name: String; var address: Address? }", sections: [{ label: "Instructions", items: ["Create a User without an address.", "Try to read the user's postal code using optional chaining and print a default message.", "Assign a full address to the user."] }] },
      { id: "04", title: "map and flatMap on optionals", intro: "Transform optional values with map and flatMap.", snippet: "let raw: String? = \"42\"", sections: [{ label: "Tasks", items: ["Use raw.map { $0.count } and print the result", "Use raw.flatMap(Int.init) to parse an Int? and print the result", "Then repeat with let raw: String? = \"not a number\""] }, { label: "Constraint", items: ["Do not use if let or guard let for this exercise"], dim: true }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 01 (Optionals)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can compile/run and see output for all optional cases you test."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 01.md.", "You did not use force unwrap (!) or as! in the exercises that forbid it."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You solved the same \"unwrap and print\" task using: if let, guard let, ?? with a default value"] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You handled a case with 2+ optionals at once (multiple binding) and added a condition (if let x, x > 0 style)."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You wrote one helper function that takes an optional and returns a non-optional output (string or number)."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You used optional chaining in a nested type and printed a fallback with ??."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared one of your solutions with another approach and wrote down: When guard is clearer than if let; When map/flatMap is clearer than branching"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain why T and T? being different types changes API design (call sites must handle absence)."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Write func normalize(_ input: String?) -> String: Trim whitespace/newlines; Return \"n/a\" if nil or empty after trimming; Constraint: do not use force unwrap"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["Build a small \"user summary\" print: User with optional nickname and optional Address; Print a one-line summary using optional chaining and ??"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "01",
      title: "Optionals",
      description: "Absence as a type. Safe unwrapping with if let and guard let, optional chaining, nil coalescing, and map/flatMap on optionals.",
      pills: ["if let", "guard let", "Optional chaining", "??", "map / flatMap"],
      defs,
      prev: { href: "/00", label: "← 00: Syntax & Types" },
      next: { href: "/02", label: "02: Value Semantics →" },
      eval: evaluation,
    });
  }
}
