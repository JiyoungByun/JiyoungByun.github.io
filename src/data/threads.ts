/** The four research threads, on the homepage. */
export interface Thread {
  name: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Reliable AI Systems",
    blurb:
      "I develop methods to improve AI reasoning and make uncertainty and failure modes more visible, supporting reliable use in healthcare and science.",
  },
  {
    name: "Evaluation & Measurement",
    blurb:
      "I study how to evaluate AI capabilities and limitations, and whether our metrics and evaluators capture meaningful progress.",
  },
  {
    name: "Agentic Systems",
    blurb:
      "I build and study AI agents that use evidence, tools, and collaboration to tackle complex tasks, exploring what makes their reasoning and interactions more effective and reliable.",
  },
  {
    name: "Research to Practice",
    blurb:
      "I collaborate with researchers, clinicians, and engineers to connect advances in AI with practical needs in healthcare and science, aiming to build systems that support better decisions and scientific discovery.",
  },
];
