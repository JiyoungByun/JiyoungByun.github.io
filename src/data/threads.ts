/**
 * The four things to be known for, on the homepage.
 *
 * Chosen against what research/applied scientist postings at OpenAI, Anthropic,
 * Google DeepMind, Microsoft Research and Abridge actually ask for: reliability
 * and calibration, evaluation design, agentic reasoning, inference-time compute,
 * and real-world clinical deployment. Each carries one concrete result — the
 * numbers are the point, not the topic labels.
 */
export interface Thread {
  name: string;
  blurb: string;
}

export const threads: Thread[] = [
  {
    name: "Calibration and hallucination",
    blurb:
      "Medical vision-language models are systematically overconfident, and neither scaling nor prompting fixes it. I ground confidence in vision-level hallucination signals, measured across 8 confidence strategies, 3 medical VQA benchmarks and model families from 2B to 38B. COLM 2026, with Microsoft.",
  },
  {
    name: "Evaluation and agents",
    blurb:
      "Multi-agent systems for scientific hypothesis generation, and the harder half: telling whether what they produce is faithful when there is no ground truth to score against. Built at Merck for pharmaceutical toxicology.",
  },
  {
    name: "Inference-time compute",
    blurb:
      "When extra compute at inference is worth spending and when it is not. Test-time scaling gains up to 30.4 pp AUC on clinical diagnosis with analytical scaling laws; adaptive inference cuts 71.4% of FLOPs at 0.1 pp accuracy loss. Both MIDL 2026.",
  },
  {
    name: "Deployment under data shift",
    blurb:
      "Models that survive a new device, a new clinic and a new population. A smartphone cataract screening pipeline built with ophthalmologists at the Wilmer Eye Institute and Aravind Eye Hospital reached 91% accuracy on patients in rural India.",
  },
];
