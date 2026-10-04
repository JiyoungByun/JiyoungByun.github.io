# assets-src

Full-resolution originals for everything rendered on the site. Nothing here is
served or imported — Astro only builds from `src/` and `public/`. This folder
exists so the originals survive if the Downloads copies are cleared.

| Original | Used as | Processing applied |
|---|---|---|
| `profile.png` | `src/assets/images/profile.jpg` | cropped 3:4 to head-and-shoulders (`sips -c 820 615 --cropOffset 30 238`), then JPEG q92 |
| `mas_eval.png` | `public/pubs/agenticls.png` | downscaled to 640px wide |
| `cataract_screening.webp` | `public/pubs/cataract.jpg` | converted to JPEG q82, downscaled to 640px |
| `adaptive_inference.png` | `public/pubs/adaptive.png` | downscaled to 640px wide |
| `tts1.png` | `public/pubs/tts.png` | downscaled to 700px wide |

To re-crop the profile photo differently, start from `profile.png` here rather
than from the cropped copy in `src/assets/images/`.
| `og-cover-source.png` | `public/og-cover.jpg` | rendered 1200x630 from an HTML card, then JPEG q88 |

The social preview card (`og-cover.jpg`) is what LinkedIn, Twitter and Slack show when
the site is linked. It replaced astro-paper's shipped `default-og.jpg`, which carried the
theme's own branding.

