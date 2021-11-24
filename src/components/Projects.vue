<script lang="ts" setup>
import Project from "./Base/BaseProject.vue";
</script>


<template>
  <div id="work" class="mt-32 mx-32">
    <p class="text-primary text-7xl font-extralight">
      Some of my <strong>Notable Projects</strong>
    </p>
    <div class="my-10 flex flex-wrap justify-center">
      <Project v-for="i in 6" :key="i" />
    </div>
    <div class="text-center">
      <button
        class="uppercase bg-secondary text-white text-2xl px-20 py-5 rounded-xl"
      >
        see all projects
      </button>
    </div>
  </div>
</template>
