/**
 * Experience and education for the About page.
 * Source: the 2026 resume. Deliberately omits GPAs — normal on a resume,
 * odd on a public page.
 */

export interface Role {
  title: string;
  org: string;
  dates: string;
  /** Still ongoing — gets the filled marker. */
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface Degree {
  dates: string;
  degree: string;
  field: string;
  org: string;
  /** Advisor and thesis, where there is one. */
  detail?: string;
}

export const roles: Role[] = [
  {
    title: "Research Intern",
    org: "Merck & Co.",
    dates: "Feb 2026 – Aug 2026",
    summary:
      "Multi-agent AI for pharmaceutical toxicology hypothesis generation.",
    bullets: [
      "Designed and built an end-to-end multi-agent framework for toxicology hypothesis generation, integrating enterprise multimodal databases for drug safety and mechanistic reasoning.",
      "Developed an evidence-grounding and evaluation framework to quantify LLM hypothesis faithfulness without ground-truth labels, systematically comparing agent architectures.",
    ],
    tags: ["Multi-agent", "Tool-calling", "LangChain", "Databricks"],
  },
  {
    title: "Graduate Research Assistant",
    org: "Johns Hopkins University",
    dates: "Aug 2022 – Dec 2026",
    current: true,
    summary:
      "Trustworthy biomedical reasoning with large language and vision-language models.",
    bullets: [
      "Proposed Hallucination-Aware Calibration in collaboration with Microsoft, using vision-grounded hallucination signals to improve reliability and AUROC, with the largest gains on open-ended clinical questions.",
      "Built a test-time scaling framework for medical decision making, reaching up to 30.4 pp AUC improvement across three medical image diagnosis benchmarks and deriving analytical scaling laws.",
      "Proposed a unified adaptive inference framework for medical Vision Transformers — 71.4% average FLOPs reduction at 0.1 pp accuracy loss across five datasets.",
      "Built a smartphone-imaging pipeline for cataract screening with ophthalmologists at the JHU Wilmer Eye Institute and Aravind Eye Hospital, reaching 91% accuracy in prospective deployment in rural India.",
    ],
    tags: ["PyTorch", "VLMs", "Calibration", "Efficient inference"],
  },
  {
    title: "Research Associate",
    org: "KAIST",
    dates: "Feb 2019 – Apr 2022",
    summary:
      "Graph neural networks for Alzheimer's disease classification.",
    bullets: [
      "Led a GNN framework for Alzheimer's classification from resting-state fMRI and demographic data, proposing a bipartite subject–demographic graph with APPNP.",
      "Managed a KAIST–KT Corp. research collaboration funded at $85K per year.",
    ],
    tags: ["GNN", "rs-fMRI", "PyTorch"],
  },
];

export const degrees: Degree[] = [
  {
    dates: "2022 – 2026",
    degree: "Ph.D.",
    field: "Biomedical Engineering",
    org: "Johns Hopkins University",
    detail:
      "Advised by Rama Chellappa. Thesis: Trustworthy Biomedical Reasoning with Large Language and Vision-Language Models.",
  },
  {
    dates: "2019 – 2021",
    degree: "M.S.",
    field: "Bio and Brain Engineering",
    org: "KAIST",
    detail:
      "Advised by Yong Jeong. Thesis: Graph Neural Network for Predicting Alzheimer's Disease.",
  },
  {
    dates: "2013 – 2018",
    degree: "B.S.",
    field: "Bio and Brain Engineering",
    org: "KAIST",
  },
];
