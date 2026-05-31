<script setup>
import { currentLanguage } from '../store/language'

const galleryImages = [
  {
    image: '/images/gorilla.jpg',
    title: {
      en: 'Mountain Gorillas',
      fr: 'Gorilles des Montagnes',
      rw: 'Ingagi zo mu Birunga'
    },
    desc: {
      en: 'Meet the famous mountain gorillas hidden in Rwanda’s misty forests.',
      fr: 'Découvrez les célèbres gorilles dans les forêts brumeuses du Rwanda.',
      rw: 'Sura ingagi zizwi cyane mu mashyamba y’u Rwanda.'
    }
  },

  {
    image: '/images/akagera.jpg',
    title: {
      en: 'Akagera National Park',
      fr: 'Parc National Akagera',
      rw: 'Pariki y’Akagera'
    },
    desc: {
      en: 'Enjoy wildlife safaris filled with lions, elephants, and giraffes.',
      fr: 'Profitez des safaris avec lions, éléphants et girafes.',
      rw: 'Reba intare, inzovu n’inyamaswa nyinshi muri safari.'
    }
  },

  {
    image: '/images/kivu.jpg',
    title: {
      en: 'Lake Kivu',
      fr: 'Lac Kivu',
      rw: 'Ikiyaga cya Kivu'
    },
    desc: {
      en: 'Relax beside the peaceful blue waters of beautiful Lake Kivu.',
      fr: 'Détendez-vous près des magnifiques eaux du Lac Kivu.',
      rw: 'Iruhukire ku mazi meza y’Ikiyaga cya Kivu.'
    }
  },

  {
    image: '/images/kigali.jpg',
    title: {
      en: 'Kigali City',
      fr: 'Ville de Kigali',
      rw: 'Umujyi wa Kigali'
    },
    desc: {
      en: 'Explore the clean, modern, and vibrant capital city of Rwanda.',
      fr: 'Découvrez la capitale moderne et propre du Rwanda.',
      rw: 'Tembera muri Kigali, umujyi mwiza kandi ugezweho.'
    }
  },

  {
    image: '/images/volcano.jpg',
    title: {
      en: 'Volcanoes',
      fr: 'Volcans',
      rw: 'Ibirunga'
    },
    desc: {
      en: 'Adventure through Rwanda’s breathtaking volcanic mountains.',
      fr: 'Explorez les magnifiques montagnes volcaniques du Rwanda.',
      rw: 'Tembera mu birunga byiza cyane by’u Rwanda.'
    }
  },

  {
    image: '/images/culture.jpg',
    title: {
      en: 'Rwandan Culture',
      fr: 'Culture Rwandaise',
      rw: 'Umuco Nyarwanda'
    },
    desc: {
      en: 'Experience traditional dances, drums, and Rwandan heritage.',
      fr: 'Découvrez les danses, tambours et traditions rwandaises.',
      rw: 'Menya imbyino, ingoma n’umuco nyarwanda.'
    }
  }
]
</script>

<template>

<section class="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-20 px-4 md:px-8">

  <!-- TITLE -->
  <h1 class="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">
    <span v-if="currentLanguage === 'en'">Gallery Images</span>
    <span v-else-if="currentLanguage === 'fr'">Images de la Galerie</span>
    <span v-else>Amafoto yo muri Gallery</span>
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
      v-for="item in galleryImages"
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

        <button
          class="mt-5 bg-green-700 text-white px-5 py-2 rounded-full
                 hover:bg-green-800 transition duration-300 shadow-md"
        >
          Explore More ✨
        </button>

      </div>

    </div>

  </div>

</section>

</template>