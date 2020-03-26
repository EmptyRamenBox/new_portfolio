import basictodo from "../assets/basictodo.png";
import vuetodo from "../assets/vuetodo.png";
import todot from "../assets/todot.png";
import todob from "../assets/todob.png";
import inventory from "../assets/inventory.png";
import mynotes from "../assets/mynotes.png";
import thelogin from "../assets/thelogin.png";
import hero from "../assets/hero.png";

const projects = [
  {
    name: "Basic Todo App",
    description: "A Vanilla HTML, JS, and CSS Todo Application",
    image: basictodo,
    hashtags: ["todo", "html5", "css", "javascript"],
    url: "https://basictodo.collegeandcoffee.site/"
  },
  {
    name: "Todo App with Bootstrap",
    description: "A Todo Applicaition in Vanilla JavaScript and Bootstrap",
    image: todob,
    hashtags: ["todo", "html5", "bootstrap", "javascript"],
    url: "https://todob.collegeandcoffee.site/"
  },
  {
    name: "Todo App with Tailwind'",
    description: "A Todo Applicaition in Vanilla JavaScript and TailwindCSS",
    image: todot,
    hashtags: ["todo", "html5", "tailwind", "javascript"],
    url: "https://todot.collegeandcoffee.site/"
  },
  {
    name: "Basic Inventory App",
    description: "A Basic Inventory App in Vue.js in Vue.js",
    image: inventory,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://inventory.collegeandcoffee.site/"
  },
  {
    name: "Todo App with Tailwind and Vue.js",
    description: "A Todo Applicaition in Vue.js and TailwindCS",
    image: vuetodo,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://vuetodo.collegeandcoffee.site/"
  },
  {
    name: "Internetworking Notes",
    description:
      "A Simple Notes Application in Vuex and TailwindCSS - Contains notes for CCNA",
    image: mynotes,
    hashtags: ["todo", "vuejs", "tailwind", "javascript"],
    url: "https://mynotes.collegeandcoffee.site/"
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
      "javascript"
    ],
    url: "https://thelogin.collegeandcoffee.site/"
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
      "javascript"
    ],
    url: "https://hero.collegeandcoffee.site/"
  }
];

export default projects;
