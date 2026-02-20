import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

export class Module07Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });
    const defs: ExerciseDef[] = [
      { id: "00", title: "Reference counting and deinit", snippet: "class Person {\n    let name: String\n    init(name: String) { self.name = name; print(\"\\(name) initialized\") }\n    deinit { print(\"\\(name) deallocated\") }\n}", sections: [{ label: "Tasks", items: ["Create an optional Person? and assign an instance", "Assign the same instance to a second variable", "Set the first variable to nil, then the second to nil", "Observe when deinit runs"] }] },
      { id: "01", title: "Create a strong reference cycle", snippet: "class Owner { var pet: Pet?; deinit { print(\"Owner deallocated\") } }\nclass Pet { var owner: Owner?; deinit { print(\"Pet deallocated\") } }", sections: [{ label: "Tasks", items: ["Instantiate both types and make them reference each other", "Set both external references to nil", "Observe that neither deinit runs"] }] },
      { id: "02", title: "Break the cycle with weak", snippet: "class Pet { weak var owner: Owner? }", sections: [{ label: "Task", items: ["Repeat Exercise 01 and observe deallocation"] }] },
      { id: "03", title: "weak vs unowned", snippet: "class Customer { let name: String; var card: CreditCard? }\nclass CreditCard { let number: Int; unowned let customer: Customer }", sections: [{ label: "Task", items: ["Write a short explanation of why customer is unowned instead of weak, and what would happen if the lifetime assumption is violated"] }] },
      { id: "04", title: "Retain cycle through a stored closure", snippet: "final class Notifier {\n    var handlers: [() -> Void] = []\n    func add(_ handler: @escaping () -> Void) { handlers.append(handler) }\n}\nfinal class Listener {\n    let name: String\n    init(name: String) { self.name = name }\n    func subscribe(to notifier: Notifier) { notifier.add { print(self.name) } }\n    deinit { print(\"Listener deallocated\") }\n}", sections: [{ label: "Tasks", items: ["Create a Notifier and an optional Listener?, subscribe, then set the listener to nil", "Observe whether deinit runs", "Update the closure capture to break the cycle and repeat the test"] }] },
    ];
    buildModulePage(this, {
      moduleId: "07",
      title: "ARC",
      description: "Reference counting, deinit, strong reference cycles, and breaking cycles with weak and unowned. Stored closures and capture cycles.",
      pills: ["class", "deinit", "weak", "unowned", "retain cycle"],
      defs,
      prev: { href: "/06", label: "← 06: Error Handling" },
      next: { href: "/08", label: "08: Closures →" },
    });
  }
}
