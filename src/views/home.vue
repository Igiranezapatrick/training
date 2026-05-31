<script setup>
import { ref } from 'vue'

import heroImage from '../assets/image.png'
import cultureImg from '../assets/culture.jpg'
import natureImg from '../assets/nature.png'
import progressImg from '../assets/KCC.jpg'

import { currentLanguage } from '../store/language'
</script>

<template>

  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

    <!-- HERO CONTENT -->
    <div class="relative text-center px-6 max-w-7xl mx-auto z-10">

      <!-- ENGLISH -->
      <div v-if="currentLanguage === 'en'">

        <p class="uppercase tracking-[6px] text-green-300 mb-4 text-sm">
          Discover Africa's Hidden Gem
        </p>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
          Welcome to Rwanda
        </h1>

        <p class="text-xl md:text-2xl text-green-200 mb-14 max-w-3xl mx-auto leading-9">
          The Land of a Thousand Hills, where breathtaking landscapes,
          vibrant culture, and unforgettable adventures meet.
        </p>

      </div>

      <!-- FRENCH -->
      <div v-if="currentLanguage === 'fr'">

        <p class="uppercase tracking-[6px] text-green-300 mb-4 text-sm">
          Découvrez le joyau caché de l'Afrique
        </p>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
          Bienvenue au Rwanda
        </h1>

        <p class="text-xl md:text-2xl text-green-200 mb-14 max-w-3xl mx-auto leading-9">
          Le Pays des Mille Collines où paysages magnifiques,
          culture vibrante et aventures inoubliables se rencontrent.
        </p>

      </div>

      <!-- KINYARWANDA -->
      <div v-if="currentLanguage === 'rw'">

        <p class="uppercase tracking-[6px] text-green-300 mb-4 text-sm">
          Menya ubwiza bw'u Rwanda
        </p>

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
          Murakaza neza mu Rwanda
        </h1>

        <p class="text-xl md:text-2xl text-green-200 mb-14 max-w-3xl mx-auto leading-9">
          Igihugu cy'Imisozi Igihumbi gifite ubwiza bwa kamere,
          umuco ukize n'ubukerarugendo budasanzwe.
        </p>

      </div>

      <!-- FEATURE CARDS -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        <!-- CULTURE -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl
                 transition-all duration-500 hover:-translate-y-3 hover:shadow-green-900/40"
        >

          <div class="overflow-hidden rounded-2xl mb-5">
            <img
              :src="cultureImg"
              class="w-full h-52 object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <h3 class="text-2xl font-bold text-green-300 mb-3">

            <span v-if="currentLanguage === 'en'">Culture</span>
            <span v-if="currentLanguage === 'fr'">Culture</span>
            <span v-if="currentLanguage === 'rw'">Umuco</span>

          </h3>

          <p class="text-gray-200 leading-7">

            <span v-if="currentLanguage === 'en'">
              Rich traditions, traditional dances, storytelling and deep community values.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Traditions riches, danses culturelles et valeurs communautaires fortes.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Umuco ukize, imbyino gakondo n'indangagaciro nyarwanda.
            </span>

          </p>

        </div>

        <!-- NATURE -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl
                 transition-all duration-500 hover:-translate-y-3 hover:shadow-green-900/40"
        >

          <div class="overflow-hidden rounded-2xl mb-5">
            <img
              :src="natureImg"
              class="w-full h-52 object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <h3 class="text-2xl font-bold text-green-300 mb-3">

            <span v-if="currentLanguage === 'en'">Nature</span>
            <span v-if="currentLanguage === 'fr'">Nature</span>
            <span v-if="currentLanguage === 'rw'">Kamere</span>

          </h3>

          <p class="text-gray-200 leading-7">

            <span v-if="currentLanguage === 'en'">
              Discover majestic mountain gorillas, volcanoes and breathtaking green landscapes.
            </span>

            <span v-if="currentLanguage === 'fr'">
              Découvrez les gorilles majestueux et les magnifiques paysages verdoyants.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Reba ingagi zo mu birunga n'ubwiza bw'ibidukikije nyaburanga.
            </span>

          </p>

        </div>

        <!-- PROGRESS -->
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl
                 transition-all duration-500 hover:-translate-y-3 hover:shadow-green-900/40"
        >

          <div class="overflow-hidden rounded-2xl mb-5">
            <img
              :src="progressImg"
              class="w-full h-52 object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <h3 class="text-2xl font-bold text-green-300 mb-3">

            <span v-if="currentLanguage === 'en'">Progress</span>
            <span v-if="currentLanguage === 'fr'">Progrès</span>
            <span v-if="currentLanguage === 'rw'">Iterambere</span>

          </h3>

          <p class="text-gray-200 leading-7">

            <span v-if="currentLanguage === 'en'">
              One of Africa’s cleanest, safest and fastest-growing nations.
            </span>

            <span v-if="currentLanguage === 'fr'">
              L'une des nations les plus propres et sûres d'Afrique.
            </span>

            <span v-if="currentLanguage === 'rw'">
              Igihugu gifite isuku, umutekano n'iterambere ryihuse muri Afurika.
            </span>

          </p>

        </div>

      </div>

    </div>

  </section>

  <!-- ORIGIN SECTION -->
  <section class="bg-white py-24 px-6">

    <div class="max-w-5xl mx-auto">

      <!-- ENGLISH -->
      <div v-if="currentLanguage === 'en'">

        <p class="uppercase tracking-[4px] text-green-700 text-sm mb-4">
          History & Identity
        </p>

        <h1 class="text-5xl font-bold text-green-900 mb-10 leading-tight">
          The Origin of Rwanda
        </h1>

        <p class="text-gray-700 text-xl leading-10">
          The name “Rwanda” is believed to come from the Kinyarwanda word
          “Kwanda,” meaning “to expand” or “to grow.”

          <br /><br />

          Long ago, the ancient Kingdom of Rwanda expanded across beautiful
          hills and valleys under the leadership of kings known as “Abami.”

          <br /><br />

          These kings united communities, protected traditions and preserved
          Rwanda’s rich culture through storytelling, traditional dances,
          cattle keeping and strong family values.

          <br /><br />

          Today, Rwanda is admired around the world for its natural beauty,
          wildlife, cleanliness, safety and rapid transformation.
        </p>

      </div>

      <!-- FRENCH -->
      <div v-if="currentLanguage === 'fr'">

        <p class="uppercase tracking-[4px] text-green-700 text-sm mb-4">
          Histoire & Identité
        </p>

        <h1 class="text-5xl font-bold text-green-900 mb-10 leading-tight">
          L'Origine du Rwanda
        </h1>

        <p class="text-gray-700 text-xl leading-10">
          Le nom « Rwanda » provient du mot kinyarwanda « Kwanda »,
          qui signifie « grandir » ou « s'étendre ».

          <br /><br />

          L'ancien Royaume du Rwanda s'est développé à travers les collines
          et vallées sous la direction des rois appelés « Abami ».

          <br /><br />

          Aujourd'hui, le Rwanda est admiré pour sa beauté naturelle,
          sa culture, sa sécurité et son développement rapide.
        </p>

      </div>

      <!-- KINYARWANDA -->
      <div v-if="currentLanguage === 'rw'">

        <p class="uppercase tracking-[4px] text-green-700 text-sm mb-4">
          Amateka y'u Rwanda
        </p>

        <h1 class="text-5xl font-bold text-green-900 mb-10 leading-tight">
          Inkomoko y'u Rwanda
        </h1>

        <p class="text-gray-700 text-xl leading-10">
          Izina “Rwanda” rikomoka ku ijambo “Kwanda”
          risobanura kwaguka cyangwa gukura.

          <br /><br />

          U Rwanda rwa kera rwagutse mu misozi n'ibibaya
          biyobowe n'abami bazwi nka “Abami”.

          <br /><br />

          U Rwanda ruzwi kubera ubwiza bwa kamere,
          umutekano, isuku n'iterambere ryihuse.
        </p>

      </div>

    </div>

  </section>

</template>