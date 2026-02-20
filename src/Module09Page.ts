import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module09Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "Basic layout", intro: "Create a ContentView that renders a title and subtitle.", sections: [{ label: "Content", items: ["Title text: Swifty Companion", "Subtitle: Module 09"] }, { label: "Constraints", items: ["Use VStack(spacing:)", "Apply .font(.title) to the title", "Apply .foregroundStyle(.secondary) to the subtitle"], dim: true }] },
      { id: "01", title: "@State counter", intro: "Create a view with local mutable state.", sections: [{ label: "Requirements", items: ["@State private var count = 0", "A Text showing the current count", "A Button(\"Increment\") that increments count", "A Button(\"Reset\") that sets count to 0"] }] },
      { id: "02", title: "@Binding", intro: "ParentView holds state; ToggleView receives a binding.", sections: [{ label: "Create", items: ["ParentView with @State var isOn = false", "ToggleView with @Binding var isOn: Bool"] }, { label: "Tasks", items: ["Use Toggle(\"Enabled\", isOn: $isOn) inside ToggleView", "In ParentView, show Enabled or Disabled based on isOn"] }] },
      { id: "03", title: "List with Identifiable", snippet: "struct Project: Identifiable {\n    let id = UUID()\n    let name: String\n}", sections: [{ label: "Tasks", items: ["Create an array of 3–5 projects", "Render with List(projects) { project in Text(project.name) }"] }] },
      { id: "04", title: "Navigation to a detail view", sections: [{ label: "Tasks", items: ["Wrap the list in NavigationStack", "Add a NavigationLink for each row to a ProjectDetailView that displays the project name"] }] },
      { id: "05", title: "ObservableObject model", snippet: "final class CounterModel: ObservableObject {\n    @Published var count: Int = 0\n    func inc() { count += 1 }\n    func reset() { count = 0 }\n}", sections: [{ label: "Tasks", items: ["In a view, create the model using @StateObject", "Bind the UI to model.count", "Wire buttons to model.inc() and model.reset()"] }] },
      { id: "06", title: "View state as an enum", snippet: "enum Screen {\n    case list\n    case detail(Project)\n}", sections: [{ label: "Tasks", items: ["Store @State private var screen: Screen", "Use a switch in body to render different UI for .list and .detail", "Add a way to move between the two states (e.g. a button that sets screen)"] }] },
      { id: "07", title: "Observable state as an enum", snippet: "final class LoaderModel: ObservableObject {\n    enum State { case idle; case loading; case loaded([Project]); case failed(String) }\n    @Published var state: State = .idle\n}", sections: [{ label: "Tasks", items: ["In a view, observe the model and render UI with a switch on state", "Add one action that moves from .idle -> .loading -> .loaded(...) (fake the data)"] }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 09 (SwiftUI)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can build and run a SwiftUI view and see updates when state changes."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 09.md.", "Navigation and list rendering work with your sample data."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You built the same UI state two ways: local @State; shared ObservableObject; and compared which is easier to reason about for your example."] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You combined multiple concepts in one view: list rendering + navigation + state updates."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You split UI into small views (row view, detail view, controls view) instead of one large body."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You modeled UI state as an enum and used a switch in body to render different screens/states."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared your SwiftUI structure with another approach and wrote down: one place you can simplify state flow; one place you should extract a view or model"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how SwiftUI relies on: value semantics (views are structs); closures (many APIs take closures); enums/protocols (modeling + view composition)"] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Build a simple UI driven by a loader state: states idle/loading/loaded/failed; one button transitions through states (fake data and fake failure)"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["A small \"mini app\" screen that includes: an enum-driven state machine; a list + detail screen; an ObservableObject model"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "09",
      title: "SwiftUI",
      description: "Declarative UI and state: @State, @Binding, List, NavigationStack, ObservableObject, and enum-driven view state.",
      pills: ["@State", "@Binding", "List", "NavigationStack", "ObservableObject"],
      defs,
      prev: { href: "/08", label: "← 08: Closures" },
      next: { href: "/", label: "All modules" },
      eval: evaluation,
    });
  }
}
