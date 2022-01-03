<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import BaseSkill from "./Base/BaseSkill.vue";
import { store as myStore } from "../store";
const store = myStore();

const skills = ref([] as any);
onMounted(() => {
  store.getSkills((success: boolean, resp: any) => {
    if (success) {
      skills.value = resp
    } else {
      console.error(resp);
    }
  });
});
</script>

<template>
  <div id="skills" class="mt-32 lg:mx-32">
    <p data-aos="fade-down" class="text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight">
      My <strong>Top Skills</strong>
    </p>
    <div class="my-10 flex flex-wrap justify-center">
      <BaseSkill v-for="skill in skills" :key="skill.id" :icon="skill.icon" />
    </div>
  </div>
</template>