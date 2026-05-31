<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/akager.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- HERO CONTENT -->
  <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

    <h1 class="text-2xl md:text-5xl font-bold mb-6">

      <span v-if="currentLanguage === 'en'">
        Welcome to Eastern Province
      </span>

      <span v-if="currentLanguage === 'fr'">
        Bienvenue dans la Province de l'Est
      </span>

      <span v-if="currentLanguage === 'rw'">
        Murakaza neza mu Ntara y'Iburasirazuba
      </span>

    </h1>

    <p class="text-medium md:text-medium text-yellow-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Home of Akagera National Park, endless savannahs,
        lakes, wildlife, and golden sunrise adventures.
      </span>

      <span v-if="currentLanguage === 'fr'">
        Terre des savanes, du parc Akagera et de la faune sauvage.
      </span>

      <span v-if="currentLanguage === 'rw'">
        Aho usanga Akagera, ibinyabuzima n'amaso y'izuba meza.
      </span>

    </p>

  </div>

</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

    <!-- IMAGE -->
    <div class="md:w-1/2">

      <img
        src="/zebra.jpg"
        class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-4xl font-bold text-yellow-700 mb-8">

        <span v-if="currentLanguage === 'en'">
          About Eastern Province
        </span>

        <span v-if="currentLanguage === 'fr'">
          À propos de la Province de l'Est
        </span>

        <span v-if="currentLanguage === 'rw'">
          Ibyerekeye Intara y'Iburasirazuba
        </span>

      </h2>

      <p class="text-gray-700 text-lg leading-9">

        <span v-if="currentLanguage === 'en'">
          Eastern Province is Rwanda’s largest region, famous for Akagera National Park,
          savannah wildlife, lakes, and peaceful rural landscapes.
          <br /><br />
          Visitors enjoy safaris, boat rides, bird watching, and golden sunsets over the savannah.
        </span>

        <span v-if="currentLanguage === 'fr'">
          La Province de l'Est est connue pour le parc Akagera et ses safaris.
        </span>

        <span v-if="currentLanguage === 'rw'">
          Intara y'Iburasirazuba izwi kubera Akagera n'ubukerarugendo bwa safari.
        </span>

      </p>

      <button
        class="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
      >
        <span v-if="currentLanguage === 'en'">Start Safari Adventure</span>
        <span v-if="currentLanguage === 'fr'">Commencer le Safari</span>
        <span v-if="currentLanguage === 'rw'">Tangira Safari</span>
      </button>

    </div>

  </div>

</section>

<!-- WHY VISIT SECTION -->
<section class="bg-slate-100 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-yellow-700 mb-16">

      <span v-if="currentLanguage === 'en'">
        Why Visit Eastern Province?
      </span>

      <span v-if="currentLanguage === 'fr'">
        Pourquoi visiter la Province de l'Est ?
      </span>

      <span v-if="currentLanguage === 'rw'">
        Kuki wasura Intara y'Iburasirazuba?
      </span>

    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-yellow-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img src="/akagera.jpg" class="h-56 w-full object-cover hover:scale-105 transition duration-300" />

        <div class="p-6">

          <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            Safari
          </span>

          <h2 class="text-2xl font-bold text-yellow-700 mt-5 mb-4">
            Wildlife Safaris
          </h2>

          <p class="text-gray-600 leading-7">
            Explore lions, elephants, rhinos, and giraffes in Akagera.
          </p>

        </div>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-sky-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img src="/lake.jpg" class="h-56 w-full object-cover hover:scale-105 transition duration-300" />

        <div class="p-6">

          <span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
            Lakes
          </span>

          <h2 class="text-2xl font-bold text-sky-700 mt-5 mb-4">
            Lake Activities
          </h2>

          <p class="text-gray-600 leading-7">
            Enjoy boat rides, fishing, and peaceful waters.
          </p>

        </div>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-orange-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img src="/sunset.jpg" class="h-56 w-full object-cover hover:scale-105 transition duration-300" />

        <div class="p-6">

          <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
            Nature
          </span>

          <h2 class="text-2xl font-bold text-orange-700 mt-5 mb-4">
            Golden Sunsets
          </h2>

          <p class="text-gray-600 leading-7">
            Experience breathtaking sunsets over savannah landscapes.
          </p>

        </div>
      </div>

      <!-- CARD 4 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-emerald-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img src="/birds.jpg" class="h-56 w-full object-cover hover:scale-105 transition duration-300" />

        <div class="p-6">

          <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
            Wildlife
          </span>

          <h2 class="text-2xl font-bold text-emerald-700 mt-5 mb-4">
            Bird Watching
          </h2>

          <p class="text-gray-600 leading-7">
            Over 500 bird species across wetlands and savannah.
          </p>

        </div>
      </div>

    </div>

  </div>

</section>

<!-- CTA SECTION -->
<section class="bg-yellow-700 py-20 px-8 text-center text-white">

  <h1 class="text-3xl font-bold mb-8">
    <span v-if="currentLanguage === 'en'">Ready for a Safari?</span>
    <span v-if="currentLanguage === 'fr'">Prêt pour un Safari ?</span>
    <span v-if="currentLanguage === 'rw'">Witeguye Safari?</span>
  </h1>

  <button
    class="bg-white text-yellow-700 font-bold px-10 py-4 rounded-full hover:bg-yellow-100 transition duration-300 shadow-xl"
  >
    <span v-if="currentLanguage === 'en'">Explore Akagera</span>
    <span v-if="currentLanguage === 'fr'">Explorer Akagera</span>
    <span v-if="currentLanguage === 'rw'">Sura Akagera</span>
  </button>

</section>

</template>