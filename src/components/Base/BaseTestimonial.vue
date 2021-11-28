<script lang="ts" setup>
const feed = {
  img: "https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  customerName: "Jawad Ali",
  desg: "Co-Founder",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores a suscipit? Voluptates, eaque saepe hic quam assumenda cupiditate, sint veritatis corporis repudiandae, nesciunt id enim voluptas. Repellat, dolorem libero",
};
</script>


<template>
  <div class="flex flex-col md:flex-row justify-between w-full mx-auto rounded-xl overflow-hidden border bg-white shadow md:p-10">
    <img class="w-full h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 md:rounded-full object-cover" :src="feed.img" />
    <div class="w-auto flex-grow p-4 md:p-0 flex flex-col justify-center md:ml-5 xl:ml-20">
      <h1 class="text-primary font-semibold text-2xl">
        {{ feed.customerName }}
      </h1>
      <p class="text-secondary md:my-0 font-semibold text-md">{{ feed.desg }}</p>
      <p
        class="text-gray-400 text-xs lg:text-sm w-full tracking-wider text-justify mt-2 md:mt-4"
      >
        "{{ feed.details }}"
      </p>
    </div>
  </div>
</template>
