<template>
  <div>
    <NavBar />
    <div class="h-screen w-screen bg-cover bg-center shadow-2xl"
      :style="`background-image:url(${bgImage})`"
    >
      <div class="h-screen w-screen bg-blue-900 opacity-75"/>

      <div class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center">
        <h1 class="ctr text-6xl font-bold text-indigo-200  px-4 ">Alexis Martinez</h1>
        <h3 class="text-3xl font-bold text-teal-400  px-4 ">Jr. Network Technician</h3>
        <h5 class="text-xl font-bold text-teal-400  px-4 ">CCNA | Network+ | A+</h5>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.ctr:hover {
  @apply transition duration-700 ease-in-out text-indigo-300 transform translate-y-1 scale-150;
}
</style>

<script>
import NavBar from "../components/NavBar.vue";
import bgImage from "../assets/background.jpg";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      bgImage
    };
  }
};
</script>
