<script lang="ts" setup>
import Project from "./Base/BaseProject.vue";
import { store } from "../store";
import { onMounted, ref } from "vue-demi";
const myStore = store()

const projects = ref([] as any)

onMounted(()=>{
  myStore.getProjects((success: boolean, resp: any) => {
    if (success) {
      projects.value = resp.projects
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
    <div class="my-10 flex flex-wrap justify-center">
      <Project
        v-for="project in projects"
        :key="project.id"
        :img="project.img"
        :title="project.title"
        :github-url="project.githubURL"
        :description="project.description"
      />
    </div>
    <div class="text-center">
      <a
        href="https://github.com/thejawadali?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="uppercase bg-secondary text-white text-2xl px-20 py-5 rounded-xl"
      >
        see all projects
      </a>
    </div>
  </div>
</template>
