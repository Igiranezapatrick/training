<script setup>
import { ref } from 'vue'

import heroImage from '../assets/image.png'
import cultureImg from '../assets/culture.jpg'
import natureImg from '../assets/nature.png'
import progressImg from '../assets/KCC.jpg'

// Shared language state
import { currentLanguage } from '../store/language'
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="bg-black/40 absolute inset-0"></div>

    <div class="relative text-center px-4 max-w-6xl mx-auto z-10">

      <div v-if="currentLanguage === 'en'">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Welcome to Rwanda</h1>
        <p class="text-lg md:text-xl mb-12 text-green-300">The Land of a Thousand Hills</p>
      </div>

      <div v-if="currentLanguage === 'fr'">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Bienvenue au Rwanda</h1>
        <p class="text-lg md:text-xl mb-12 text-green-300">Le Pays des Mille Collines</p>
      </div>

      <div v-if="currentLanguage === 'rw'">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Murakaza neza mu Rwanda</h1>
        <p class="text-lg md:text-xl mb-12 text-green-300">Igihugu cy'Imisozi Igihumbi</p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <!-- CULTURE -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl
                 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
        >
          <img
            :src="cultureImg"
            class="w-full h-44 object-cover rounded-xl mb-4 transition-transform duration-500 hover:scale-105"
          />

          <h3 class="text-xl font-semibold text-green-300 mb-2">
            <span v-if="currentLanguage === 'en'">Culture</span>
            <span v-if="currentLanguage === 'fr'">Culture</span>
            <span v-if="currentLanguage === 'rw'">Umuco</span>
          </h3>

          <p class="text-sm text-gray-200 leading-6">
            <span v-if="currentLanguage === 'en'">
              Rich traditions, vibrant dances, and deep community values.
            </span>
            <span v-if="currentLanguage === 'fr'">
              Traditions riches, danses vibrantes et valeurs communautaires profondes.
            </span>
            <span v-if="currentLanguage === 'rw'">
              Umuco ukize, imbyino gakondo n'indangagaciro z'umuryango.
            </span>
          </p>
        </div>

        <!-- NATURE -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl
                 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
        >
          <img
            :src="natureImg"
            class="w-full h-44 object-cover rounded-xl mb-4 transition-transform duration-500 hover:scale-105"
          />

          <h3 class="text-xl font-semibold text-green-300 mb-2">
            <span v-if="currentLanguage === 'en'">Nature</span>
            <span v-if="currentLanguage === 'fr'">Nature</span>
            <span v-if="currentLanguage === 'rw'">Kamere</span>
          </h3>

          <p class="text-sm text-gray-200 leading-6">
            <span v-if="currentLanguage === 'en'">
              Majestic mountain gorillas and breathtaking green landscapes.
            </span>
            <span v-if="currentLanguage === 'fr'">
              Gorilles majestueux et paysages verdoyants.
            </span>
            <span v-if="currentLanguage === 'rw'">
              Ingagi zo mu misozi n'ubwiza bw'ibidukikije.
            </span>
          </p>
        </div>

        <!-- PROGRESS -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl
                 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
        >
          <img
            :src="progressImg"
            class="w-full h-44 object-cover rounded-xl mb-4 transition-transform duration-500 hover:scale-105"
          />

          <h3 class="text-xl font-semibold text-green-300 mb-2">
            <span v-if="currentLanguage === 'en'">Progress</span>
            <span v-if="currentLanguage === 'fr'">Progrès</span>
            <span v-if="currentLanguage === 'rw'">Iterambere</span>
          </h3>

          <p class="text-sm text-gray-200 leading-6">
            <span v-if="currentLanguage === 'en'">
              One of Africa’s cleanest, safest, and fastest-growing nations.
            </span>
            <span v-if="currentLanguage === 'fr'">
              Une des nations les plus propres et sûres d’Afrique.
            </span>
            <span v-if="currentLanguage === 'rw'">
              Igihugu gifite isuku n'iterambere ryihuse.
            </span>
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Origin Section -->
  <section class="max-w-5xl mx-auto px-6 py-16">

    <!-- ENGLISH -->
    <div v-if="currentLanguage === 'en'">
      <h1 class="text-3xl font-bold text-green-800 mb-6">
        The Origin of Rwanda
      </h1>

      <p class="text-gray-700 text-lg leading-8">
        The name “Rwanda” is believed to come from the Kinyarwanda word
        “Kwanda,” meaning “to expand” or “to grow.”
        Long ago, the ancient Kingdom of Rwanda expanded across the
        beautiful hills and valleys under the leadership of kings
        known as “Abami.”

        <br /><br />

        These kings united communities, protected traditions,
        and helped preserve Rwanda’s rich culture through storytelling,
        traditional dances, cattle keeping, and strong family values.

        <br /><br />

        Today, Rwanda is known around the world as the
        “Land of a Thousand Hills,” admired for its natural beauty,
        wildlife, cleanliness, safety, and rapid development.
        Visitors continue to discover a country filled with peace,
        culture, adventure, and welcoming people.
      </p>
    </div>

    <!-- FRENCH -->
    <div v-if="currentLanguage === 'fr'">
      <h1 class="text-3xl font-bold text-green-800 mb-6">
        L'Origine du Rwanda
      </h1>

      <p class="text-gray-700 text-lg leading-8">
        Le nom « Rwanda » provient du mot kinyarwanda
        « Kwanda », qui signifie « grandir » ou « s'étendre ».

        <br /><br />

        L'ancien Royaume du Rwanda s'est développé à travers
        les collines et vallées sous la direction des rois appelés « Abami ».

        <br /><br />

        Aujourd'hui, le Rwanda est connu comme le
        « Pays des Mille Collines », admiré pour sa beauté naturelle,
        sa culture, sa sécurité et son développement rapide.
      </p>
    </div>

    <!-- KINYARWANDA -->
    <div v-if="currentLanguage === 'rw'">
      <h1 class="text-3xl font-bold text-green-800 mb-6">
        Inkomoko y'u Rwanda
      </h1>

      <p class="text-gray-700 text-lg leading-8">
        Izina “Rwanda” rikomoka ku ijambo “Kwanda”
        risobanura kwaguka cyangwa gukura.

        <br /><br />

        U Rwanda rwa kera rwagutse mu misozi n'ibibaya
        biyobowe n'abami bazwi nka “Abami”.

        <br /><br />

        Abami bafashije abaturage kubungabunga umuco,
        amateka n'indangagaciro nyarwanda.

        <br /><br />

        Uyu munsi u Rwanda ruzwi nk'Igihugu cy'Imisozi Igihumbi,
        kubera ubwiza bwacyo, umutekano,
        isuku n'iterambere ryihuse.
      </p>
    </div>

  </section>

</template>