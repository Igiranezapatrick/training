<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/gisenyi.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- HERO CONTENT -->
  <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

    <h1 class="text-2xl md:text-5xl font-bold mb-6">

      <span v-if="currentLanguage === 'en'">
        Welcome to Western Province
      </span>

      <span v-if="currentLanguage === 'fr'">
        Bienvenue dans la Province de l'Ouest
      </span>

      <span v-if="currentLanguage === 'rw'">
        Murakaza neza mu Ntara y'Iburengerazuba
      </span>

    </h1>

    <p class="text-medium md:text-medium text-sky-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Home of Lake Kivu, peaceful beaches,
        green hills, islands, and unforgettable sunsets.
      </span>

      <span v-if="currentLanguage === 'fr'">
        Terre du lac Kivu, des îles magnifiques et des couchers de soleil.
      </span>

      <span v-if="currentLanguage === 'rw'">
        Aho usanga Ikiyaga cya Kivu,
        ibirwa n'ibyiza nyaburanga bitangaje.
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
        src="/boat.jpg"
        class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-4xl font-bold text-indigo-700 mb-8">

        <span v-if="currentLanguage === 'en'">
          About Western Province
        </span>

        <span v-if="currentLanguage === 'fr'">
          À propos de la Province de l'Ouest
        </span>

        <span v-if="currentLanguage === 'rw'">
          Ibyerekeye Intara y'Iburengerazuba
        </span>

      </h2>

      <p class="text-gray-700 text-lg leading-9">

        <span v-if="currentLanguage === 'en'">
          Western Province is one of Rwanda’s most relaxing
          and scenic destinations. It is famous for Lake Kivu,
          beautiful beaches, islands, coffee plantations,
          and peaceful lakeside towns.
          <br /><br />
          Visitors enjoy boat rides, swimming, hiking,
          cultural experiences, and breathtaking sunset views.
        </span>

        <span v-if="currentLanguage === 'fr'">
          La Province de l'Ouest est célèbre pour le lac Kivu,
          ses plages et ses magnifiques paysages.
        </span>

        <span v-if="currentLanguage === 'rw'">
          Intara y'Iburengerazuba izwi cyane kubera
          Ikiyaga cya Kivu n'ubwiza bwaho.
        </span>

      </p>

      <button
        class="mt-8 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
      >

        <span v-if="currentLanguage === 'en'">
          Start Exploring
        </span>

        <span v-if="currentLanguage === 'fr'">
          Commencer l'exploration
        </span>

        <span v-if="currentLanguage === 'rw'">
          Tangira Gutembera
        </span>

      </button>

    </div>

  </div>

</section>

<!-- WHY VISIT SECTION -->
<section class="bg-slate-100 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-indigo-700 mb-16">

      <span v-if="currentLanguage === 'en'">
        Why Visit Western Province?
      </span>

      <span v-if="currentLanguage === 'fr'">
        Pourquoi visiter la Province de l'Ouest ?
      </span>

      <span v-if="currentLanguage === 'rw'">
        Kuki wasura Intara y'Iburengerazuba?
      </span>

    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-sky-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img
          src="/beach.jpg"
          class="h-56 w-full object-cover hover:scale-105 transition duration-300"
        />

        <div class="p-6">

          <span class="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
            Beaches
          </span>

          <h2 class="text-2xl font-bold text-sky-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Lake Beaches
            </span>

            <span v-if="currentLanguage === 'fr'">
              Plages du Lac
            </span>

            <span v-if="currentLanguage === 'rw'">
              Inkombe z'Ikiyaga
            </span>

          </h2>

          <p class="text-gray-600 leading-7">
            Relax on peaceful beaches beside Lake Kivu.
          </p>

        </div>

      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-emerald-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img
          src="/coffee.jpg"
          class="h-56 w-full object-cover hover:scale-105 transition duration-300"
        />

        <div class="p-6">

          <span class="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Coffee
          </span>

          <h2 class="text-2xl font-bold text-emerald-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Coffee Tours
            </span>

            <span v-if="currentLanguage === 'fr'">
              Visites du Café
            </span>

            <span v-if="currentLanguage === 'rw'">
              Gusura Ikawa
            </span>

          </h2>

          <p class="text-gray-600 leading-7">
            Discover Rwanda’s famous coffee plantations.
          </p>

        </div>

      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-violet-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img
          src="/sunset2.jpg"
          class="h-56 w-full object-cover hover:scale-105 transition duration-300"
        />

        <div class="p-6">

          <span class="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold">
            Sunsets
          </span>

          <h2 class="text-2xl font-bold text-violet-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Sunset Views
            </span>

            <span v-if="currentLanguage === 'fr'">
              Couchers de Soleil
            </span>

            <span v-if="currentLanguage === 'rw'">
              Izuba Rirenze
            </span>

          </h2>

          <p class="text-gray-600 leading-7">
            Watch magical sunsets over Lake Kivu waters.
          </p>

        </div>

      </div>

      <!-- CARD 4 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-500
                  hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <img
          src="/island2.jpg"
          class="h-56 w-full object-cover hover:scale-105 transition duration-300"
        />

        <div class="p-6">

          <span class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            Adventure
          </span>

          <h2 class="text-2xl font-bold text-indigo-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Island Adventures
            </span>

            <span v-if="currentLanguage === 'fr'">
              Aventures sur les Îles
            </span>

            <span v-if="currentLanguage === 'rw'">
              Gutembera ku Birwa
            </span>

          </h2>

          <p class="text-gray-600 leading-7">
            Explore islands and lakeside adventures.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</template>