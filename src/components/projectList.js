const projects = [
  {
    id: 1,
    name: 'Cinemagic',
    description: 'Have you ever found it difficult going back and forth between streaming services to decide what movie to watch? Then Cinemagic is the web app for you. Have all your favorite movies in one place and create a virtual movie collection.',
    caption: 'Made with Node, Sequelize, Handlebars.js, TailwindCSS, ExpressJS, and bcrypt',
    deployment: 'https://cinemajik.herokuapp.com/',
    repository: 'https://github.com/jhahnsheen/Cinemagic',
    image: '/images/cinemagic.png'
  }, 
  {
    id: 2,
    name: 'NuMu',
    description: 'NuMu is a random music video generator that plays without the use of your playlist algorithm. At the click of a button, a random music video will be posted onto your screen. A search bar functionality allows for the user to find random songs from a query as well.',
    caption: 'Made with TailwindCSS, JavaScript, HTML, and Google APIs',
    deployment: 'https://jhahnsheen.github.io/YouTube_Music_Finder/',
    repository: 'https://github.com/jhahnsheen/YouTube_Music_Finder',
    image: '/images/NuMu.png'
  }, 
  {
    id: 3,
    name: 'J.A.T.E. Text Editor',
    description: 'The J.A.T.E. Text Editor is a minimalist-style text editor progressive web app (PWA) that can be downloaded and used on the desktop, even when offline. Designed to be like a notepad to drop small snippets of code or text, The J.A.T.E. Text Editor will be there to hold it all for when you do need it.',
    caption: 'Made with NodeJS, ExpressJS, Webpack, Babel, IndexedDB, and Workbox',
    deployment: 'https://bksb-text-editor-v1.herokuapp.com/',
    repository: 'https://github.com/jhahnsheen/Text-Editor-v1',
    image: '/images/JATE.png'
  },
  {
    id: 4,
    name: 'Note Taker',
    description: 'The Note Taker application is designed for the busy business owner who needs a simple and easy-to-use virtual memo pad. Organize your thoughts and keep track of the tasks you need to complete on an easily accessible application.',
    caption: 'Made with NodeJS, ExpressJS, Webpack, Babel, IndexedDB, and Workbox',
    deployment: 'https://bksb-note-taker.herokuapp.com/',
    repository: 'https://github.com/jhahnsheen/Note-Taker-v1',
    image: '/images/note_taker.png'
  },
  {
    id: 5,
    name: 'Team Profile Generator',
    description: "The Team Profile Generator (TPG) is an application that is designed for project managers who want to have a resource to find all of their team members' contact links in one spot. The TPG allows the user to categorize each employee by their job title and to store different fields for each team member based on their position. Once all of the fields are filled out, the application will then generate an HTML page that contains all of the information that the user inputs.",
    caption: 'Made with TailwindCSS, NodeJS, and JavaScript; uses Jest and Inquirer',
    deployment: 'https://drive.google.com/drive/folders/1B6p8Sx0bYxyalqSKfYltxMotXecdCBTY?usp=sharing',
    repository: 'https://github.com/jhahnsheen/Team-Profile-Generator-v1',
    image: '/images/team_profile.png'
  },
  {
    id: 6,
    name: 'Day Planner',
    description: 'This Day Planner application was designed to be a day planner for the busy working professional with a full schedule to plan for in their workday. This application will update the date automatically and the time blocks will change color according to the time of day and, by extension, whether the appointment has passed or not.',
    caption: 'Made with Moment, CSS, HTML, and JavaScript',
    deployment: 'https://jhahnsheen.github.io/Day-Planner-v1/',
    repository: 'https://github.com/jhahnsheen/Day-Planner-v1',
    image: '/images/day_planner.png'
  },
  {
    id: 7,
    name: 'JavaScript Quiz',
    description: 'This application is designed to quiz the user, a beginner Javascript user, on various basic Javascript topics. The score of the user will be calculated based on remaining time and recorded. The user can then save their score with their initials so that their scores can be compared with those of others.',
    caption: 'Made with TailwindCSS, JavaScript, and HTML',
    deployment: 'https://jhahnsheen.github.io/JS-Quiz-v1/',
    repository: 'https://github.com/jhahnsheen/JS-Quiz-v1',
    image: '/images/js_quiz.png'
  },
  {
    id: 8,
    name: 'Password Generator',
    description: 'This application has a single function: create a randomized password based on prompts from the user. This randomized password can contain uppercase characters, lowercase characters, numeric characters, and special characters, based on prompts made by the user.',
    caption: 'Made with CSS, HTML, and JavaScript',
    deployment: 'https://jhahnsheen.github.io/password-generator-v1/',
    repository: 'https://github.com/jhahnsheen/password-generator-v1',
    image: '/images/password_gen.png'
  },
];

export default projects;