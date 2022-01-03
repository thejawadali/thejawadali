<template>
  <div data-aos="zoom-in" class="bg-gray-100 cursor-pointer rounded p-5 m-5">
    <i :class="icon" class="text-8xl"></i></div>
</template>


<script lang="ts" setup>
const props = defineProps({
  icon: String
})
</script>