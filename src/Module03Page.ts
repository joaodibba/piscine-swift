import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module03Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "Define a protocol and conform to it", snippet: "protocol Describable {\n    var description: String { get }\n}\nstruct User {\n    let login: String\n    let level: Int\n}", sections: [{ label: "Tasks", items: ["Make User conform to Describable", "Implement description to return a readable string (e.g. dibba (lvl 7))", "Print user.description"] }] },
      { id: "01", title: "Protocol requirement with mutation", snippet: "protocol Damageable {\n    var hp: Int { get set }\n    var isAlive: Bool { get }\n    mutating func takeDamage(_ amount: Int)\n}\nstruct Player: Damageable", sections: [{ label: "Rules", items: ["takeDamage(_:) reduces hp but never below 0", "isAlive returns hp > 0"] }, { label: "Test", items: ["Start with hp = 10, apply damage, and print hp and isAlive after each call"], dim: true }] },
      { id: "02", title: "Protocol composition", snippet: "protocol Named { var name: String { get } }\nprotocol Identified { var id: Int { get } }\nfunc printBadge(for person: any Named & Identified)", sections: [{ label: "Output format", items: ["#<id> - <name>"] }, { label: "Task", items: ["Create a struct Employee that conforms to both protocols and call printBadge(for:)"], dim: true }] },
      { id: "03", title: "Associated types", snippet: "protocol Bag {\n    associatedtype Item\n    mutating func add(_ item: Item)\n    var count: Int { get }\n}\nstruct IntBag: Bag", sections: [{ label: "Rules", items: ["Store items in [Int]", "add(_:) appends", "count returns the number of items"] }, { label: "Test", items: ["Add three integers and print count"], dim: true }] },
      { id: "04", title: "Generic constraint vs any existential", snippet: "func logExistential(_ value: any CustomStringConvertible) { print(value.description) }\nfunc logGeneric<T: CustomStringConvertible>(_ value: T) { print(value.description) }", sections: [{ label: "Tasks", items: ["Call both functions with Int, String, and a custom type that conforms to CustomStringConvertible"] }] },
      { id: "05", title: "Associated types and why any does not work", intro: "Using the Bag protocol from Exercise 03, try var bags: [any Bag] = [].", sections: [{ label: "Task", items: ["Record the compiler error and write a short explanation of what information is missing"] }, { label: "Then write one working alternative", items: ["A generic function: func fill<B: Bag>(_ bag: inout B, with item: B.Item, times: Int)", "Or an opaque return type: func makeIntBag() -> some Bag"], dim: true }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 03 (Protocols)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can compile code that uses both generic constraints (T: P) and existentials (any P)."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 03.md.", "Your protocol examples work for both struct and class where appropriate."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You solved one task using generics and the same task using any P, and you compared the call sites."] },
        { label: "4. Incremental complexity (combine concepts)", items: ["You combined protocols with value semantics: A struct conforming to a protocol with a mutating requirement."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You designed one protocol that captures a single responsibility and used it in 2+ types."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You used protocol composition (any P & Q) and tested it with a new type."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared your protocol design with an alternative (inheritance or a single large protocol) and noted tradeoffs."] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain why protocols with associatedtype behave differently and often force generic code."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Design a tiny \"pipeline\": protocol Transformer with associatedtype Input/Output and func run; implement two transformers and compose them with a generic function."] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["One file that demonstrates: protocol conformance on a struct; protocol composition (P & Q); an associatedtype protocol that cannot be stored as [any P]; a working generic alternative"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "03",
      title: "Protocols",
      description: "Interfaces without inheritance — mutating requirements, composition with any A & B, associated types, and generics vs existentials.",
      pills: ["protocol", "conformance", "mutating", "associatedtype", "any"],
      defs,
      prev: { href: "/02", label: "← 02: Value Semantics" },
      next: { href: "/04", label: "04: Extensions →" },
      eval: evaluation,
    });
  }
}
