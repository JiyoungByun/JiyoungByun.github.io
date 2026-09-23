---
author: Ji Young Byun
pubDatetime: 2026-09-23T12:00:00Z
title: "Medical VLMs are confidently wrong, and scaling doesn't fix it"
slug: calibration-in-medical-vlms
featured: true
draft: true
tags:
  - calibration
  - medical-vlm
description: "Why vision-language models stay overconfident on clinical questions as they get bigger, and what hallucination-aware calibration actually buys you."
---

> **Scaffold, not a finished post.** Frontmatter and structure are set up; the body
> is yours to write. Delete this callout and flip `draft: false` to publish.

A walkthrough of [Overconfidence and Calibration in Medical VQA](https://arxiv.org/abs/2604.02543) (COLM 2026).

## Table of contents

## The problem

<!-- What overconfidence looks like in practice. One example from the paper's figures. -->

## Why scaling and prompting don't help

<!-- The empirical result across 2B-38B model families. -->

## Hallucination-aware calibration

<!-- The method. Math renders with KaTeX: -->

Expected calibration error, for reference:

$$
\mathrm{ECE} = \sum_{m=1}^{M} \frac{|B_m|}{n}\,\bigl| \mathrm{acc}(B_m) - \mathrm{conf}(B_m) \bigr|
$$

## What it buys you

<!-- ECE and AUROC deltas; where the gains concentrate. -->

## Takeaways
