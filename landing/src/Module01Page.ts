import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

export class Module01Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });
    const defs: ExerciseDef[] = [
      { id: "00", title: "if let unwrapping", intro: "Declare an optional and branch on its value.", snippet: "var nickname: String?", sections: [{ label: "Tasks", items: ["If nickname has a value, print Nickname: <value>", "If nickname is nil, print No nickname", "Assign a non-nil value to nickname and print again"] }, { label: "Constraints", items: ["Do not use force unwrap (!) or as!"], dim: true }] },
      { id: "01", title: "guard let and early return", intro: "Write a function that returns early when the optional is nil.", snippet: "func greet(user: String?)", sections: [{ label: "Rules", items: ["If user is nil, print No user provided and return", "Otherwise print Hello, <name>"] }, { label: "Constraints", items: ["Use guard let name = user else { ... }"], dim: true }] },
      { id: "02", title: "Optional chaining", intro: "Create nested types and use optional chaining to read through optional properties.", snippet: "struct Address { var city: String }\nstruct User { var name: String; var address: Address? }", sections: [{ label: "Tasks", items: ["Create a User without an address and attempt to read user.address?.city", "Assign an address and print the city again"] }] },
      { id: "03", title: "Nil coalescing", intro: "Use the ?? operator to supply a default value.", snippet: "var input: String?", sections: [{ label: "Task", items: ["Print input ?? \"Default value\""] }] },
      { id: "04", title: "map and flatMap on optionals", intro: "Transform optional values with map and flatMap.", snippet: "let raw: String? = \"42\"", sections: [{ label: "Tasks", items: ["Use raw.map { $0.count } and print the result", "Use raw.flatMap(Int.init) to parse an Int? and print the result", "Then repeat with let raw: String? = \"not a number\""] }, { label: "Constraint", items: ["Do not use if let or guard let for this exercise"], dim: true }] },
    ];
    buildModulePage(this, {
      moduleId: "01",
      title: "Optionals",
      description: "Absence as a type. Safe unwrapping with if let and guard let, optional chaining, nil coalescing, and map/flatMap on optionals.",
      pills: ["if let", "guard let", "Optional chaining", "??", "map / flatMap"],
      defs,
      prev: { href: "/00", label: "← 00: Syntax & Types" },
      next: { href: "/02", label: "02: Value Semantics →" },
    });
  }
}
