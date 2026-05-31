<script setup>
import { currentLanguage } from '../store/language'

const galleryVideos = [
  {
    video: 'https://www.youtube.com/embed/Zj3Jdj53cSo?rel=0&modestbranding=1',
    title: {
      en: 'Gorilla Trekking',
      fr: 'Randonnée des Gorilles',
      rw: 'Gutembera kureba Ingagi'
    },
    desc: {
      en: 'Experience unforgettable gorilla trekking adventures.',
      fr: 'Découvrez une aventure incroyable avec les gorilles.',
      rw: 'Sura ingagi mu rugendo rwiza cyane.'
    }
  },

  {
    video: 'https://www.youtube.com/embed/A-igeykFFIc?rel=0&modestbranding=1',
    title: {
      en: 'Safari Adventure',
      fr: 'Aventure Safari',
      rw: 'Ubukerarugendo bwa Safari'
    },
    desc: {
      en: 'Explore Rwanda wildlife and safari experiences.',
      fr: 'Découvrez les safaris et la faune du Rwanda.',
      rw: 'Reba inyamaswa zitandukanye muri safari.'
    }
  },

  {
    video: 'https://www.youtube.com/embed/Tdfdjhg22J0?rel=0&modestbranding=1',
    title: {
      en: 'Lake Kivu',
      fr: 'Lac Kivu',
      rw: 'Ikiyaga cya Kivu'
    },
    desc: {
      en: 'Relax and enjoy the beauty of Lake Kivu.',
      fr: 'Détendez-vous et profitez de la beauté du Lac Kivu.',
      rw: 'Iruhukire kandi wishimire ubwiza bwa Kivu.'
    }
  },

  {
    video: 'https://www.youtube.com/embed/lDzRTZdq_bo?rel=0&modestbranding=1',
    title: {
      en: 'Rwandan Culture',
      fr: 'Culture Rwandaise',
      rw: 'Umuco Nyarwanda'
    },
    desc: {
      en: 'Enjoy traditional dances and cultural heritage.',
      fr: 'Découvrez les danses et traditions culturelles.',
      rw: 'Menya imbyino n’umuco nyarwanda.'
    }
  }
]
</script>

<template>

<section class="bg-gradient-to-b from-white to-slate-100 min-h-screen py-20 px-8">

  <!-- TITLE -->
  <h1 class="text-5xl font-bold text-center text-blue-900 mb-16">

    <span v-if="currentLanguage === 'en'">
      Gallery Videos
    </span>

    <span v-if="currentLanguage === 'fr'">
      Vidéos de la Galerie
    </span>

    <span v-if="currentLanguage === 'rw'">
      Amashusho yo muri Gallery
    </span>

  </h1>

  <!-- VIDEOS GRID -->
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    <div
      v-for="video in galleryVideos"
      :key="video.title.en"
      class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >

      <!-- VIDEO -->
      <div class="relative">

        <iframe
          :src="video.video"
          class="w-full h-72"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      </div>

      <!-- CONTENT -->
      <div class="p-6">

        <h2 class="text-2xl font-bold text-blue-800 mb-4">
          {{ video.title[currentLanguage] }}
        </h2>

        <p class="text-gray-600 leading-7">
          {{ video.desc[currentLanguage] }}
        </p>

      </div>

    </div>

  </div>

</section>

</template>