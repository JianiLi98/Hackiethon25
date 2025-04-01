# 🐱 PETodo List – A task to-do list with feelings! | React Widget project for Hackiethon2025

This reusable and interactive to-do list was designed to improve productivity in a creative and user-friendly way, featuring a virtual pet cat whose mood changes based on users' task habits.

> 🏆 React.js widget built for the **HackMelbourne's Hackiethon2025 Widget Challenge** for demonstrating innovation, usability, and front-end development skills.

---

## 🚀 Live Demo - Click to try PETodo! (hover on the right-hand-side's purple block under the title and drag our widget down to any free space)

- 👉 (https://petodolist.vercel.app/)
- 👉 Check out our Devpost page (https://devpost.com/software/pet-todo-list)

---

## 🧠 Motivation

- The topic of productivity led us to thinking what could be practically useful and, at the same time, enjoying for users. A to-do list sounds too plain and straightforward, and we comtemplated about many other productivity-boosting applications, such as a white noise generator, a flowing rivr of tasks as floating blocks, and a user activity tracker. However, we wanted our widget to stay simple, handy and intuitive for users, which a todo-list always allows. Then, why not add something special to it?
- We aimed to turn everyday productivity into something playful and engage emotional reactions. By combining a task manager with a virtual pet, this widget motivates users to stay on track while be entertained by the lively responses of a cute cat.

---

## 🎯 Widget Features

- Add, complete, edit, delete and track tasks with due dates
- 🐱 Virtual pet cat reflects your productivity
      - The cat gets hungry when you add tasks or any uncompleted tasks
      - The cat gets starved if tasks are overdue
      - Completing tasks feeds and cheers up the cat
- ⏰ Real-time mood updates and cute visuals

---

## 🛠 Tech Stack

- **React.js** for interactivity
- **CSS Modules** for styling
- **Procreate**  for visual design

---

## See below the formal Hackiethon25 description

---

# 🏆 Hackiethon2025 Widget Challenge

## 📌 Overview

The **Hackiethon2025 Widget Challenge** is a coding competition aimed at enhancing students' enthusiasm for programming, strengthening their understanding of fundamental web development concepts, and fostering creativity and imagination.

Participants will create **React.js widgets**, which are **customizable, reusable, and interactive components** that can be integrated into the provided **HackMelbourne sample website** or **any other specified website that support React.js**.

## 🎯 Objectives

- **Encourage students to engage in hands-on web development** through a competitive yet educational challenge.
- **Strengthen understanding of JavaScript components** and web-based application development.
- **Promote creativity** by allowing participants to develop unique and useful widgets.
- **Provide practical experience** that can help students build real-world web applications.

## 📦 Project Scope

1. **JavaScript Widget Development**

   - Participants will build **custom React.js components** (widgets).
   - These components must be **self-contained and reusable** while maintaining a clean structure.
   - Widgets must return **a `<div>` element** that can include attributes, event listeners, and interactivity.
   - Refer to the example widgets in the repo for the expected structure

2. **Widget Compatibility & Integration**

   - Widgets should be adaptable to work with **our sample website** or any existing site.
   - You are allowed to use external libraries
   - If you do use external libraries, please note down the CLI command to install any dependencies, such as "npm install [dependency]"

3. **Evaluation Criteria** 
   - Most innovative (function-wise)

     - How unique is the idea behind this widget
     - Does it solve a unique problem

   - Best design (UI/UX)

      - Easy to use, responsive
      - Aesthetics of the widget is well thought out and generally looks good
      - Is interactive and dynamic, such as by using animations and transitions

   - Most useful

      - How well does this widget solve a common problem or annoyance with regards to the theme, i.e.
      - How well does it improve productivity
      - If this would be released as a browser extension, how likely are end-users to download it


   - Community vote
   
     - To be done using DevPost’s voting system
     - In order for a team to win the community vote, they need to submit a short video showcasing their widget on their submission page.
     - Your widget doesn't have to be the best, or even be good. You just need to convince the other participants that your widget deserves to win!

---

## 📖 Getting Started

To prepare your environment, follow these steps:

1. **Clone the repository**
   (RECOMMENDED)
   - Make sure you have the GitHub Desktop app installed
   - In the [Hackiethon2025 GitHub page](https://github.com/HackMelbourne/Hackiethon25), clone the repository by opening it in GitHub Desktop

   or, by using CLI command,
   ```sh
   gh repo clone HackMelbourne/Hackiethon25
   ```
2. **Install dependencies (if applicable)**
   (Step 2a)
   Before you can run the local server, you need to have node and npm set up.
   Download Node.js from https://nodejs.org/en and follow the instructions in the setup wizard.

   Then, verify that you have installed node and npm by:
   - Opening your command prompt (cmd on Windows) with Administrator privileges (Run as Administrator)
   - Run:
   - ```ssh
      node -v
      npm -v
     ```
   - If they both show version numbers, then you have successfully installed Node.js and npm

   (Step 2b)
   Now, navigate to the project repository.
   Make sure you are in "Hackiethon2025/showcase-site"

   
   Run the following command:
   ```sh
   npm install
   ```

   If this doesn't work, try:
   - Opening the "Hackiethon2025/showcase-site" directory in your command prompt in Administrator mode (same as step 2a)
   - Run the command again
   - If this works, then whenever you need to run a command, you need to run it in the command prompt with Administrator privileges
3. **Run the development server**

   ```sh
   npm run dev
   ```

   If it crashes or fails to start dev server, try:
   - restarting VSCode
   - running the commands in admin cmd
   - delete node_modules, run npm install and npm run dev again

   If it succeeds, then it will display a localhost server, such as "http://localhost:1234/"
   Copy and paste this into your browser of choice and it should render automatically.
   While the server is up, whenever you save a change to your source code, the webpage should re-render and you will see your change take place,
      so there is no need to restart the server (unless something crashes) 

5. **Develop your widget**
   - Follow the [[Example Widget Development Guide](https://github.com/HackMelbourne/Hackiethon25/blob/32ceb5a89d0af82571ef10e10c98a2076a9dd2c2/showcase-site/docs/Widget-Development.md)] for learning how to develop a widget with API calls.
   - Ensure your widget meets the competition criteria.
6. **Submit your widget**
   - Submit your widget as a jsx (and any additional css, jsx or image files) to the devpost:
   - Follow the [[Submission Guidelines](https://github.com/HackMelbourne/Hackiethon25/blob/32ceb5a89d0af82571ef10e10c98a2076a9dd2c2/showcase-site/docs/Submission-Guidelines.md)].
   - Make sure to test it on the showcase site first -- this is where we'll be primarily juding your widget

---

## 📂 Repository Structure

For the most part, you should only be writing code + adding files into the "showcase-site/src/submission-widgets" directory

```plaintext
/src                            # Main source code of project
│── /submission-widgets         # Place your widget and extra files here
│── /widgets                    # Directory for sample widgets
│── /assets                     # Some assets
│── Widget-Development.md       # Sample widget development
│── Submission-Guidelines.md    # Submission Guidelines
...                             # Other source code files for rendering the website (please dont touch these)
```

---

## 🚀 Additional Resources

- **[Widget Development Guide](https://github.com/HackMelbourne/Hackiethon25/blob/32ceb5a89d0af82571ef10e10c98a2076a9dd2c2/showcase-site/docs/Widget-Development.md)** – Learn how to structure and build your widget based on this example widget.
- **[Submission Guidelines](https://github.com/HackMelbourne/Hackiethon25/blob/32ceb5a89d0af82571ef10e10c98a2076a9dd2c2/showcase-site/docs/Submission-Guidelines.md)** – Instructions on how to submit your widget and overall expected structure.
- **[Decoded Notion Page](https://plum-soda-d5f.notion.site/Decoded-1bc996f226c88037a95dc1222f53a1a1)** – Resources from Decoded.
- **[Showcase Site Tutorial](https://github.com/HackMelbourne/Hackiethon25/blob/main/showcase-site/docs/Showcase-Site.md)** - Instructions on how to use the showcase site
---

## Widget embedding instruction:

1. Just upload into the submissions-widgets directory. It should automatically render if no issues show up.
2. If there are rendering issues, the localhost server should be blank. Right click on the page, go to Inspect Element, and errors can be debugged via the error messages
3. If there are still errors, please feel free to reach out in our official discord (hack.melbourne/discord)
4. To check how your widget is rendered on the page, and how to use the showcase site, check [Showcase Site Tutorial](https://github.com/HackMelbourne/Hackiethon25/blob/main/showcase-site/docs/Showcase-Site.md)
