# Veyla — Trust & Safety Desk

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/veyla-trust-safety-desk/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, no-build HTML/CSS/JavaScript reconstruction of the 5.23-second screen recording.

## Screens / modules visible in the recording
- **Overview:** “Good morning, Ines”, check status metrics, daily checks heatmap, review queue, next-up reviewer list
- **Protection:** Rules and Thresholds tabs; coverage 7/8; rule list with hit counts, Review / Decline actions and on/off switches
- **Reports:** checks trend graph, previous-period dashed comparison, 7d / 14d range, metric selector, totals and day-by-day table
- **Checks, Inbox, Sign-ins, Sources, Team, Settings, Help:** navigable desk sections

## Interactions
- Sidebar navigation and collapse
- Search field / Cmd-K focus shortcut
- Protection rule category filters
- Toggle individual protection rules
- Open Review / Decline decision dialogs
- Protection Rules / Thresholds tabs
- Reports metric and period controls
- Toggle comparison series
- Export report table as CSV
- New check dialog
- Toast feedback and responsive layout

## Run
No package manager or dependencies required. Extract the ZIP and open `index.html`.

Or start a local server:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Source code visible in the recording
The recording shows `src/motion.ts` with this readable animation logic:
- Leading edge moves first, trailing edge catches up
- Direction is calculated from `to` and `prev` coordinates
- `clipPath` is repainted on GSAP updates
- Lead edge: `0.36s`, `power3.out`
- Trailing edge: `0.55s`, `power3.inOut`
- Cross-axis edges: `0.45s`, `power3.inOut`

The visible source is a fragment, not the full original repository. It is preserved in `src/motion.ts`. The main runnable project recreates the visible product screens and interactions with vanilla HTML/CSS/JS; it does not claim to reproduce unseen source code byte-for-byte.

## Demo-data / production note
All names, counts, applicants, check outcomes and provider statuses are sample interface data. This project does not connect to a real identity verification provider, sanctions database, customer records, sign-in system or review backend. Decisions and toggles are local demo interactions only.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
