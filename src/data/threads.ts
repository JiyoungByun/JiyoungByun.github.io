/** The four strands of the thesis, shown on the homepage. */
export interface Thread {
  name: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Calibration and hallucination",
    blurb:
      "Medical VLMs are systematically overconfident, and neither scaling nor prompting fixes it. I work on grounding confidence in what the model actually saw.",
  },
  {
    name: "Multi-agent systems",
    blurb:
      "Orchestrating LLM agents for scientific hypothesis generation, and measuring whether their output is faithful when there is no ground truth to check against.",
  },
  {
    name: "Test-time scaling",
    blurb:
      "How much extra compute at inference actually buys you on clinical reasoning tasks, and where the returns stop.",
  },
  {
    name: "Efficient inference",
    blurb:
      "Token reduction and early exiting for medical vision transformers, so these models are cheap enough to deploy.",
  },
];
