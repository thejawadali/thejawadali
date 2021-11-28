<script lang="ts" setup>
import Project from "./Base/BaseProject.vue";

const projects = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1637429772437-d2de019a969c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2555&q=80",
    title: "Nihil quod dolore ut sint",
    description:
      "Quasi quis reiciendis minima ad ut ut quia. Ea dicta aliquid consequatur vel et. Illo minima voluptatum aperiam a explicabo non ipsum.",
    githubURL: "",
  },
  {
    id: 2,
    img: "http://placeimg.com/640/480/city",
    title: "Facilis magni ab pariatur",
    description:
      "Dolor numquam voluptatibus impedit aut dolores aut alias qui vitae. Quas ratione et libero vero. Aut assumenda eveniet reiciendis ad molestiae molestiae quis.",
    githubURL: "",
  },
  {
    id: 2,
    img: "http://placeimg.com/640/480/cats",
    title: "Asperiores eveniet illum",
    description:
      "Quos rerum laudantium ut temporibus iusto non ut. Odio sit qui perspiciatis iusto. Sit aliquam in deserunt ea inventore odio minus. Molestias fugiat reprehenderit voluptatem id laudantium nesciunt et labore rerum. Nam qui officiis quibusdam.",
    githubURL: "",
  },
  {
    id: 2,
    img: "http://placeimg.com/640/480/animals",
    title: "sit-repudiandae-dicta",
    description:
      "Qui deserunt fugit vel in delectus ipsam natus debitis ab. Ipsa necessitatibus velit ea qui maiores occaecati. Voluptatibus nostrum assumenda doloremque veniam laudantium voluptas. Voluptas voluptatum omnis qui aut odio. Numquam aliquam voluptatem.",
    githubURL: "",
  },
  {
    id: 2,
    img: "http://placeimg.com/640/480/technics",
    title: "Distinctio omnis earum",
    description:
      "Amet optio nesciunt voluptatum rerum vel itaque commodi voluptatem. Pariatur expedita quia corporis odio perferendis sed aspernatur. Voluptatem eveniet aliquid molestiae provident. Quod quis maiores ipsum provident quas mollitia. Nesciunt ea consequuntur necessitatibus necessitatibus reiciendis ut ut. Omnis aperiam est nobis quia dicta.",
    githubURL: "",
  },
  {
    id: 2,
    img: "http://placeimg.com/640/480/people",
    title: "Aut necessitatibus",
    description:
      "Optio sit rerum quas vel culpa. Aut consequatur minima. Non dolor debitis officia impedit eum commodi vel nulla id. Ut aspernatur atque officiis dolor cum iusto. Qui velit voluptas.",
    githubURL: "https://github.com/thejawadali?tab=repositories",
  },
];
</script>


<template>
  <div id="work" class="mt-32 lg:mx-32">
    <p class="text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight">
      Some of my <strong>Notable Projects</strong>
    </p>
    <div class="my-10 flex flex-wrap justify-center">
      <Project
        v-for="project in projects"
        :key="project.id"
        :img="project.img"
        :title="project.title"
        :github-url="project.githubURL"
        :description="project.description"
      />
    </div>
    <div class="text-center">
      <a
        href="https://github.com/thejawadali?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="uppercase bg-secondary text-white text-2xl px-20 py-5 rounded-xl"
      >
        see all projects
      </a>
    </div>
  </div>
</template>
