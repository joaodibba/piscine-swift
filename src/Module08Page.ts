import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


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

    const evaluation: EvalDef = {
      title: "Evaluation — Module 08 (Closures)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can write closure types explicitly and also rely on inference when appropriate."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 08.md.", "Your @escaping usage matches the storage/lifetime of the closure."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You rewrote one closure-heavy task in two styles: explicit parameter names and types; shorthand arguments ($0, $1) / trailing closures"] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You built a small API that stores closures (event bus / notifier) and triggers them later."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You created a small higher-order function (takes a closure) and used it in 2+ places."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You tested capture behavior: reference capture (reads the latest value); capture list snapshot ([value])"] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared another solution and wrote down: when shorthand closures improve readability; when they hide too much intent"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how closures interact with ARC: stored closures + strong self capture can keep objects alive."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Implement debounce-style behavior (conceptual): store a closure and allow replacing it; only the most recently set closure should run when triggered"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["One file that demonstrates: map/filter/reduce; trailing closures; an @escaping callback stored and triggered later; capture list behavior ([weak self] and [value])"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "08",
      title: "Closures",
      description: "Closure syntax, trailing closures, map/filter/reduce, @escaping, and capture behavior — including [weak self] and value snapshots.",
      pills: ["closure", "trailing", "@escaping", "map/filter/reduce", "capture"],
      defs,
      prev: { href: "/07", label: "← 07: ARC" },
      next: { href: "/09", label: "09: SwiftUI →" },
      eval: evaluation,
    });
  }
}
