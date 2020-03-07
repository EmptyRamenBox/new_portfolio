<template>
  <div>
    <NavBar :ishome="false"></NavBar>
    <div class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-blue-300 ">
      <div class="w-full flex flex-wrap mb-8 shadow-2xl bg-indigo-100">
        <div 
          v-for="(project, index) in projects"
          :key="index"
          class="w-1/3 p-4"
        >
          <Card :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import projects from "../data/projects";

export default {
  name: "Portfolio",
  data() {
      return {
        projects
      }
  },
  components: {
    NavBar,
    Card
  }
};
</script>