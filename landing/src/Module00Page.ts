import { Component } from "typecomposer";
import { buildModulePage, type ExerciseDef, ROOT_STYLE } from "./ModulePageShared";

export class Module00Page extends Component {
  constructor() {
    super({ className: "tc-root", style: ROOT_STYLE });
    const defs: ExerciseDef[] = [
      { id: "00", title: "Variables and type inference", intro: "Write a program that declares a constant and a mutable variable, mutates the variable, and prints a formatted string.", snippet: "School: 42\nStudents: 120", sections: [{ label: "Requirements", items: ["Declare a constant schoolName and a mutable studentCount", "Increment studentCount after the initial declaration", "Print the output shown above using string interpolation"] }, { label: "Constraints", items: ["Use string interpolation — \\(value) syntax", "At least one variable must have an explicit type annotation", "At least one variable must rely on type inference"], dim: true }] },
      { id: "01", title: "Control flow and functions", intro: "Implement a grade classifier as a pure function. Explore Swift's switch statement and range patterns.", snippet: "func grade(score: Int) -> String", sections: [{ label: "Rules", items: ["90...100  →  \"A\"", "80...89   →  \"B\"", "70...79   →  \"C\"", "60...69   →  \"D\"", "Otherwise →  \"F\""] }, { label: "Constraints", items: ["Use switch with closed-range patterns (n...m) — no if/else chains"], dim: true }, { label: "Test", items: ["Call grade(score:) with at least 3 different values and print the results"], dim: true }] },
      { id: "02", title: "Struct basics", intro: "Build a simple value-type counter. This exercise introduces the mutating keyword and how Swift enforces immutability on value types.", snippet: "struct Counter", sections: [{ label: "Requirements", items: ["Stored property: value: Int", "Method increment() — adds 1 to value", "Method reset() — returns value to 0"] }, { label: "Constraints", items: ["Any method that modifies value must be marked mutating", "Do not use a class — this must be a struct"], dim: true }, { label: "Test", items: ["Create a Counter, call increment() twice, then reset()", "Print value after each step — expected: 1, 2, 0"], dim: true }] },
    ];
    buildModulePage(this, {
      moduleId: "00",
      title: "Syntax & Types",
      description: "Swift basics. Variables, functions, control flow, and your first struct — the foundations everything else builds on.",
      pills: ["Variables", "Functions", "Control flow", "Structs"],
      defs,
      prev: { href: "/", label: "← All modules" },
      next: { href: "/01", label: "01: Optionals →" },
    });
  }
}
