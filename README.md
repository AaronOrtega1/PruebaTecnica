# PruebaTecnica

### Explanation

This project is a user profile page with different sections about skills, experience, and more. It features a minimalist yet modern design with a default dark theme and a color button to switch to a light theme. The selected theme is saved in local storage, so it doesn't reset to the default colors when the page is reloaded. Navigation buttons in the header allow users to move between different sections of the website. Each time the index page is reloaded, a modal appears, greeting the user. At the end, in the contact section, there is a functional comment form that stores the comments in the website’s local storage. I chose to divide the different sections into separate pages on the website because it looks more dynamic than having all the information on just the index.html. Since I had already completed the HTML and CSS, it was easy to divide; I simply created new HTML files and assigned them separate CSS files.

---

### How to run it

To run this project is necessary to have npm installed in your computer or Visual Studio Code

- Once you have npm installed run the following command in your terminal inside the project folder:
  ```bash
    npm install
  ```
  - This command will install the node dependece of lite-server, that will allow you to run the project in your computer
- To run the server and view the website in the browser you will have to run the followig command:
  ```bash
    npm run dev
  ```
  - This will launch the server in your localhost, when it start in your terminal will appear a localhost port that you will have to put in your browser.
    - example with port 3000: **localhost:3000**

Another alternative is to run it using the Visual Studio Code extension `Live Server` by Ritwick Dey, this will host the port 5500 in your localhost -> **localhost:5500**

---

### External resources used

- Icons:
  - https://fontawesome.com/
