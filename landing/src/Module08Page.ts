import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

export class Module08Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });
    const defs: ExerciseDef[] = [
      { id: "00", title: "Sorting with closures", intro: "Given let nums = [5, 2, 9, 1, 5].", sections: [{ label: "Task", items: ["Sort ascending using three closure styles and print each result: full syntax { (a: Int, b: Int) -> Bool in return a < b }, inferred types { a, b in a < b }, shorthand { $0 < $1 }"] }] },
      { id: "01", title: "map, filter, reduce", intro: "Given let nums = [1, 2, 3, 4, 5, 6].", sections: [{ label: "Tasks", items: ["Create evens using filter", "Create squares using map", "Create sum using reduce", "Print all three"] }] },
      { id: "02", title: "Trailing closure call site", snippet: "func perform(times: Int, action: () -> Void)", sections: [{ label: "Task", items: ["Implement it so it runs action exactly times times", "Call it using trailing closure syntax and print something from the closure"] }] },
      { id: "03", title: "@escaping closures", snippet: "final class EventBus {\n    private var handlers: [() -> Void] = []\n    func onEvent(_ handler: @escaping () -> Void) { handlers.append(handler) }\n    func emit() { handlers.forEach { $0() } }\n}", sections: [{ label: "Tasks", items: ["Register two handlers", "Call emit() twice"] }] },
      { id: "04", title: "Captures and [weak self]", snippet: "final class Greeter {\n    let name: String\n    init(name: String) { self.name = name }\n    func register(on bus: EventBus) { bus.onEvent { print(\"Hello from \\(self.name)\") } }\n    deinit { print(\"Greeter deallocated\") }\n}", sections: [{ label: "Tasks", items: ["Create EventBus and an optional Greeter?, register it, then set to nil", "Call emit() and observe whether deinit runs", "Update the closure to capture [weak self] and repeat"] }] },
      { id: "05", title: "Capture list snapshot vs reference capture", snippet: "var value = 10\nlet closureA = { print(value) }\nlet closureB = { [value] in print(value) }", sections: [{ label: "Tasks", items: ["Change value to a different number", "Call closureA() and closureB() and compare the output"] }] },
    ];
    buildModulePage(this, {
      moduleId: "08",
      title: "Closures",
      description: "Closure syntax, trailing closures, map/filter/reduce, @escaping, and capture behavior — including [weak self] and value snapshots.",
      pills: ["closure", "trailing", "@escaping", "map/filter/reduce", "capture"],
      defs,
      prev: { href: "/07", label: "← 07: ARC" },
      next: { href: "/09", label: "09: SwiftUI →" },
    });
  }
}
