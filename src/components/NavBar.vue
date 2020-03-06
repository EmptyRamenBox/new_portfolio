<template>
  <nav class="nav w-screen z-20 shadow-2xl bg-teal-600 text-blue-100">
    <div class="left">
        <span class="font text-4xl">My
            <span class="font-semibold">Portfolio</span>
        </span>
    </div>
    <div class="right">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/">Portfolio</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav {
    @apply h-24 fixed px-12 flex justify-between items-center;

}
.link {
    @apply px-2 text-lg font-semibold;
    &:hover {
        @apply bg-teal-800;
    }
}
</style>