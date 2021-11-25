<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import ProjectSection from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <div
      style="border-bottom-left-radius: 10% 60%"
      class="absolute top-0 right-0 bg-secondary w-9/12 h-lg z-n opacity-20"
    />
    <header class="p-32 flex items-center justify-center">
      <!-- headings -->
      <div class="flex-1 text-left">
        <h1 class="text-primary text-7xl font-bold max-w-md">
          Hello <br />
          I'm Jawad Ali
        </h1>
      </div>
      <!-- description -->
      <div class="flex-1 flex flex-col">
        <p class="text-gray-500 font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
          totam dolores placeat doloremque ipsa! Numquam mollitia facilis nihil
          ipsa ipsum sint perspiciatis ea nobis impedit reiciendis, molestias,
          illo corporis!
        </p>
        <div class="mt-4">
          <a class="mx-3" href=""
            ><i
              class="
                text-2xl text-primary
                hover:text-primary-dark
                fa fa-linkedin-square
              "
            ></i
          ></a>
          <a class="mx-3" href=""
            ><i
              class="
                text-2xl text-primary
                hover:text-primary-dark
                fa fa-twitter
              "
            ></i
          ></a>
          <a class="mx-3" href=""
            ><i
              class="text-2xl text-primary hover:text-primary-dark fa fa-github"
            ></i
          ></a>
        </div>
      </div>
    </header>
    <ProjectSection />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<style>
</style>
