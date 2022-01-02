<script lang="ts" setup>
import Project from "./Base/BaseProject.vue";
import { store as myStore } from "../store";
import { onMounted, ref } from "vue-demi";
const store = myStore()

const projects = ref([] as any)

onMounted(()=>{
  store.getProjects((success: boolean, resp: any) => {
    if (success) {
      projects.value = resp
    } else {
      console.error(resp);
    }
  });
})
</script>


<template>
  <div id="work" class="mt-32 lg:mx-32">
    <p class="text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight">
      Some of my <strong>Notable Projects</strong>
    </p>
    <div class="my-10 gap-7 flex flex-wrap justify-center">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <div class="text-center">
      <a
        href="https://github.com/thejawadali?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="uppercase bg-secondary hover:bg-secondary-dark text-white text-2xl px-20 py-5 rounded-xl"
      >
        see all projects
      </a>
    </div>
  </div>
</template>
