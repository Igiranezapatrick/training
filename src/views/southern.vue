<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/image.png');"
>

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

    <h1 class="text-2xl md:text-5xl font-bold mb-6">

      <span v-if="currentLanguage === 'en'">Welcome to Southern Province</span>
      <span v-if="currentLanguage === 'fr'">Bienvenue dans la Province du Sud</span>
      <span v-if="currentLanguage === 'rw'">Murakaza neza mu Ntara y'Amajyepfo</span>

    </h1>

    <p class="text-green-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Home of forests, culture, waterfalls,
        and unforgettable natural beauty.
      </span>

      <span v-if="currentLanguage === 'fr'">
        Terre des forêts, de la culture et des magnifiques paysages.
      </span>

      <span v-if="currentLanguage === 'rw'">
        Aho usanga amashyamba, umuco, amasumo n'ibyiza nyaburanga.
      </span>

    </p>

  </div>

</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

    <div class="md:w-1/2">
      <img src="/plant.jpg" class="w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
    </div>

    <div class="md:w-1/2">

      <h2 class="text-4xl font-bold text-green-800 mb-8">

        <span v-if="currentLanguage === 'en'">About Southern Province</span>
        <span v-if="currentLanguage === 'fr'">À propos de la Province du Sud</span>
        <span v-if="currentLanguage === 'rw'">Ibyerekeye Intara y'Amajyepfo</span>

      </h2>

      <p class="text-gray-700 text-lg leading-9">

        <span v-if="currentLanguage === 'en'">
          Southern Province is rich in forests, waterfalls,
          tea plantations, and cultural heritage.
        </span>

        <span v-if="currentLanguage === 'fr'">
          La Province du Sud est riche en forêts et culture.
        </span>

        <span v-if="currentLanguage === 'rw'">
          Intara y'Amajyepfo izwi kubera amashyamba n'umuco.
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
      Why Visit Southern Province?
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-emerald-600
                  transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/monkey.jpg"
          class="h-56 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <span class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Nature
          </span>

          <h2 class="text-2xl font-bold text-emerald-700 mt-5">Forest Adventures</h2>

          <p class="text-gray-600 mt-3">
            Explore Nyungwe rainforest and wildlife.
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-orange-400
                  transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/hotel.jpg"
          class="h-56 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <span class="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            Hotels
          </span>

          <h2 class="text-2xl font-bold text-orange-600 mt-5">Eco Hotels</h2>

          <p class="text-gray-600 mt-3">
            Relax in nature-friendly lodges.
          </p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-teal-500
                  transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/rwanda.jpg"
          class="h-56 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <span class="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Culture
          </span>

          <h2 class="text-2xl font-bold text-teal-700 mt-5">Rwandan Heritage</h2>

          <p class="text-gray-600 mt-3">
            Traditional culture and history.
          </p>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-sky-500
                  transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

        <img src="/canopy.jpg"
          class="h-56 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <span class="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
            Adventure
          </span>

          <h2 class="text-2xl font-bold text-sky-700 mt-5">Canopy Walk</h2>

          <p class="text-gray-600 mt-3">
            Walk above Nyungwe forest.
          </p>
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-200
                  transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]">

        <img src="/nyungwe.jpg"
          class="h-60 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <h2 class="text-xl font-bold text-emerald-700">Nyungwe Forest</h2>
          <p class="text-gray-600 mt-2">Canopy walk, chimpanzees, rainforest adventure.</p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-200
                  transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]">

        <img src="/museum.jpg"
          class="h-60 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <h2 class="text-xl font-bold text-orange-600">King’s Palace</h2>
          <p class="text-gray-600 mt-2">Rwanda’s royal history and culture.</p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-sky-200
                  transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]">

        <img src="/waterfall.jpg"
          class="h-60 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <h2 class="text-xl font-bold text-sky-600">Kamiranzovu Waterfall</h2>
          <p class="text-gray-600 mt-2">Hidden waterfall inside Nyungwe forest.</p>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-teal-200
                  transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]">

        <img src="/tea.jpg"
          class="h-60 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">
          <h2 class="text-xl font-bold text-teal-600">Tea Plantations</h2>
          <p class="text-gray-600 mt-2">Green hills and peaceful landscapes.</p>
        </div>
      </div>

    </div>

  </div>

</section>

<!-- CTA -->
<section class="bg-green-800 py-20 text-center text-white">

  <h1 class="text-3xl font-bold mb-8">
    Ready for Southern Adventure?
  </h1>

  <button class="bg-white text-green-800 px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
    Book a Tour
  </button>

</section>

</template>