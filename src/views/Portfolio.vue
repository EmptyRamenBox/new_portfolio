<template>
  <div>
    <NavBar :ishome="false"></NavBar>
    <div class="pt-24">
        Hello There
    </div>
  </div>

</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Portfolio",
  components: {
    NavBar
  }
};
</script>