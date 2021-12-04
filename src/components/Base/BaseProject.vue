<script lang="ts" setup>
const prop = defineProps({
  project: {} as any,
});

function goto() {
  window.open(prop.project.githubUrl, '_blank')?.focus
}
</script>





<template>
  <div class="w-auto inline-block m-10 max-w-xs cursor-pointer" @click="goto">
    <img class="w-80 h-80 object-cover rounded-xl" :src="project.img" />
    <div class="flex justify-between px-1 mt-1">
      <h1 class="text-secondary text-lg font-semibold">{{ project.title }}</h1>
      <div>
        <i
          v-for="t in project.techs"
          :key="t"
          class="text-secondary hover:text-secondary-dark text-lg mx-1"
          :class="t"
        ></i>
      </div>
    </div>
    <p class="inline-block text-xs text-gray-400 ml-1 mr-10 mt-2">
      {{ project.description }}
    </p>
  </div>
</template>
