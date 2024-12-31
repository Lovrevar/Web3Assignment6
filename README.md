# WEB3 Assignment 6: Conversion to SSR

## Overview
This project is part of **WEB3 Assignment 6**, where we were tasked with converting an existing project to use **Server-Side Rendering (SSR)** by using the power of **Next.js**. 

We decided to take the provided Yahtzee project and reimagine it using **React** and **Next.js**, following best practices for SSR. This allowed us to explore the differences between static and dynamic components and gain a deeper understanding of modern web application development.

## Assignment Objectives
The main objectives of the assignment were:

- **Convert a project to SSR**: Move from a traditional frontend (Vue.js) to a modern SSR-based framework like **Next.js**.
- **Maintain functionality**: Ensure that the application works as intended, preserving features like gameplay, score tracking, and player interactions.
- **Optimize performance**: Improve the user experience by using server-rendered pages, client-side components, and dynamic routing.

## What We Did
To meet these objectives, we did this:

1. **Migrated from Vue.js to React:**
   - Converted `.vue` components into `.tsx` files, making use of React’s modular component-based architecture.
   - Reorganized the folder structure to follow Next.js conventions.

2. **Set up Next.js Framework:**
   - Initialized the project using `npx create-next-app@latest`.
   - Configured SSR and dynamic routing for pages like the game interface and login screen.

3. **Added Tailwind CSS for Styling:**
   - Integrated Tailwind CSS for responsive and modern UI components.
   - Simplified the styling process while maintaining consistency across pages.

4. **Enhanced Component Architecture:**
   - Modularized the application into reusable React components like `GameLobbyComponent`,`MainNavigation``PlayerScoreBoard` and `RollDiceComponent`.
   - Used Next.js’s dynamic routing for game sessions, user authentication, and more.

5. **Preserved Gameplay Logic:**
   - Used the original game logic and APIs for dice rolls, scoring, and multiplayer interactions.
   - Migrated backend functionality without modification to ensure seamless gameplay.

6. **Implemented Static and Dynamic Pages:**
   - Used static generation for pages like the homepage and game information.
   - Used server-side rendering for real-time components like game sessions and player interactions.

### Challenges
- **Migration Complexity:** Converting a project from Vue.js to React required a deep understanding of both frameworks and a systematic approach to component restructuring.
- **SSR Concepts:** Understanding when to use static generation versus server-side rendering involved a steep learning curve.
- **Styling with Tailwind:** Adopting a new styling framework required some initial setup and adaptation.

### Learning Outcomes
- Gained practical experience with **Next.js** and its SSR capabilities.
- Improved understanding of React’s component model and modern web application architecture.
- Enhanced our ability to work on modular, scalable projects with tools like Tailwind CSS.

## Features
- **Game Interface:**
  - Play Yahtzee online with real-time dice rolls and score tracking.
- **Dynamic Routing:**
  - Create, join, and manage game sessions dynamically.
- **Modern Styling:**
  - Sleek and responsive design using Tailwind CSS.
- **Enhanced SEO:**
  - Optimized pages for search engines using SSR.

## How to Run
To run the project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Lovrevar/Web3Assignment6
   ```

2. Navigate to the project folder:
   ```bash
   cd WEB3-6
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to explore the application.

## Acknowledgements
We would like to acknowledge the original Yahtzee project, which served as the foundation for this assignment. The original logic and gameplay mechanics were preserved, and the project was adapted to meet the requirements of SSR using Next.js.

## Disclaimer
While this project builds upon an existing codebase, all work related to the migration, restructuring, and Next.js integration was completed by our team as part of this assignment. The focus was on showcasing our ability to modernize a project and implement SSR effectively.
