<script setup>
import { currentLanguage } from '../store/language'

const texts = {
  en: {
    title: "Welcome to Rwanda",
    subtitle: "Discover the Beauty of Rwanda 🌍",
    sectionTitle: "About Tembera Urwanda",
    button: "Explore Rwanda",
    destinations: "Popular Destination"
  },
  fr: {
    title: "Bienvenue au Rwanda",
    subtitle: "Découvrez la beauté du Rwanda 🌍",
    sectionTitle: "À propos de Tembera Urwanda",
    button: "Explorer le Rwanda",
    destinations: "Destinations populaires"
  },
  rw: {
    title: "Murakaza neza mu Rwanda",
    subtitle: "Menya ubwiza bw'u Rwanda 🌍",
    sectionTitle: "Ibyerekeye Tembera Urwanda",
    button: "Sura u Rwanda",
    destinations: "Ahantu hazwi"
  }
}
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/hills.png');"
>

  <!-- DARK LAYER -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

  <div class="relative z-10 text-center text-white px-6 max-w-4xl">

    <p class="uppercase tracking-[6px] text-green-300 text-sm mb-4">
      Rwanda Tourism Experience
    </p>

    <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
      {{ texts[currentLanguage].sectionTitle }}
    </h1>

    <p class="text-xl md:text-2xl text-green-200">
      {{ texts[currentLanguage].subtitle }}
    </p>

  </div>

</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-24 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

    <!-- IMAGE -->
    <div class="md:w-1/2">

      <div class="rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/abakobwa.jpg"
          class="w-full h-[520px] object-cover transition duration-700 hover:scale-105"
        />
      </div>

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-5xl font-extrabold text-green-900 mb-8 leading-tight">
        {{ texts[currentLanguage].title }}
      </h2>

      <p class="text-gray-700 text-lg leading-10">
        Tembera Urwanda is a tourism platform designed to showcase the
        breathtaking beauty of Rwanda, the Land of a Thousand Hills.

        <br /><br />

        From the misty volcanoes of the north to the calm shores of Lake Kivu,
        and the vibrant heartbeat of Kigali city, Rwanda offers a unique blend
        of nature, culture, and adventure.

        <br /><br />

        Every journey tells a story. Every destination feels alive.
      </p>

      <!-- INTERACTIVE BUTTON -->
      <a
        href="#destinations"
        class="group mt-10 inline-flex items-center gap-3 relative overflow-hidden
               bg-green-700 hover:bg-green-600 text-white px-10 py-4
               rounded-full shadow-2xl transition duration-500
               hover:scale-110 font-semibold text-lg"
      >

        <!-- Glow -->
        <span
          class="absolute inset-0 bg-white/10 opacity-0
                 group-hover:opacity-100 transition duration-500 rounded-full"
        ></span>

        <!-- Text -->
        <span class="relative z-10">
          {{ texts[currentLanguage].button }}
        </span>

        <!-- Arrow -->
        <span
          class="relative z-10 transition-transform duration-300
                 group-hover:translate-x-2"
        >
          →
        </span>

      </a>

    </div>

  </div>

</section>

<!-- DESTINATIONS -->
<section id="destinations" class="bg-slate-50 py-24 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-green-900 mb-16">
      {{ texts[currentLanguage].destinations }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100
                  hover:-translate-y-3 hover:shadow-green-200 transition duration-500">

        <img
          src="/ingagi.jpg"
          class="h-64 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">

          <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            Wildlife
          </span>

          <h2 class="text-2xl font-bold text-blue-700 mt-4 mb-3">
            Volcanoes National Park
          </h2>

          <p class="text-gray-600 leading-7">
            Experience mountain gorillas and breathtaking volcanic scenery.
          </p>

        </div>

      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100
                  hover:-translate-y-3 hover:shadow-green-200 transition duration-500">

        <img
          src="/island.jpg"
          class="h-64 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">

          <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            Nature
          </span>

          <h2 class="text-2xl font-bold text-emerald-700 mt-4 mb-3">
            Lake Kivu
          </h2>

          <p class="text-gray-600 leading-7">
            Relax on peaceful beaches and enjoy golden sunset views.
          </p>

        </div>

      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100
                  hover:-translate-y-3 hover:shadow-green-200 transition duration-500">

        <img
          src="/Kigali.jpg"
          class="h-64 w-full object-cover transition duration-700 hover:scale-110"
        />

        <div class="p-6">

          <span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
            City
          </span>

          <h2 class="text-2xl font-bold text-amber-700 mt-4 mb-3">
            Kigali City
          </h2>

          <p class="text-gray-600 leading-7">
            Explore Rwanda’s vibrant capital filled with culture and modern life.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</template>