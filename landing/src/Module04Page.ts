import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

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
    buildModulePage(this, {
      moduleId: "04",
      title: "Extensions",
      description: "Add behavior and conformances after the fact: computed properties, methods, protocol conformance in extensions, and constrained extensions with where.",
      pills: ["extension", "computed property", "where", "default implementation"],
      defs,
      prev: { href: "/03", label: "← 03: Protocols" },
      next: { href: "/05", label: "05: Enums →" },
    });
  }
}
