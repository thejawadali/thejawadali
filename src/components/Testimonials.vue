<script lang="ts" setup>
import BaseTestimonial from "./Base/BaseTestimonial.vue";
import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination} from "vue3-carousel";
import { store as myStore } from "../store";
import { onMounted, ref } from "vue-demi"

const store = myStore()

const feeds = ref([] as any)

onMounted(()=>{
  store.getFeeds((success: boolean, resp: any) => {
    if (success) {
      feeds.value = resp
    } else {
      console.error(resp);
    }
  });
})

// const feeds = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     customerName: "Jawad Ali",
//     desg: "Co-Founder",
//     details:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores a suscipit? Voluptates, eaque saepe hic quam assumenda cupiditate, sint veritatis corporis repudiandae, nesciunt id enim voluptas. Repellat, dolorem libero",
//   },
//   {
//     id: 2,
//     img: "http://placeimg.com/640/480/cats",
//     customerName: "Some random pic from vs code",
//     desg: "Co-Founder",
//     details:
//       "Sapiente nulla iure. Eum et rerum rem ut enim voluptatibus. Est doloribus fugit. Quis et id id esse assumenda at possimus tempora. Omnis dolorem odio iure ipsum asperiores quae dolorum facere. Quaerat est eos qui itaque.",
//   },
//   {
//     id: 3,
//     img: "http://placeimg.com/640/480/cats",
//     customerName: "Another slide",
//     desg: "Co-Founder",
//     details:
//       "Sapiente nulla iure. Eum et rerum rem ut enim voluptatibus. Est doloribus fugit. Quis et id id esse assumenda at possimus tempora. Omnis dolorem odio iure ipsum asperiores quae dolorum facere. Quaerat est eos qui itaque.",
//   },
// ];
</script>


<template>
  <div id="testimonials" class="mt-32 lg:mx-32">
    <p class="text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight">
      <strong>They Trusted</strong> on my skills
    </p>
    <!-- <div class="my-10 w-4/5 mx-auto md:max-w-5xl border-2 rounded md:p-10">
      <Carousel
        :autoplay="2500"
        :items-to-show="1"
        wrapAround
        pause-autoplay-on-hover
      >
        <Slide v-for="feed in feeds" :key="feed.id">
          <BaseTestimonial
            :img="feed.img"
            :desg="feed.desg"
            :details="feed.details"
            :customer-name="feed.customerName"
          />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div> -->
  </div>
</template>
