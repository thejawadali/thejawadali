
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const links = ref<string[]>(["work", "skills", "testimonials", "about"]);
</script>



  <template>
  <nav class="bg-transparent py-12 md:px-12 flex justify-around lg:justify-end">
    <a
      v-for="link in links"
      :key="link.toString()"
      class="lg:mx-6 text-black tracking-widest lg:tracking-more-wide uppercase hover:text-primary-dark"
      :href="'#' + link"
      >{{ link }}</a
    >
  </nav>
</template>

<style>
</style>