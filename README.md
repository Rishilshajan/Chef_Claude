# Chef Claude — AI-powered Recipe Assistant
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google&logoColor=white&style=for-the-badge)

Chef Claude is an experimental, web app that magically turns the ingredients you have into cooking inspiration. Built while learning React, this project sends ingredients from the browser to an AI (Google Gemini) and returns personalized recipe ideas — fast, friendly, and fun.

This README is written to help other learners follow the same path: start with the basics, build static pages, add dynamic content and finish with a working AI-powered experience.

---

Table of contents
- About
- Demo
- Features
- Tech stack
- Getting started — clone and run
- Environment variables & API keys
- Roadmap
- Tips for learners (a short guide for newcomers)
- Footer

---

About
-----
Chef Claude was created as part of my journey learning React (Rishilshajan). The idea is simple and delightful: type the ingredients you have, send them to the AI, and receive a cooking idea (recipe) that you can try right away. The AI engine used for generating recipes is Google Gemini.

Demo
----
[(Chef_Claude)](https://chef-claude-kitchen.vercel.app/)
- Local demo: run it locally and try typing "eggs, tomatoes, cheese" — watch Chef Claude suggest something tasty.

Features
--------
- Clean, responsive UI built with React
- Ingredient input box with simple validation
- Sends ingredients to an AI service (Google Gemini) and displays recipe results
- Designed as a learning project: demonstrates static pages, dynamic content, and a dynamic page with API interaction

Tech stack
----------
- Core: React (create-react-app / Vite or similar)
- AI: Google Gemini (as the recipe generation engine)
- Languages: JavaScript, HTML, CSS

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) ![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-4285F4?logo=google) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)

Getting started — clone & run
-----------------------------
Follow these steps to run Chef Claude locally.

1. Clone the repo
```bash
# 1. Clone the project to your local machine
git clone https://github.com/Rishilshajan/Chef_Claude.git

# 2. Move into the project directory
cd Chef_Claude
```

2. Install dependencies
```bash
npm install
```


3. Set Up Your API Key (Environment Variable)
   The application needs your secret Gemini API key to run.
     - Create a file named .env.local in the root of your Chef_Claude folder.
     - Paste your key inside the file using the required VITE_ prefix:
```bash
VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
```

4. Run the Development Server
```bash
npm run dev
```


Environment & API notes
-----------------------
- Google Gemini keys should be kept secret. Use a backend proxy to prevent exposing keys in client bundles.
- The repo contains a simple aiClient wrapper (src/api/aiClient.js) showing how to structure requests and responses; adapt it to match Gemini's request schema.
- Always handle rate-limits and errors gracefully: show friendly messages and retry suggestions.

Roadmap
-------
This project was created as a learning milestone — here's where it can go next:
- Short-term
  - Add persistent user-saved recipes (localStorage or backend)
  - Improve UI/UX: animations, accessibility (a11y improvements)
  - Add unit and integration tests (Jest + React Testing Library)
- Mid-term
  - User accounts and saved preferences
  - Better prompt engineering: dietary filters, calorie estimates, cook time
  - Multiple AI providers option (Gemini, OpenAI) to compare outputs
- Long-term
  - Mobile app (React Native)
  - Community feature to share/like recipes
  - CI/CD pipelines and deployed demo site
  - Internationalization (i18n) and voice input

Tips for learners (If you’re new to React)
------------------------------------------
- Learn the fundamentals first: components, props, state, lifecycle (hooks).
- Start with static HTML → turn into components → add state and props.
- Practice small things: build a static page, then convert one component at a time to be dynamic.
- Use dev tools: React DevTools, browser console, and Network tab to inspect API calls.
- Keep your components small and focused; small components are easier to test.
- Try to build the following in order:
  1. Static layout (header, footer, content)
  2. Componentize the layout (Header, Footer, Input)
  3. Make components accept props and manage state
  4. Add API calls (useEffect + fetch/axios)
  5. Show loading and error states
- Read docs: reactjs.org, MDN web docs and watch short tutorials. Try small projects (todo list, weather app) before integrating AI.

What I learned building Chef Claude
-----------------------------------
- Basics of React and component design
- Creating static pages and turning them into dynamic content
- Handling API calls and showing load/error states
- Simple prompt engineering to coax better responses from an AI
- The importance of keeping API keys secure (use a backend)

Contributing
------------
This project is a learning space. If you want to contribute:
- Fork the repository
- Add small focused PRs (fixes, accessibility, tests)
- If you add features requiring keys, provide mock/stub responses for others to run locally

Footer
------
Thanks for checking out Chef Claude — a beginner's playground for building useful web apps with React and AI. If you're new to React, remember: curiosity > perfection. Start small, make it work, then make it beautiful. Happy cooking and coding! 🍽️👩‍🍳👨‍🍳

Connect with the author:
- GitHub: https://github.com/Rishilshajan
