import basictodo from "../assets/basictodo.png";
import vuetodo from "../assets/vuetodo.png";
import todot from "../assets/todot.png";
import todob from "../assets/todob.png";
import inventory from "../assets/inventory.png";
import mynotes from "../assets/mynotes.png";
import thelogin from "../assets/thelogin.png";
import hero from "../assets/hero.png";
import movies from "../assets/movies.png";
import blog from "../assets/blog.png";
import games from "../assets/games.png";
import chat from "../assets/chat.png";
import mart from "../assets/mart.png";

const projects = [
  {
    name: "Video Games DB",
    description:
      "A College Project using Vuex and Vuetify, and using the RAWG API.",
    image: games,
    hashtags: [
      "Custom API",
      "RAWG API",
      "API",
      "vuejs",
      "vuex",
      "vue-router",
      "vuetify",
      "javascript",
    ],
    url: "https://games.collegeandcoffee.site/",
  },
  {
    name: "ArtMart",
    description:
      "A Psuedo-Shopping Cart Application using Vue.js, vuex, firebase, and firestore",
    image: mart,
    hashtags: [
      "firebase",
      "firstore",
      "auth",
      "vuejs",
      "vuex",
      "vue-router",
      "firestore",
      "javascript",
    ],
    url: "https://mart.collegeandcoffee.site/",
  },
  {
    name: "theChat",
    description:
      "An applicaiton using Vuetify; Vuex in conjuction with Firebase ",
    image: chat,
    hashtags: [
      "firebase",
      "firestore",
      "vuejs",
      "vuex",
      "vue-router",
      "vuetify",
      "javascript",
    ],
    url: "https://chat.collegeandcoffee.site/",
  },
  {
    name: "Movies Database",
    description:
      "A Vuex Application using Vuetify, and implementing The Movie Database API.",
    image: movies,
    hashtags: [
      "The Movie Database API",
      "API",
      "vuejs",
      "vuex",
      "vue-router",
      "vuetify",
      "javascript",
    ],
    url: "https://movies.collegeandcoffee.site/",
  },
  {
    name: "MyBlog",
    description:
      "A Vuex Application using Vuetify, running with a custom REST API.",
    image: blog,
    hashtags: [
      "Custom API",
      "REST API",
      "API",
      "vuejs",
      "vuex",
      "vue-router",
      "vuetify",
      "javascript",
    ],
    url: "https://blog.collegeandcoffee.site/",
  },
  {
    name: "SuperheroFinder",
    description:
      "A Vuex Application with TailwindCSS, implementing the SuperHero API.",
    image: hero,
    hashtags: [
      "SuperHero API",
      "API",
      "vuejs",
      "vuex",
      "vue-router",
      "tailwind",
      "javascript",
    ],
    url: "https://hero.collegeandcoffee.site/",
  },
  {
    name: "Basic Todo App",
    description: "A Vanilla HTML, JS, and CSS Todo Application",
    image: basictodo,
    hashtags: ["todo", "html5", "css", "javascript"],
    url: "https://basictodo.collegeandcoffee.site/",
  },
  {
    name: "Todo App with Bootstrap",
    description: "A Todo Applicaition in Vanilla JavaScript and Bootstrap",
    image: todob,
    hashtags: ["todo", "html5", "bootstrap", "javascript"],
    url: "https://todob.collegeandcoffee.site/",
  },
  {
    name: "Todo App with Tailwind'",
    description: "A Todo Applicaition in Vanilla JavaScript and TailwindCSS",
    image: todot,
    hashtags: ["todo", "html5", "tailwind", "javascript"],
    url: "https://todot.collegeandcoffee.site/",
  },
  {
    name: "Basic Inventory App",
    description: "A Basic Inventory App in Vue.js in Vue.js",
    image: inventory,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://inventory.collegeandcoffee.site/",
  },
  {
    name: "Todo App with Tailwind and Vue.js",
    description: "A Todo Applicaition in Vue.js and TailwindCS",
    image: vuetodo,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://vuetodo.collegeandcoffee.site/",
  },
  {
    name: "Internetworking Notes",
    description:
      "A Simple Notes Application in Vuex and TailwindCSS - Contains notes for CCNA",
    image: mynotes,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://mynotes.collegeandcoffee.site/",
  },
  {
    name: "Login Page",
    description:
      "A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google",
    image: thelogin,
    hashtags: [
      "firebase",
      "auth",
      "vuejs",
      "vuex",
      "vue-router",
      "tailwind",
      "javascript",
    ],
    url: "https://thelogin.collegeandcoffee.site/",
  },
];

export default projects;
