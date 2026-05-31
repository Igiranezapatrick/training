<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/crater.png');"
>

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

    <h1 class="text-2xl md:text-5xl font-bold mb-6">

      <span v-if="currentLanguage === 'en'">Welcome to Northern Province</span>
      <span v-if="currentLanguage === 'fr'">Bienvenue dans la Province du Nord</span>
      <span v-if="currentLanguage === 'rw'">Murakaza neza mu Ntara y'Amajyaruguru</span>

    </h1>

    <p class="text-medium md:text-medium text-green-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Home of volcanoes, gorillas, beautiful lakes,
        and breathtaking adventures.
      </span>

      <span v-if="currentLanguage === 'fr'">
        Terre des volcans, des gorilles et des aventures inoubliables.
      </span>

      <span v-if="currentLanguage === 'rw'">
        Aho usanga ibirunga, ingagi, ibiyaga n'ubukerarugendo budasanzwe.
      </span>

    </p>

  </div>
</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

    <div class="md:w-1/2">
      <img src="/north.jpg" class="w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
    </div>

    <div class="md:w-1/2">

      <h2 class="text-4xl font-bold text-green-800 mb-8">
        <span v-if="currentLanguage === 'en'">About Northern Province</span>
        <span v-if="currentLanguage === 'fr'">À propos de la Province du Nord</span>
        <span v-if="currentLanguage === 'rw'">Ibyerekeye Intara y'Amajyaruguru</span>
      </h2>

      <p class="text-gray-700 text-lg leading-9">
        <span v-if="currentLanguage === 'en'">
          Northern Province is one of Rwanda’s most beautiful tourist destinations...
        </span>
        <span v-if="currentLanguage === 'fr'">
          La Province du Nord est célèbre pour ses volcans...
        </span>
        <span v-if="currentLanguage === 'rw'">
          Intara y'Amajyaruguru izwi cyane kubera ibirunga...
        </span>
      </p>

      <button class="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-lg transition duration-300">
        <span v-if="currentLanguage === 'en'">Start Your Adventure</span>
        <span v-if="currentLanguage === 'fr'">Commencez l'aventure</span>
        <span v-if="currentLanguage === 'rw'">Tangira Ubukerarugendo</span>
      </button>

    </div>
  </div>
</section>

<!-- WHY VISIT -->
<section class="bg-slate-100 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-green-800 mb-16">
      <span v-if="currentLanguage === 'en'">Why Visit Northern Province?</span>
      <span v-if="currentLanguage === 'fr'">Pourquoi visiter la Province du Nord ?</span>
      <span v-if="currentLanguage === 'rw'">Kuki wasura Intara y'Amajyaruguru?</span>
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-green-700
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/see.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Wildlife</span>

          <h2 class="text-2xl font-bold text-green-800 mt-5 mb-4">
            <span v-if="currentLanguage === 'en'">Gorilla Adventures</span>
            <span v-if="currentLanguage === 'fr'">Aventures des Gorilles</span>
            <span v-if="currentLanguage === 'rw'">Ubukerarugendo bw'Ingagi</span>
          </h2>

          <p class="text-gray-600 leading-7">
            <span v-if="currentLanguage === 'en'">Discover mountain gorillas...</span>
            <span v-if="currentLanguage === 'fr'">Découvrez les gorilles...</span>
            <span v-if="currentLanguage === 'rw'">Menya ingagi...</span>
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-amber-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/one.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <span class="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">Hotels</span>

          <h2 class="text-2xl font-bold text-amber-700 mt-5 mb-4">Luxury Hotels</h2>

          <p class="text-gray-600 leading-7">Relax in comfortable hotels...</p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-rose-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/ok.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <span class="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">Culture</span>

          <h2 class="text-2xl font-bold text-rose-700 mt-5 mb-4">Cultural Experiences</h2>

          <p class="text-gray-600 leading-7">Enjoy traditions and dances...</p>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-cyan-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/amazed.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <span class="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">Adventure</span>

          <h2 class="text-2xl font-bold text-cyan-700 mt-5 mb-4">Nature Adventures</h2>

          <p class="text-gray-600 leading-7">Explore lakes and volcanoes...</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- FEATURED ATTRACTIONS -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-green-800 mb-16">
      Featured Attractions
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- CARD -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/gorills.png"
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-4">Volcanoes National Park</h2>
          <p class="text-gray-600 leading-7">Famous for gorillas and volcano adventures.</p>
        </div>
      </div>

      <!-- CARD -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/cave.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-4">Musanze Caves</h2>
          <p class="text-gray-600 leading-7">Explore volcanic caves.</p>
        </div>
      </div>

      <!-- CARD -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/twins.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div class="p-6">
          <h2 class="text-2xl font-bold text-green-800 mb-4">Twin Lakes</h2>
          <p class="text-gray-600 leading-7">Peaceful lakes surrounded by hills.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="bg-green-800 py-20 px-8 text-center text-white">
  <h1 class="text-3xl font-bold mb-8">Ready for Your Next Adventure?</h1>

  <button class="bg-white text-green-800 font-bold px-10 py-4 rounded-full hover:bg-green-100 transition duration-300 shadow-xl">
    Explore More
  </button>
</section>

</template>