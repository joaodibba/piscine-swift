import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module06Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "Throw a custom error", snippet: "enum ValidationError: Error {\n    case tooShort\n    case invalidCharacter(Character)\n}\nfunc validate(username: String) throws", sections: [{ label: "Rules", items: ["If username.count < 3, throw .tooShort", "If the username contains a space, throw .invalidCharacter(\" \")", "Otherwise return normally"] }, { label: "Test", items: ["Use do/catch with \"ab\", \"john doe\", and \"dibba\""], dim: true }] },
      { id: "01", title: "try? and try!", snippet: "func parseInt(_ s: String) throws -> Int", sections: [{ label: "Tasks", items: ["Use try? to parse \"123\" and \"abc\" and print the results", "Use try! to parse \"123\" and print the result"] }] },
      { id: "02", title: "Propagate errors with throws", snippet: "func loadUser(from input: String) throws -> (id: Int, name: String)", sections: [{ label: "Rules", items: ["Input format is \"id:name\" (e.g. \"42:dibba\")", "If : is missing, throw an error", "If id is not an integer, throw an error"] }, { label: "Task", items: ["Call from a run() function and handle errors with do/catch"], dim: true }] },
      { id: "03", title: "Return Result", snippet: "enum FetchError: Error { case notFound, offline }\nfunc fetchLevel(login: String) -> Result<Int, FetchError>", sections: [{ label: "Rules", items: ["If login == \"offline\", return .failure(.offline)", "If login.isEmpty, return .failure(.notFound)", "Otherwise return .success(7) (or any integer)"] }, { label: "Task", items: ["Handle the result with switch"], dim: true }] },
      { id: "04", title: "defer", snippet: "func doWork(shouldFail: Bool) throws {\n    print(\"start\")\n    defer { print(\"cleanup\") }\n    if shouldFail { throw ValidationError.tooShort }\n    print(\"done\")\n}", sections: [{ label: "Task", items: ["Call with shouldFail: false and shouldFail: true, and observe the print order"] }] },
      { id: "05", title: "Pick a failure model (throws vs Result vs Optional)", intro: "Create a single fetch operation in three forms: throwing, Result, and Optional.", snippet: "func levelThrows(login: String) throws -> Int\nfunc levelResult(login: String) -> Result<Int, FetchError>\nfunc levelOptional(login: String) -> Int?", sections: [{ label: "Tasks", items: ["Use the same input rules for all three (pick at least 2 failure cases)", "Write three call sites that show how the caller changes for each style"] }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 06 (Error handling)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can run the same failing/succeeding cases repeatedly and see consistent behavior."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 06.md.", "Your errors are represented as types (enum ...: Error) and you can catch them."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You implemented the same operation using three styles: throws; Result; Optional; and compared the call sites."] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You wrote a function that does multiple fallible steps and either: throws once with a meaningful error, or returns a structured Result with enough context."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You separated \"parsing/validation\" from \"business logic\" into separate functions."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You repeated a throwing function call using: try + do/catch; try?; try! (only on a case you justify as impossible to fail)"] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared another error model and wrote down: when you prefer throwing; when you prefer Result (storage/composition); when Optional is enough"] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how enums with associated values can encode richer failure states than optionals."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Write a tiny parser: Input: \"id:name\" string; Output: (Int, String); Provide one version that throws and one version that returns Result"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["One file that demonstrates: custom error type; do/catch with specific cases; defer usage; a side-by-side comparison of throws vs Result vs Optional"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "06",
      title: "Error Handling",
      description: "Model failure explicitly: throws, do/catch, try?, try!, Result, defer, and when to use each style.",
      pills: ["throws", "do/catch", "try?", "Result", "defer"],
      defs,
      prev: { href: "/05", label: "← 05: Enums" },
      next: { href: "/07", label: "07: ARC →" },
      eval: evaluation,
    });
  }
}
