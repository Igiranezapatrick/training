<script setup>
import { RouterLink } from 'vue-router'
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/images/volcano.jpg');"
>

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-32">

    <h1 class="text-6xl font-bold mb-8">

      <span v-if="currentLanguage === 'en'">
        Welcome to Our Gallery
      </span>

      <span v-else-if="currentLanguage === 'fr'">
        Bienvenue dans Notre Galerie
      </span>

      <span v-else-if="currentLanguage === 'rw'">
        Murakaza neza mu Bubiko bw'Amafoto
      </span>

      <!-- fallback -->
      <span v-else>
        Welcome to Our Gallery
      </span>

    </h1>

    <p class="max-w-3xl text-xl leading-9 text-green-200 mb-12">

      <span v-if="currentLanguage === 'en'">
        Explore Rwanda through breathtaking tourist attraction images and exciting travel videos.
      </span>

      <span v-else-if="currentLanguage === 'fr'">
        Découvrez le Rwanda à travers des images magnifiques et des vidéos touristiques.
      </span>

      <span v-else-if="currentLanguage === 'rw'">
        Reba ubwiza bw’u Rwanda mu mafoto n’amashusho y’ubukerarugendo.
      </span>

      <span v-else>
        Explore Rwanda through images and videos.
      </span>

    </p>

    <!-- BUTTONS -->
    <div class="flex flex-wrap gap-6">

      <RouterLink
        to="/gallery/images"
        class="bg-green-700 hover:bg-green-600 px-10 py-4 rounded-full text-white font-bold shadow-xl transition duration-300"
      >
        📸 Images
      </RouterLink>

      <RouterLink
        to="/gallery/videos"
        class="bg-blue-700 hover:bg-blue-600 px-10 py-4 rounded-full text-white font-bold shadow-xl transition duration-300"
      >
        🎬 Videos
      </RouterLink>

    </div>

  </div>

</section>

</template>