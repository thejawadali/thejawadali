<template>
  <div class="bg-gray-100 cursor-pointer rounded p-5 m-5">
    <i :class="icon" class="text-8xl"></i>

    <!-- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" /> -->
    <!-- <div class="absolute bg-primary inset-0 flex justify-center items-center w-full h-0 group-hover:h-full">
          <strong class="text-secondary-light text-2xl mt-4">HTML</strong>
        </div> -->
  </div>
</template>


<script lang="ts" setup>
const props = defineProps({
  icon: String
})
</script>