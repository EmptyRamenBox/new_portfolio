<template>
  <div class="h-screen w-screen bg-cover bg-center shadow-2xl"
    :style="`background-image:url(${bgImage})`"
  >
    <div class="h-screen w-screen bg-teal-900 opacity-75"/>

    <div class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center">
      <h1 class="text-6xl font-bold text-teal-200 hover:bg-teal-600 hover:text-blue-200 px-4 hover:opacity-50">Alexis Martinez</h1>
      <h3 class="text-3xl font-bold text-teal-200 hover:bg-teal-600 hover:text-blue-200 px-4 hover:opacity-50">Jr. Network Technician</h3>
    </div>
  </div>
</template>

<script>
import bgImage from "../assets/background.jpg";
export default {
  name: "Home",
  data() {
    return {
      bgImage
    };
  }
};
</script>
