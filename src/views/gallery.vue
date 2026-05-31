<script setup>
import { RouterLink } from 'vue-router'
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO -->
<section
  class="relative min-h-screen bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/images/volcano.jpg');"
>

  <!-- DARK CINEMATIC OVERLAY -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

  <!-- CONTENT -->
  <div class="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 max-w-5xl">

    <!-- TITLE -->
    <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide">

      <span v-if="currentLanguage === 'en'">
        Welcome to Our Gallery
      </span>

      <span v-else-if="currentLanguage === 'fr'">
        Bienvenue dans Notre Galerie
      </span>

      <span v-else-if="currentLanguage === 'rw'">
        Murakaza neza mu Bubiko bw'Amafoto
      </span>

      <span v-else>
        Welcome to Our Gallery
      </span>

    </h1>

    <!-- SUBTITLE -->
    <p class="max-w-3xl text-lg md:text-xl leading-8 text-green-200 mb-12">

      <span v-if="currentLanguage === 'en'">
        Discover Rwanda through breathtaking landscapes, cultural heritage,
        wildlife moments, and immersive travel videos captured across the country.
      </span>

      <span v-else-if="currentLanguage === 'fr'">
        Découvrez le Rwanda à travers des paysages, la culture, la faune et des vidéos immersives.
      </span>

      <span v-else-if="currentLanguage === 'rw'">
        Menya u Rwanda binyuze mu mafoto n'amashusho y'ubwiza bwa kamere n'umuco.
      </span>

      <span v-else>
        Explore Rwanda through images and videos.
      </span>

    </p>

    <!-- BUTTONS -->
    <div class="flex flex-wrap gap-6">

      <RouterLink
        to="/gallery/images"
        class="group relative bg-green-700 hover:bg-green-600 px-10 py-4 rounded-full text-white font-bold shadow-2xl transition duration-300 overflow-hidden"
      >
        <span class="relative z-10">📸 Images</span>
        <div class="absolute inset-0 bg-green-500 scale-x-0 group-hover:scale-x-100 transition origin-left duration-300"></div>
      </RouterLink>

      <RouterLink
        to="/gallery/videos"
        class="group relative bg-blue-700 hover:bg-blue-600 px-10 py-4 rounded-full text-white font-bold shadow-2xl transition duration-300 overflow-hidden"
      >
        <span class="relative z-10">🎬 Videos</span>
        <div class="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition origin-left duration-300"></div>
      </RouterLink>

    </div>

  </div>

</section>

</template>