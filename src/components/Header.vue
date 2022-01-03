<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import { store as myStore } from "../store";
const store = myStore()

const summary = ref("");
const socials = ref([] as any)



onMounted(() => {
  store.getHeader((success: boolean, resp: any) => {
    if (success) {
      summary.value = resp.summary
      socials.value = resp.socialIcons
    } else {
      console.error(resp);
    }
  });
});
</script>



<template>
  <header
    class="
      w-full
      p-10
      lg:p-32
      flex flex-col
      lg:flex-row
      items-center
      justify-between
    "
  >
    <!-- headings -->
    <div
      class="flex-1 lg:text-left text-center flex items-center justify-around"
    >
      <h1 class="text-primary text-4xl lg:text-7xl max-w-md">
        Hello <br />
        I'm <strong> Jawad Ali</strong>
      </h1>
      <div class="h-44 hidden xl:block border-l border-black opacity-10" />
    </div>
    <!-- horizontal divider -->
    <!-- <div class="w-8/12 my-4 border-b border-black opacity-10 lg:hidden" /> -->
    <!-- description -->
    <div class="flex-1 flex flex-col mt-4">
      <p
        class="
          text-gray-500
          font-normal
          text-sm
          lg:text-base lg:my-4
          text-justify
        "
      >
        {{ summary }}
      </p>
      <div class="my-3 mx-auto lg:mx-0">
        <a v-for="soc in socials" :key="soc.id" class="mx-2" :href="soc.url" target="_blank" rel="noopener noreferrer"
          ><i
            :class="soc.icon"
            class="text-2xl text-primary fa hover:text-primary-dark"
          ></i
        ></a>
      </div>
    </div>
  </header>
</template>
