<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import ProjectSection from "./components/Projects.vue"
import Header from "./components/Header.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
import Skills from "./components/Skills.vue"
</script>

<template>
  <div>
  <Navbar />
  <div
    class="
      absolute
      top-0
      right-0
      bg-secondary
      w-full
      h-24
      lg:w-9/12
      lg:h-lg
      rounded-b-2xl
      lg:rounded-none
      z-n
      opacity-20
    "
  />
  <!-- xl:rounded-bl-full -->
  <Header />
  <ProjectSection />
  <Skills />
  <!-- <Testimonials /> -->
  <Contact />
  <Footer />
</div>
</template>

<style>
</style>
