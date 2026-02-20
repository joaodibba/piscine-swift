import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

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
    buildModulePage(this, {
      moduleId: "02",
      title: "Value Semantics",
      description: "struct copying, let immutability, nested value types, and copy-on-write in standard library collections.",
      pills: ["struct", "let", "copy", "mutating", "Copy-on-write"],
      defs,
      prev: { href: "/01", label: "← 01: Optionals" },
      next: { href: "/03", label: "03: Protocols →" },
    });
  }
}
