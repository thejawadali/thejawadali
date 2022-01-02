<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import ProjectSection from "./components/Projects.vue"
import Testimonials from "./components/Testimonials.vue"
import Header from "./components/Header.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
import Skills from "./components/Skills.vue"
import { onMounted } from "vue-demi"

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
      lg:w-9/12
      h-lg
      rounded-b-large
      lg:rounded-none
      z-n
      opacity-20
    "
  />
  <!-- xl:rounded-bl-full -->
  <Header />
  <ProjectSection />
  <Skills />
  <Testimonials />
  <Contact />
  <Footer />
</div>
</template>

<style>
</style>
