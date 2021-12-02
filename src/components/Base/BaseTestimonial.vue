<script lang="ts" setup>
const props = defineProps({
  img: String,
  customerName: String,
  desg: String,
  details: String
})
</script>


<template>
  <div class="flex flex-col md:flex-row justify-between w-full mx-auto bg-white">
    <img class="w-full h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 md:rounded-full object-cover" :src="img" />
    <div class="w-auto flex-grow p-4 md:p-0 flex flex-col justify-center md:ml-5 xl:ml-20">
      <h1 class="text-primary font-semibold text-2xl">
        {{ customerName }}
      </h1>
      <p class="text-secondary md:my-0 font-semibold text-md">{{ desg }}</p>
      <p
        class="text-gray-400 text-xs lg:text-sm w-full tracking-wider text-justify mt-2 md:mt-4"
      >
        "{{ details }}"
      </p>
    </div>
  </div>
</template>
