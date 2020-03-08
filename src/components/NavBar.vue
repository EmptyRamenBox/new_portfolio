<template>
  <nav class="nav w-screen z-20 text-blue-100" 
    :class= "ishome ?  '' : 'shadow-2xl bg-teal-600'  ">
    <div class="left">
      <span class="font text-4xl">My
        <span class="font-semibold">Portfolio</span>
      </span>
    </div>
    <div class="right">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/portfolio">Portfolio</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    ishome: {
      type: Boolean,
      default: true
    }
  }
  // data() {
  //   return {
  //     isNotHome: (this.$route.path != '/')
  //   };
  // }
};
</script>

<style lang="scss" scoped>
.nav {
    @apply transition duration-500 ease-in-out h-24 fixed px-12 flex justify-between items-center;

}
.link {
  @apply px-2 text-lg font-semibold;
  &:hover {
      @apply  transition duration-500 ease-in-out bg-indigo-900;
  }
}
</style>