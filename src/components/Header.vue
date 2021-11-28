<script lang="ts" setup>
const test = "";
const socials = [
  {
    id: 1,
    icon: "fa-linkedin-square",
    url: "",
  },
  {
    id: 2,
    icon: "fa-twitter",
    url: "",
  },
  {
    id: 3,
    icon: " fa-github",
    url: "",
  },
];
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
    <div class="flex-1 lg:text-left text-center flex items-center justify-around">
      <h1 class="text-primary text-5xl lg:text-7xl max-w-md">
        Hello <br />
        I'm <strong> Jawad Ali</strong>
      </h1>
      <div class="h-44 hidden xl:block border-l border-black opacity-10" />
    </div>
    <!-- horizontal divider -->
    <div class="w-8/12 my-4 border-b border-black opacity-10 lg:hidden" />
    <!-- description -->
    <div class="flex-1 flex flex-col">
      <p class="text-gray-500 font-normal text-sm lg:text-base lg:my-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi totam
        dolores placeat doloremque ipsa! Numquam mollitia facilis nihil ipsa
        ipsum sint perspiciatis ea nobis impedit reiciendis, molestias, illo
        corporis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        ut nihil quam, iste id suscipit modi dolore illum similique velit.
        Doloribus.
      </p>
      <div class="my-3 mx-auto lg:mx-0">
        <a v-for="soc in socials" :key="soc.id" class="mx-2" :href="soc.url"
          ><i
            :class="soc.icon"
            class="text-2xl text-primary fa hover:text-primary-dark"
          ></i
        ></a>
      </div>
    </div>
  </header>
</template>
