import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, type EvalDef, ROOT_STYLE } from "./ModulePageShared";


export class Module00Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });

    const defs: ExerciseDef[] = [
      { id: "00", title: "Variables and type inference", intro: "Write a program that declares a constant and a mutable variable, mutates the variable, and prints a formatted string.", snippet: "School: 42\nStudents: 120", sections: [{ label: "Requirements", items: ["Declare a constant schoolName and a mutable studentCount", "Increment studentCount after the initial declaration", "Print the output shown above using string interpolation"] }, { label: "Constraints", items: ["Use string interpolation — \\(value) syntax", "At least one variable must have an explicit type annotation", "At least one variable must rely on type inference"], dim: true }] },
      { id: "01", title: "Control flow and functions", intro: "Implement a grade classifier as a pure function. Explore Swift's switch statement and range patterns.", snippet: "func grade(score: Int) -> String", sections: [{ label: "Rules", items: ["90...100  →  \"A\"", "80...89   →  \"B\"", "70...79   →  \"C\"", "60...69   →  \"D\"", "Otherwise →  \"F\""] }, { label: "Constraints", items: ["Use switch with closed-range patterns (n...m) — no if/else chains"], dim: true }, { label: "Test", items: ["Call grade(score:) with at least 3 different values and print the results"], dim: true }] },
      { id: "02", title: "Struct basics", intro: "Build a simple value-type counter. This exercise introduces the mutating keyword and how Swift enforces immutability on value types.", snippet: "struct Counter", sections: [{ label: "Requirements", items: ["Stored property: value: Int", "Method increment() — adds 1 to value", "Method reset() — returns value to 0"] }, { label: "Constraints", items: ["Any method that modifies value must be marked mutating", "Do not use a class — this must be a struct"], dim: true }, { label: "Test", items: ["Create a Counter, call increment() twice, then reset()", "Print value after each step — expected: 1, 2, 0"], dim: true }] },
    ];

    const evaluation: EvalDef = {
      title: "Evaluation — Module 00 (Syntax and types)",
      intro: "Use this as a checklist after you finish the module.",
      sections: [
        { label: "1. Foundation module (environment)", items: ["You can run Swift code (Xcode Playground, swift CLI, or a small Xcode project).", "You know where your solutions live (one file per exercise, or one file for the module)."] },
        { label: "2. Self-contained projects (complete the tasks)", items: ["You completed all exercises in 00.md.", "Your output matches the exercise requirements."] },
        { label: "3. Experimentation and feedback (multiple approaches)", items: ["You rewrote one exercise twice (for example: explicit types vs inferred types, or different print formatting).", "You added at least 3 extra test cases (different values) and checked the output."] },
        { label: "4. Incremental complexity (combine basics)", items: ["You combined multiple basics in one small program: variables + control flow + function + printing."] },
        { label: "5. Modular thinking (small reusable pieces)", items: ["You extracted at least one helper function instead of duplicating code."] },
        { label: "6. Repetition with variation (same skill, new constraint)", items: ["You solved a small follow-up using the same concept with a constraint: e.g. write grade(score:) using both switch and if/else and compare."] },
        { label: "7. Peer review and comparison (learn from differences)", items: ["You compared your solution with someone else's (or a reference) and wrote down: One readability improvement you can adopt; One thing you prefer in your version."] },
        { label: "8. Problem integration (connect to other modules)", items: ["You can explain how let/var and value mutability will matter later (struct mutation, optionals, ARC)."] },
        { label: "9. Independent challenge (no step-by-step)", items: ["Write a tiny program from scratch: Input: an array of 5 ints; Output: the min, max, and average; Constraint: use at least one function and one loop"] },
        { label: "10. Capstone/consolidation (mini demo)", items: ["Create a single file that demonstrates: let vs var; a function with argument labels; a switch with ranges"] },
      ],
    };

    buildModulePage(this, {
      moduleId: "00",
      title: "Syntax & Types",
      description: "Swift basics. Variables, functions, control flow, and your first struct — the foundations everything else builds on.",
      pills: ["Variables", "Functions", "Control flow", "Structs"],
      defs,
      prev: { href: "/", label: "← All modules" },
      next: { href: "/01", label: "01: Optionals →" },
      eval: evaluation,
    });
  }
}
