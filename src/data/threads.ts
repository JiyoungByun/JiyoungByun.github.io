/** The four research threads, on the homepage. */
export interface Thread {
  name: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Reliable Reasoning",
    blurb:
      "I develop methods to improve biomedical reasoning and estimate when model answers can be trusted. My work combines test-time scaling for clinical decision-making with hallucination-aware calibration of medical vision-language models.",
  },
  {
    name: "Evaluation & Measurement",
    blurb:
      "I design evaluations for AI-generated scientific hypotheses when reference answers are unavailable. I audit how LLM judges and comparison criteria shape conclusions about self-critique, output stability, and diversity.",
  },
  {
    name: "Agentic Systems",
    blurb:
      "I build multi-agent workflows for biomedical hypothesis generation, integrating evidence retrieval and iterative critique. I study how agent interactions change the resulting hypotheses and where additional critique offers diminishing returns.",
  },
  {
    name: "Clinical Translation",
    blurb:
      "I work with clinicians to adapt and evaluate medical imaging AI across devices, populations, and computational constraints. This includes smartphone-based cataract screening evaluated prospectively in rural India.",
  },
];
