/**
 * Experience and education for the About page.
 * Source: the 2026 resume. Deliberately omits GPAs — normal on a resume,
 * odd on a public page.
 */

/** One project inside a role: a short label, then what it was. */
export interface Bullet {
  name: string;
  detail: string;
  /** Venue or collaborator, set small after the detail. */
  venue?: string;
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
          "vision-grounded signals sharpen confidence in medical VQA, with the largest gains on open-ended questions.",
        venue: "With Microsoft · COLM 2026",
      },
      {
        name: "Test-Time Scaling",
        detail:
          "up to 30.4 pp AUC across three diagnosis benchmarks, with analytical scaling laws.",
        venue: "MIDL 2026",
      },
      {
        name: "Adaptive Inference",
        detail:
          "71.4% fewer FLOPs at 0.1 pp accuracy loss across five datasets.",
        venue: "MIDL 2026",
      },
      {
        name: "Cataract Screening",
        detail:
          "smartphone pipeline built with ophthalmologists at the Wilmer Eye Institute and Aravind Eye Hospital, reaching 91% accuracy in prospective deployment in rural India.",
      },
    ],
  },
  {
    title: "Research Intern",
    org: "Merck & Co.",
    dates: "Feb 2026 – Aug 2026",
    summary:
      "Multi-agent AI for pharmaceutical toxicology hypothesis generation.",
    bullets: [
      {
        name: "Multi-Agent Hypothesis Generation",
        detail:
          "end-to-end framework over enterprise multimodal databases for drug safety and mechanistic reasoning.",
      },
      {
        name: "Faithfulness Evaluation",
        detail:
          "quantifies hypothesis grounding without ground-truth labels, and compares agent architectures.",
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
