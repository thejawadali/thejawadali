<script lang="ts" setup>
const props = defineProps({
  img: String,
  title: String,
  githubUrl: String,
  description: String,
});
</script>





<template>
  <div class="w-auto inline-block m-10 max-w-xs">
    <img class="w-80 h-80 object-cover rounded-xl" :src="img" />
    <div class="flex justify-between px-1 mt-1">
      <h1 class="text-secondary text-lg font-semibold">{{ title }}</h1>
      <div>
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
          <i class="text-secondary hover:text-secondary-dark text-lg mx-1 fa fa-github"></i>
        </a>
        <!-- <i class="text-secondary text-lg mx-1 fa fa-linkedin-square"></i> -->
        <!-- <i class="text-secondary text-lg mx-1 fa fa-linkedin-square"></i> -->
      </div>
    </div>
    <p class="inline-block text-xs text-gray-400 ml-1 mr-10 mt-2">
      {{ description }}
    </p>
  </div>
</template>
