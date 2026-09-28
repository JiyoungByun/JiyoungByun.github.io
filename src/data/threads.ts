/** The four research threads, on the homepage. */
export interface Thread {
  name: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Reliable Systems",
    blurb:
      "Develop methods to improve reasoning in large language and vision-language models and identify when their answers can be trusted.",
  },
  {
    name: "Evaluation & Measurement",
    blurb:
      "Study how to evaluate model capabilities and limitations, including the reliability of LLM-based judges and whether evaluation metrics capture meaningful progress.",
  },
  {
    name: "Agentic Systems",
    blurb:
      "Build multi-agent systems that combine evidence, tools, and collaboration to tackle complex tasks, exploring what makes their reasoning and interactions more effective and reliable.",
  },
  {
    name: "Research to Practice",
    blurb:
      "Collaborate with researchers, clinicians, and engineers to connect advances in AI with practical needs in healthcare and science, aiming to build systems that support better decisions and scientific discovery.",
  },
];
