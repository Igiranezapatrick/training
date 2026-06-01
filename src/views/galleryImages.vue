<script setup>
import { ref } from 'vue'
import { currentLanguage } from '../store/language'

const activeImage = ref(null)

const galleryImages = [
  {
    image: '/images/gorilla.jpg',
    extraImages: [
      '/images/gorilla.jpg',
      '/images/volcano.jpg'
    ],

    title: {
      en: 'Mountain Gorillas',
      fr: 'Gorilles des Montagnes',
      rw: 'Ingagi zo mu Birunga'
    },

    desc: {
      en: 'Meet the famous mountain gorillas hidden in Rwanda’s misty forests.',
      fr: 'Découvrez les célèbres gorilles dans les forêts brumeuses du Rwanda.',
      rw: 'Sura ingagi zizwi cyane mu mashyamba y’u Rwanda.'
    },

    more: {
      en: 'Mountain gorillas are one of Rwanda’s greatest treasures and attract visitors from around the world.',
      fr: 'Les gorilles attirent des visiteurs du monde entier.',
      rw: 'Ingagi zikurura ba mukerarugendo benshi ku isi.'
    }
  },

  {
    image: '/images/akagera.jpg',
    extraImages: [
      '/images/akagera.jpg',
      '/images/kivu.jpg'
    ],

    title: {
      en: 'Akagera National Park',
      fr: 'Parc National Akagera',
      rw: 'Pariki y’Akagera'
    },

    desc: {
      en: 'Enjoy wildlife safaris filled with lions, elephants, and giraffes.',
      fr: 'Profitez des safaris avec lions, éléphants et girafes.',
      rw: 'Reba intare, inzovu n’inyamaswa nyinshi muri safari.'
    },

    more: {
      en: 'Akagera protects Rwanda’s wildlife and offers unforgettable safari adventures.',
      fr: 'Akagera protège la faune du Rwanda.',
      rw: 'Akagera irinda inyamaswa zo mu Rwanda.'
    }
  },

  {
    image: '/images/kivu.jpg',
    extraImages: [
      '/images/kivu.jpg',
      '/images/culture.jpg'
    ],

    title: {
      en: 'Lake Kivu',
      fr: 'Lac Kivu',
      rw: 'Ikiyaga cya Kivu'
    },

    desc: {
      en: 'Relax beside the peaceful blue waters of beautiful Lake Kivu.',
      fr: 'Détendez-vous près des magnifiques eaux du Lac Kivu.',
      rw: 'Iruhukire ku mazi meza y’Ikiyaga cya Kivu.'
    },

    more: {
      en: 'Lake Kivu is perfect for relaxation, boat rides, and sunset experiences.',
      fr: 'Le Lac Kivu est parfait pour la détente.',
      rw: 'Kivu ni ahantu heza ho kuruhukira.'
    }
  },

  {
    image: '/images/kigali.jpg',
    extraImages: [
      '/images/kigali2.jpg',
      '/images/culture.jpg'
    ],

    title: {
      en: 'Kigali City',
      fr: 'Ville de Kigali',
      rw: 'Umujyi wa Kigali'
    },

    desc: {
      en: 'Explore the clean, modern, and vibrant capital city of Rwanda.',
      fr: 'Découvrez la capitale moderne et propre du Rwanda.',
      rw: 'Tembera muri Kigali, umujyi mwiza kandi ugezweho.'
    },

    more: {
      en: 'Kigali is known for cleanliness, innovation, safety, and vibrant city life.',
      fr: 'Kigali est connue pour sa propreté et son innovation.',
      rw: 'Kigali izwiho isuku n’iterambere.'
    }
  },

  {
    image: '/images/volcano.jpg',
    extraImages: [
      '/images/volcano.jpg',
      '/images/gorilla.jpg'
    ],

    title: {
      en: 'Volcanoes',
      fr: 'Volcans',
      rw: 'Ibirunga'
    },

    desc: {
      en: 'Adventure through Rwanda’s breathtaking volcanic mountains.',
      fr: 'Explorez les magnifiques montagnes volcaniques du Rwanda.',
      rw: 'Tembera mu birunga byiza cyane by’u Rwanda.'
    },

    more: {
      en: 'The volcanoes create stunning hiking adventures and scenic landscapes.',
      fr: 'Les volcans offrent des aventures incroyables.',
      rw: 'Ibirunga bitanga uburambe budasanzwe.'
    }
  },

  {
    image: '/images/culture.jpg',
    extraImages: [
      '/images/culture.jpg',
      '/images/kigali.jpg'
    ],

    title: {
      en: 'Rwandan Culture',
      fr: 'Culture Rwandaise',
      rw: 'Umuco Nyarwanda'
    },

    desc: {
      en: 'Experience traditional dances, drums, and Rwandan heritage.',
      fr: 'Découvrez les danses, tambours et traditions rwandaises.',
      rw: 'Menya imbyino, ingoma n’umuco nyarwanda.'
    },

    more: {
      en: 'Rwandan culture connects visitors with traditions, music, and community values.',
      fr: 'La culture rwandaise révèle les traditions locales.',
      rw: 'Umuco nyarwanda werekana amateka n’imigenzo.'
    }
  }
]
</script>

<template>

<section class="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-20 px-4 md:px-8">

  <!-- TITLE -->
  <h1 class="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">

    <span v-if="currentLanguage === 'en'">
      Gallery Images
    </span>

    <span v-else-if="currentLanguage === 'fr'">
      Images de la Galerie
    </span>

    <span v-else>
      Amafoto yo muri Gallery
    </span>

  </h1>

  <!-- DESCRIPTION -->
  <p class="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-base md:text-lg leading-8 px-2">

    <span v-if="currentLanguage === 'en'">
      Discover Rwanda through landscapes, wildlife, culture, and adventure.
    </span>

    <span v-else-if="currentLanguage === 'fr'">
      Découvrez le Rwanda à travers ses paysages et sa culture.
    </span>

    <span v-else>
      Menya ubwiza bw’u Rwanda mu mafoto y’ahantu nyaburanga.
    </span>

  </p>

  <!-- GRID -->
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

    <div
      v-for="(item, index) in galleryImages"
      :key="item.title.en"
      class="bg-white rounded-3xl overflow-hidden shadow-xl
             hover:-translate-y-3 hover:shadow-green-200
             transition duration-500 group"
    >

      <!-- IMAGE -->
      <div class="w-full aspect-[4/3] overflow-hidden">

        <img
          :src="item.image"
          class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      <!-- CONTENT -->
      <div class="p-5 md:p-6">

        <h2 class="text-xl md:text-2xl font-bold text-green-800 mb-3">
          {{ item.title[currentLanguage] }}
        </h2>

        <p class="text-gray-600 leading-7 text-sm md:text-base">
          {{ item.desc[currentLanguage] }}
        </p>

        <!-- BUTTON -->
        <button
          @click="activeImage === index ? activeImage = null : activeImage = index"
          class="mt-5 bg-green-700 text-white px-5 py-2 rounded-full
                 hover:bg-green-800 transition duration-300 shadow-md
                 hover:scale-105"
        >

          {{
            currentLanguage === 'en'
              ? 'Explore More ✨'
              : currentLanguage === 'fr'
              ? 'Explorer Plus ✨'
              : 'Menya Byinshi ✨'
          }}

        </button>

        <!-- EXPANDABLE SECTION -->
        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 max-h-96"
          leave-to-class="opacity-0 max-h-0"
        >

          <div
            v-if="activeImage === index"
            class="mt-6 overflow-hidden"
          >

            <!-- MORE TEXT -->
            <div class="bg-green-50 border border-green-100 rounded-2xl p-4">

              <p class="text-gray-700 leading-7 text-sm">
                {{ item.more[currentLanguage] }}
              </p>

            </div>

            <!-- EXTRA IMAGES -->
            <div class="grid grid-cols-2 gap-3 mt-4">

              <img
                v-for="extra in item.extraImages"
                :key="extra"
                :src="extra"
                class="h-28 w-full object-cover rounded-2xl
                       hover:scale-105 transition duration-300"
              />

            </div>

          </div>

        </transition>

      </div>

    </div>

  </div>

</section>

</template>