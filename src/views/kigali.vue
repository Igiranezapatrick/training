<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/this.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- HERO CONTENT -->
  <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

    <h1 class="text-2xl md:text-5xl font-bold mb-6">

      <span v-if="currentLanguage === 'en'">
        Welcome to Kigali City
      </span>

      <span v-if="currentLanguage === 'fr'">
        Bienvenue à Kigali
      </span>

      <span v-if="currentLanguage === 'rw'">
        Murakaza neza mu Mujyi wa Kigali
      </span>

    </h1>

    <p class="text-lg md:text-xl text-blue-300 max-w-3xl leading-9">

      <span v-if="currentLanguage === 'en'">
        Rwanda’s clean, vibrant, and modern capital city.
      </span>

      <span v-if="currentLanguage === 'fr'">
        La capitale moderne, propre et dynamique du Rwanda.
      </span>

      <span v-if="currentLanguage === 'rw'">
        Umurwa mukuru w'u Rwanda urangwa n'isuku n'iterambere.
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
        src="/city.jpg"
        class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-5xl font-bold text-blue-900 mb-8">

        <span v-if="currentLanguage === 'en'">
          About Kigali
        </span>

        <span v-if="currentLanguage === 'fr'">
          À propos de Kigali
        </span>

        <span v-if="currentLanguage === 'rw'">
          Ibyerekeye Kigali
        </span>

      </h2>

      <p class="text-gray-700 text-lg leading-9">

        <span v-if="currentLanguage === 'en'">
          Kigali is one of Africa’s cleanest and safest cities.
          Known for its modern lifestyle, beautiful hills,
          luxury hotels, business centers, nightlife,
          and rich culture, Kigali offers unforgettable experiences
          for visitors from around the world.
          <br /><br />
          From art galleries and markets to restaurants and
          conference centers, Kigali blends tradition and modernity beautifully.
        </span>

        <span v-if="currentLanguage === 'fr'">
          Kigali est l'une des villes les plus propres et sûres d'Afrique,
          célèbre pour sa modernité, sa culture et sa vie dynamique.
        </span>

        <span v-if="currentLanguage === 'rw'">
          Kigali izwi nk'umujyi usukuye kandi utekanye,
          ufite iterambere, umuco n'ubuzima bugezweho.
        </span>

      </p>

      <button
        class="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
      >

        <span v-if="currentLanguage === 'en'">
          Explore Kigali
        </span>

        <span v-if="currentLanguage === 'fr'">
          Explorer Kigali
        </span>

        <span v-if="currentLanguage === 'rw'">
          Sura Kigali
        </span>

      </button>

    </div>

  </div>

</section>

<!-- WHY VISIT -->
<section class="bg-slate-100 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-blue-900 mb-16">

      <span v-if="currentLanguage === 'en'">
        Why Visit Kigali?
      </span>

      <span v-if="currentLanguage === 'fr'">
        Pourquoi visiter Kigali ?
      </span>

      <span v-if="currentLanguage === 'rw'">
        Kuki wasura Kigali?
      </span>

    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- CARD 1 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-pink-500
               transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >

        <img
          src="/night.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <span class="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
            Nightlife
          </span>

          <h2 class="text-2xl font-bold text-pink-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Kigali Nightlife
            </span>

            <span v-if="currentLanguage === 'fr'">
              Vie Nocturne
            </span>

            <span v-if="currentLanguage === 'rw'">
              Ubuzima bwo Nijoro
            </span>

          </h2>

          <p class="text-gray-600 leading-7">

            <span v-if="currentLanguage === 'en'">
              Experience Kigali’s restaurants, rooftop lounges, and nightlife.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Découvrez les restaurants et la vie nocturne de Kigali.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Menya ubuzima bwo nijoro n'ibyiza bya Kigali.
            </span>

          </p>

        </div>

      </div>

      <!-- CARD 2 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-500
               transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >

        <img
          src="/H.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <span class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            Hotels
          </span>

          <h2 class="text-2xl font-bold text-indigo-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Luxury Hotels
            </span>

            <span v-if="currentLanguage === 'fr'">
              Hôtels de Luxe
            </span>

            <span v-if="currentLanguage === 'rw'">
              Amahoteri meza
            </span>

          </h2>

          <p class="text-gray-600 leading-7">

            <span v-if="currentLanguage === 'en'">
              Stay in world-class hotels with amazing city views.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Profitez des hôtels modernes avec de belles vues.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Ruhukira muri hoteli zigezweho kandi nziza.
            </span>

          </p>

        </div>

      </div>

      <!-- CARD 3 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-purple-500
               transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >

        <img
          src="/culture.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <span class="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            Culture
          </span>

          <h2 class="text-2xl font-bold text-purple-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Art & Culture
            </span>

            <span v-if="currentLanguage === 'fr'">
              Art et Culture
            </span>

            <span v-if="currentLanguage === 'rw'">
              Ubuhanzi n'Umuco
            </span>

          </h2>

          <p class="text-gray-600 leading-7">

            <span v-if="currentLanguage === 'en'">
              Discover galleries, museums, and Rwanda’s vibrant culture.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Découvrez les galeries et la culture rwandaise.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Menya ubuhanzi n'umuco nyarwanda.
            </span>

          </p>

        </div>

      </div>

      <!-- CARD 4 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-blue-500
               transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >

        <img
          src="/business.jpg"
          class="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <span class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Business
          </span>

          <h2 class="text-2xl font-bold text-blue-700 mt-5 mb-4">

            <span v-if="currentLanguage === 'en'">
              Business Hub
            </span>

            <span v-if="currentLanguage === 'fr'">
              Centre des Affaires
            </span>

            <span v-if="currentLanguage === 'rw'">
              Ubucuruzi
            </span>

          </h2>

          <p class="text-gray-600 leading-7">

            <span v-if="currentLanguage === 'en'">
              Kigali is a growing center for business and innovation in Africa.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Kigali est un centre moderne d’affaires et d’innovation.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Kigali ni umujyi w'iterambere n'ubucuruzi.
            </span>

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- FEATURED ATTRACTIONS -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-blue-900 mb-16">

      <span v-if="currentLanguage === 'en'">
        Featured Attractions
      </span>

      <span v-if="currentLanguage === 'fr'">
        Attractions Populaires
      </span>

      <span v-if="currentLanguage === 'rw'">
        Ahantu Hazwi
      </span>

    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- ATTRACTION 1 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
               transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <img
          src="/kcc.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Kigali Convention Centre
          </h2>

          <p class="text-gray-600 leading-7">
            Kigali’s iconic business and conference center with stunning architecture.
          </p>

        </div>

      </div>

      <!-- ATTRACTION 2 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
               transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <img
          src="/memorial.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Kigali Genocide Memorial
          </h2>

          <p class="text-gray-600 leading-7">
            Learn about Rwanda’s history and journey toward unity and peace.
          </p>

        </div>

      </div>

      <!-- ATTRACTION 3 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
               transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <img
          src="/market.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Kimironko Market
          </h2>

          <p class="text-gray-600 leading-7">
            Explore colorful local markets filled with fresh food and crafts.
          </p>

        </div>

      </div>

      <!-- ATTRACTION 4 -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200
               transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <img
          src="/art.jpg"
          class="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Inema Arts Center
          </h2>

          <p class="text-gray-600 leading-7">
            Discover modern African art and creative exhibitions in Kigali.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- CTA SECTION -->
<section class="bg-blue-900 py-20 px-8 text-center text-white">

  <h1 class="text-3xl font-bold mb-8">

    <span v-if="currentLanguage === 'en'">
      Ready to Discover Kigali?
    </span>

    <span v-if="currentLanguage === 'fr'">
      Prêt à découvrir Kigali ?
    </span>

    <span v-if="currentLanguage === 'rw'">
      Witeguye gusura Kigali?
    </span>

  </h1>

  <button
    class="bg-white text-blue-900 font-bold px-10 py-4 rounded-full
           hover:bg-blue-100 transition duration-300 shadow-xl"
  >

    <span v-if="currentLanguage === 'en'">
      Start Your Journey
    </span>

    <span v-if="currentLanguage === 'fr'">
      Commencer le voyage
    </span>

    <span v-if="currentLanguage === 'rw'">
      Tangira urugendo
    </span>

  </button>

</section>

</template>