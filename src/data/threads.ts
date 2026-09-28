/**
 * The four research threads, on the homepage.
 * Each opens with the question the work is trying to answer.
 */
export interface Thread {
  name: string;
  question: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Reliable Reasoning & Calibration",
    question: "When should we trust a model’s answer?",
    blurb:
      "I study hallucinations and overconfidence in medical vision-language models, developing calibration methods that use visual evidence to better estimate answer reliability.",
  },
  {
    name: "Agentic Systems & Evaluation",
    question:
      "How do we evaluate scientific agents when there is no reference answer?",
    blurb:
      "I build multi-agent workflows for biomedical hypothesis generation and study self-critique, output stability, and the reliability of LLM-based evaluators.",
  },
  {
    name: "Inference-Time Scaling & Efficiency",
    question:
      "When does more computation improve an answer—and when is less enough?",
    blurb:
      "I develop test-time scaling and adaptive inference methods to improve medical AI’s accuracy–compute trade-offs.",
  },
  {
    name: "Robustness & Clinical Translation",
    question: "How well do models transfer across devices and patient populations?",
    blurb:
      "I study adaptation under data shift and work with clinicians to bring medical imaging AI into prospective field evaluation.",
  },
];
