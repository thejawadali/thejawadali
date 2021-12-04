<script lang="ts" setup>
import { store as myStore } from "../store";
import { onMounted, ref } from "vue-demi"

const store = myStore()


const description= ref("")
const email= ref("")
const role= ref("")
const phoneNumber= ref("")

onMounted(() => {
  store.getContact((success: boolean, resp: any) => {
    if (success) {
      description.value = resp.description
      email.value = resp.email
      role.value = resp.role
      phoneNumber.value = resp.phoneNumber
    } else {
      console.error(resp);
    }
  });
});
</script>

<template>
  <div
    class="mt-32 lg:mx-32 relative flex flex-col items-end px-8 lg:px-0"
    id="about"
  >
    <p class="text-primary text-5xl lg:text-7xl font-extralight w-full">
      You can <strong>Contact me</strong> via
    </p>
    <div class="w-full hidden md:inline-block">
      <div class="mt-10 w-full h-56 bg-footer" />
      <p
        class="
          ml-1
          text-gray-500 text-xs
          max-w-lg
          tracking-wider
          my-5
          hidden
          xl:inline-block
        "
      >{{description}}</p>
    </div>
    <!-- contact form -->
    <div
      class="
        bg-secondary-light
        pl-10
        pr-20
        py-3
        mx-auto
        my-5
        md:m-0 md:relative md:bottom-24
        xl:bottom-56
        md:right-10
        inline-block
      "
    >
      <div class="my-3">
        <p class="uppercase text-xs text-gray-500 tracking-more-wide">email</p>
        <p class="my-1 text-sm text-gray-600">{{email}}</p>
      </div>
      <div class="my-3">
        <p class="uppercase text-xs text-gray-500 tracking-more-wide">role</p>
        <p class="my-1 text-sm text-gray-600">{{role}}</p>
      </div>
      <div class="my-3">
        <p class="uppercase text-xs text-gray-500 tracking-more-wide">phone</p>
        <p class="my-1 text-sm text-gray-600">{{phoneNumber}}</p>
      </div>
    </div>
  </div>
</template>
