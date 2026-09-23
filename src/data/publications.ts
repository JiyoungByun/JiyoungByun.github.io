/**
 * Publication list.
 *
 * Source of truth is the 2026 resume, NOT the old repo's `_bibliography/papers.bib`
 * — that file stopped being updated in 2021 and is missing everything below from
 * 2024 onward. Newest first. Add new entries at the top.
 */

export type PubStatus =
  | "published"
  | "accepted"
  | "in-preparation"
  | "under-review"
  | "submitted";

export interface Publication {
  title: string;
  authors: string;
  /** Venue as it should read on the page. No impact factors. */
  venue: string;
  year: number;
  status: PubStatus;
  /** Shown on the homepage's "Selected research" block. */
  selected?: boolean;
  /** Marks shared first authorship. */
  equalContribution?: boolean;
  links?: { label: string; url: string }[];
}

/** Rendered in bold wherever the author list appears. */
export const AUTHOR = "Byun, J. Y.";

export const publications: Publication[] = [
  {
    title:
      "Auditing Pairwise Equivalence Judgments: Self-Critique Effects and Diversity Measurement in Multi-Agent Hypothesis Generation",
    authors:
      "Byun, J. Y., Hu, A., Rogers, J., Wang, R., Kesapragada, M., & Shah, F.",
    venue: "NeurIPS 2026 AgenticLS Workshop",
    year: 2026,
    status: "submitted",
  },
  {
    title:
      "Overconfidence and Calibration in Medical VQA: Empirical Findings and Hallucination-Aware Mitigation",
    authors: "Byun, J. Y., Park, Y. J., Corbeil, J.-P., & Ben Abacha, A.",
    venue: "COLM 2026",
    year: 2026,
    status: "accepted",
    selected: true,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2604.02543" },
      { label: "code", url: "https://github.com/JiyoungByun/medvlm" },
      { label: "project page", url: "https://jiyoungbyun.github.io/vlm-hac/" },
    ],
  },
  {
    title:
      "Test-Time Scaling in Clinical Decision Making: An Empirical and Analytical Investigation",
    authors: "Byun, J. Y., Park, Y. J., Azizan, N., & Chellappa, R.",
    venue: "MIDL 2026",
    year: 2026,
    status: "published",
    selected: true,
    links: [
      { label: "paper", url: "https://proceedings.mlr.press/v315/byun26a.html" },
    ],
  },
  {
    title:
      "Adaptive Inference for Medical Vision Transformers: Token Reduction or Early Exit?",
    authors:
      "Byun, J. Y.*, Lee, H. S.*, Shuff, J. M., Venkatesh, R., Shekhawat, N. S., Parikh, K. S., & Chellappa, R.",
    venue: "MIDL 2026",
    year: 2026,
    status: "published",
    selected: true,
    equalContribution: true,
    links: [
      { label: "paper", url: "https://proceedings.mlr.press/v315/byun26b.html" },
      {
        label: "project page",
        url: "https://hyunseolee43.github.io/adaptive-inference-med-vit/",
      },
    ],
  },
  {
    // TODO(jy): confirm the author list — the resume lists this under research
    // experience rather than publications, so the ordering below is a guess.
    title:
      "Cataract Detection from Small Datasets: Fine-Tuning Approaches and Real-World Validation under Data Shifts",
    authors: "Byun, J. Y., et al.",
    venue: "npj Digital Medicine",
    year: 2026,
    status: "in-preparation",
  },
  {
    title:
      "Precise Lens Status Classification via Projection Tuning for Efficient Adaptation to Data Shifts in Small Cataract Image Datasets",
    authors:
      "Byun, J. Y.*, Shuff, J. M.*, Munoz, R., Venkatesh, R., Shekhawat, N. S., Parikh, K. S., & Chellappa, R.",
    venue: "NeurIPS 2024 AIM-FM Workshop",
    year: 2024,
    status: "published",
    equalContribution: true,
    links: [
      { label: "paper", url: "https://openreview.net/forum?id=CMeDPv58rd" },
    ],
  },
  {
    title:
      "PAAN/MIF Nuclease Inhibition Prevents Neurodegeneration in Parkinson's Disease",
    authors: "Park, H., Kam, T. I., … Byun, J. Y., … & Dawson, V. L.",
    venue: "Cell",
    year: 2022,
    status: "published",
    selected: true,
    links: [
      {
        label: "paper",
        url: "https://www.cell.com/cell/fulltext/S0092-8674(22)00467-6",
      },
    ],
  },
  {
    title:
      "Graph Neural Network Based Heterogeneous Propagation Scheme for Classifying Alzheimer's Disease",
    authors: "Byun, J. Y., & Jeong, Y.",
    venue: "bioRxiv",
    year: 2021,
    status: "published",
    links: [
      {
        label: "arXiv",
        url: "https://www.biorxiv.org/content/10.1101/2021.01.21.427712v1",
      },
    ],
  },
  {
    title:
      "Label-free Rapid Viable Enrichment of Circulating Tumor Cell by Photosensitive Polymer-based Microfilter",
    authors: "Kang, Y. T., Doh, I., Byun, J. Y., Chang, H. J., & Cho, Y. H.",
    venue: "Theranostics",
    year: 2017,
    status: "published",
    links: [{ label: "paper", url: "https://www.thno.org/v07p3179.pdf" }],
  },
];

export const selectedPublications = publications.filter(p => p.selected);
