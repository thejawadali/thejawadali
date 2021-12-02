<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import BaseSkill from "./Base/BaseSkill.vue";
import { store } from "../store";
const myStore = store();

const icons = ref([]);
onMounted(() => {
  myStore.getSkills((success: boolean, resp: any) => {
    if (success) {
      icons.value = resp.skills;
    } else {
      console.error(resp);
    }
  });
});
</script>

<template>
  <div id="skills" class="mt-32 lg:mx-32">
    <p class="text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight">
      My <strong>Top Skills</strong>
    </p>
    <div class="my-10 flex flex-wrap justify-center">
      <BaseSkill v-for="icon in icons" :key="icon" :icon="icon" />
    </div>
  </div>
</template>