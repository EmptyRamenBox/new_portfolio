<template>
  <div class="flex justify-center items-center bg-teal-600 text-indigo-100 text-xl">
    <div class="h20 bottom-o py-8 flex">
      <p class="pr-2">&copy; Alexis Martinez</p>
      <a class="github" href="https://github.com/EmptyRamenBox" target="_blank">
        <GithubCircle />
      </a>
    </div>
  </div>
</template>


<script>
import GithubCircle from 'vue-material-design-icons/GithubCircle';

export default {
  name: 'Footer',
  components: {
    GithubCircle,
  }
}
</script>



<style  lang="scss" scoped>
.github:hover {
    @apply text-blue-900;
}
</style>