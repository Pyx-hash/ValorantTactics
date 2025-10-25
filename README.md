# ValorantTactics
** A tactic map & guide viewer for Valorant**

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo / Live Site](#demo--live-site)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building / Deployment](#building--deployment)
- [Usage](#usage)
- [Navigating Maps](#navigating-maps)
- [Adding or Editing Tactics](#adding-or-editing-tactics)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview
ValorantTactics is a browser-based application designed to help players of Valorant view and manage tactical information, plan strategy, and review map layout with annotations. It's ideal for team coordination, walkthroughs, sharing tactics among friends or community, and helping newcomers get up to speed with map awareness.

## Features
- Interactive Map viewer for Valorant maps (spawns, bomb sites, common angles, rotations)
- Annotation tools (marks, lines, zones) and saved tactics per map
- Responsive UI - works on desktop and mobile browsers
- Lightweight and static - can be hosted on GitHub Pages or any static-file server
- Easily extendable: add new maps, update annotations, customize styling

## Demo / Live Site
The live version is hosted here:
[https://pyx-hash.github.io/ValorantTactics/] Feel free to explore the maps and tactics.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Static hosting environment (GitHub Pages, Netlify, Vercel, any HTTP Server)

### Installation
1. Clone the repository:
    ```shell
    git clone https://github.com/Pyx-hash/ValorantTactics.git
    cd ValorantTactics
    ```
2. Install dependencies:
    ```shell
    npm install
    ```

### Running Locally
If the project uses a dev server, run:
    ```shell
    npm run dev
    ```
Then open http://localhost:3000 (or port shown) in your browser.
If it's pure static HTML/CSS/JS, you can open index.html or with a simple HTTP Server (e.g., npx http-server).

### Building / Deployment
If a build step is required:

```shell
npm run build
```
Then deploy the contents of the dist/ (or build/) folder to your static host (GitHub Pages, etc). On GitHub Pages, you can push to gh-pages branch or set the repositories "Pages" to serve/docs folder.

### Usage
- Navigating Maps
- Select a map from the list (e.g., Bind, Haven, Split, Icebox).
- Use zoom / pan controls to explore the layout.
- Toggle layers / annotations for spawns, sites, common positions.
- Click on an annotation marker to view details or edit.
- Adding or Editing Tactics


### Project Structure
ValorantTactics/
├── docs/                 # Hostable static site folder (used by GitHub Pages)
│   ├── index.html
│   ├── maps/              # Map images + layout data
│   ├── tactics/           # Stored tactic‐files (JSON or similar)
│   └── assets/            # CSS / JS / images
├── src/                  # (Optional) Source files if using build tooling
│   ├── components/
│   ├── styles/
│   └── main.js
├── .gitignore
├── package.json
└── README.md

Feel free to adapt this structure depending on actual implementations.

### Technologies Used

- HTML5/ CSS3/ JavaScript (vanilla or framework of your choice)

- Map library or your custom canvas / svg system for overlaying annotations

- GitHub Pages for free hosting


### Contributing
1. Contributions are welcome! If you’d like to add maps, tactics, fix bugs or improve UX, please follow the steps:

2. Fork the repository.

3. Create a feature branch: git checkout -b feature/my-tactic

4. Make your changes and test locally.

5. Commit with meaningful message and push to your fork.

6. Open a Pull Request describing your change.

Await review.
Please respect the code of conduct and keep contributions respectful and inclusive.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements

- Thanks tot the Valorant community for tactical ideas and map layouts.
- Inspiration taken from open-source map viewers and overlay tools.
- Hosted on GitHub Pages thanks to GitHub.
- Enjoy exploring tactics, refining strategies, and coordinating with your team!

---
