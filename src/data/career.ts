/**
 * Experience and education for the About page.
 * Source: the 2026 resume. Deliberately omits GPAs — normal on a resume,
 * odd on a public page.
 */

/** One project inside a role: a short label, then what it was. */
export interface Bullet {
  name: string;
  detail: string;
  /** Venue, award, or collaborator — each rendered as its own chip. */
  venues?: string[];
}

export interface Role {
  title: string;
  org: string;
  dates: string;
  /** Still ongoing — gets the filled marker. */
  current?: boolean;
  summary: string;
  bullets: Bullet[];
}

export interface Degree {
  dates: string;
  degree: string;
  field: string;
  org: string;
  advisor?: string;
  thesis?: string;
}

export const roles: Role[] = [
  // Ordered by end date, so the role still running comes first.
  {
    title: "Graduate Research Assistant",
    org: "Johns Hopkins University",
    dates: "Aug 2022 – Dec 2026",
    current: true,
    summary:
      "Towards Reliable Biomedical Decision-Making with Foundation Models.",
    bullets: [
      {
        name: "Hallucination-Aware Calibration",
        detail:
          "Developed vision-grounded calibration for medical VLMs, improving uncertainty estimates and error discrimination on open-ended questions, with ECE reductions up to 0.38 pp and AUROC gains up to 7.3 pp.",
        venues: ["COLM 2026"],
      },
      {
        name: "Test-Time Scaling",
        detail:
          "Investigated inference-time sampling for clinical reasoning without fine-tuning, demonstrating AUC gains up to 30.4 pp across three diagnosis benchmarks and deriving analytical scaling laws.",
        venues: ["MIDL 2026"],
      },
      {
        name: "Adaptive Inference",
        detail:
          "Developed adaptive token reduction and early exit for medical vision transformers, reducing FLOPs by 71.4% on average with only a 0.1 pp accuracy loss.",
        venues: ["MIDL 2026"],
      },
      {
        name: "Adaptation under Distribution Shift",
        detail:
          "Developed cataract detection framework and led a comprehensive study of fine-tuning strategies under distribution shift and limited data; the resulting model achieved 91% accuracy in prospective deployment in rural India.",
        venues: ["NeurIPS 2024 AIM-FM Workshop"],
      },
    ],
  },
  {
    title: "Research Intern",
    org: "Merck & Co.",
    dates: "Feb 2026 – Aug 2026",
    summary:
      "Multi-agent system for pharmaceutical toxicology hypothesis generation.",
    bullets: [
      {
        name: "Multi-Agent Hypothesis Generation",
        detail:
          "Built an end-to-end framework combining evidence retrieval, tool use, and iterative critique over proprietary multimodal data to generate mechanistic hypotheses for pharmaceutical toxicology.",
      },
      {
        name: "Agent Evaluation & LLM-as-a-Judge",
        detail:
          "Used controlled reruns and perturbation tests to evaluate self-critique and audit LLM judges, showing that initial critique drives most hypothesis changes and evaluation criteria shape measured diversity.",
        venues: ["NeurIPS 2026 AgenticLS Workshop"],
      },
    ],
  },
  {
    title: "Research Associate",
    org: "KAIST",
    dates: "Feb 2019 – Apr 2022",
    summary: "Graph neural networks for Alzheimer's disease classification.",
    bullets: [
      {
        name: "GNN for Alzheimer's",
        detail:
          "bipartite subject–demographic graph with APPNP over resting-state fMRI and demographic data.",
        venues: ["ASMRM & ICMRI 2020", "Best Poster"],
      },
      {
        name: "KAIST–KT Collaboration",
        detail: "managed a research partnership funded at $85K per year.",
      },
    ],
  },
];

export const degrees: Degree[] = [
  {
    dates: "2022 – 2026",
    degree: "Ph.D.",
    field: "Biomedical Engineering",
    org: "Johns Hopkins University",
    advisor: "Rama Chellappa",
    thesis:
      "Towards Reliable Biomedical Decision-Making with Foundation Models",
  },
  {
    dates: "2019 – 2021",
    degree: "M.S.",
    field: "Bio and Brain Engineering",
    org: "KAIST",
    advisor: "Yong Jeong",
    thesis: "Graph Neural Network for Predicting Alzheimer's Disease",
  },
  {
    dates: "2013 – 2018",
    degree: "B.S.",
    field: "Bio and Brain Engineering",
    org: "KAIST",
  },
];
