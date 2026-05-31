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
      <span v-else-if="currentLanguage === 'fr'">Bienvenue dans la Province du Nord</span>
      <span v-else>Murakaza neza mu Ntara y'Amajyaruguru</span>

    </h1>

    <p class="text-base md:text-lg text-green-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Home of volcanoes, gorillas, beautiful lakes,
        and breathtaking adventures.
      </span>

      <span v-else-if="currentLanguage === 'fr'">
        Terre des volcans, des gorilles et des aventures inoubliables.
      </span>

      <span v-else>
        Aho usanga ibirunga, ingagi, ibiyaga n'ubukerarugendo budasanzwe.
      </span>

    </p>

  </div>
</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-4 md:px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">

    <div class="md:w-1/2">
      <img
        src="/north.jpg"
        class="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
      />
    </div>

    <div class="md:w-1/2">

      <h2 class="text-3xl md:text-4xl font-bold text-green-800 mb-8">
        <span v-if="currentLanguage === 'en'">About Northern Province</span>
        <span v-else-if="currentLanguage === 'fr'">À propos de la Province du Nord</span>
        <span v-else>Ibyerekeye Intara y'Amajyaruguru</span>
      </h2>

      <p class="text-gray-700 text-base md:text-lg leading-8 md:leading-9">
        <span v-if="currentLanguage === 'en'">
          Northern Province is one of Rwanda’s most beautiful tourist destinations...
        </span>
        <span v-else-if="currentLanguage === 'fr'">
          La Province du Nord est célèbre pour ses volcans...
        </span>
        <span v-else>
          Intara y'Amajyaruguru izwi cyane kubera ibirunga...
        </span>
      </p>

      <button class="mt-8 bg-green-700 hover:bg-green-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition duration-300">
        <span v-if="currentLanguage === 'en'">Start Your Adventure</span>
        <span v-else-if="currentLanguage === 'fr'">Commencez l'aventure</span>
        <span v-else>Tangira Ubukerarugendo</span>
      </button>

    </div>
  </div>
</section>

<!-- WHY VISIT -->
<section class="bg-slate-100 py-20 px-4 md:px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-3xl md:text-5xl font-bold text-center text-green-800 mb-16">
      <span v-if="currentLanguage === 'en'">Why Visit Northern Province?</span>
      <span v-else-if="currentLanguage === 'fr'">Pourquoi visiter la Province du Nord ?</span>
      <span v-else>Kuki wasura Intara y'Amajyaruguru?</span>
    </h1>

    <!-- GRID FIX -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

      <!-- CARD 1 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-green-700
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <div class="aspect-[4/3] overflow-hidden">
          <img src="/see.jpg"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div class="p-5 md:p-6">
          <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            Wildlife
          </span>

          <h2 class="text-xl md:text-2xl font-bold text-green-800 mt-5 mb-4">
            <span v-if="currentLanguage === 'en'">Gorilla Adventures</span>
            <span v-else-if="currentLanguage === 'fr'">Aventures des Gorilles</span>
            <span v-else>Ubukerarugendo bw'Ingagi</span>
          </h2>

          <p class="text-gray-600 leading-7 text-sm md:text-base">
            <span v-if="currentLanguage === 'en'">Discover mountain gorillas...</span>
            <span v-else-if="currentLanguage === 'fr'">Découvrez les gorilles...</span>
            <span v-else>Menya ingagi...</span>
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-amber-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <div class="aspect-[4/3] overflow-hidden">
          <img src="/one.jpg"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div class="p-5 md:p-6">
          <span class="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
            Hotels
          </span>

          <h2 class="text-xl md:text-2xl font-bold text-amber-700 mt-5 mb-4">
            Luxury Hotels
          </h2>

          <p class="text-gray-600 leading-7 text-sm md:text-base">
            Relax in comfortable hotels...
          </p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-rose-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <div class="aspect-[4/3] overflow-hidden">
          <img src="/ok.jpg"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div class="p-5 md:p-6">
          <span class="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
            Culture
          </span>

          <h2 class="text-xl md:text-2xl font-bold text-rose-700 mt-5 mb-4">
            Cultural Experiences
          </h2>

          <p class="text-gray-600 leading-7 text-sm md:text-base">
            Enjoy traditions and dances...
          </p>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="group bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-cyan-500
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <div class="aspect-[4/3] overflow-hidden">
          <img src="/amazed.jpg"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div class="p-5 md:p-6">
          <span class="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
            Adventure
          </span>

          <h2 class="text-xl md:text-2xl font-bold text-cyan-700 mt-5 mb-4">
            Nature Adventures
          </h2>

          <p class="text-gray-600 leading-7 text-sm md:text-base">
            Explore lakes and volcanoes...
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="bg-green-800 py-20 px-6 text-center text-white">

  <h1 class="text-2xl md:text-3xl font-bold mb-8">
    Ready for Your Next Adventure?
  </h1>

  <button class="bg-white text-green-800 font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-green-100 transition duration-300 shadow-xl">
    Explore More
  </button>

</section>

</template>