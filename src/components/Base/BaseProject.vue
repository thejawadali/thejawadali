<script lang="ts" setup>
const prop = defineProps({
  project: {} as any,
})

function goto(link: string) {
  window.open(link, '_blank')?.focus

}
</script>





<template>
  <div class="w-96 h-72 shadow-2xl rounded inline-block overflow-hidden relative group">
    <img class="w-full h-full object-cover" :src="project.img" />
    <div class="absolute inset-0 bg-transparent z-30 scale-100">
      <!-- Overlay -->
      <div
        class="w-full h-full absolute opacity-0 inset-0 bg-black group-hover:opacity-70 transition duration-150"
      />
      <!-- Buttons -->
      <div
        class="w-full h-full flex flex-col gap-6 justify-center items-center z-40 scale-0 group-hover:scale-100 transition duration-150"
      >
        <button
          class="text-white border-white border w-40 py-1 rounded text-lg cursor-pointer hover:bg-white hover:text-black"
        >View</button>
        <button
          class="text-white border-white border w-40 py-1 rounded text-lg cursor-pointer hover:bg-white hover:text-black"
        >Source Code</button>
      </div>
    </div>
  </div>
</template>
