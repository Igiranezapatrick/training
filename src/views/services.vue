<script setup>
import { currentLanguage } from '../store/language'

const services = [
  {
    image: '/mountain.jpg',

    title: {
      en: 'Gorilla Trekking',
      fr: 'Randonnée des Gorilles',
      rw: 'Gutembera kureba Ingagi'
    },

    desc: {
      en: 'Experience unforgettable adventures with Rwanda’s famous mountain gorillas in Volcanoes National Park.',
      fr: 'Vivez une aventure inoubliable avec les célèbres gorilles des montagnes du Rwanda.',
      rw: 'Sura ingagi zo mu birunga maze ugire ibihe bitazibagirana.'
    }
  },

  {
    image: '/town.jpg',

    title: {
      en: 'City Tours',
      fr: 'Visites de la Ville',
      rw: 'Gutembera Umujyi'
    },

    desc: {
      en: 'Discover Kigali’s modern lifestyle, clean streets, museums, and vibrant culture.',
      fr: 'Découvrez Kigali avec ses rues propres, ses musées et sa culture dynamique.',
      rw: 'Menya Kigali n’imibereho yayo igezweho n’umuco wayo.'
    }
  },

  {
    image: '/Lac.jpg',

    title: {
      en: 'Lake Kivu Experience',
      fr: 'Expérience du Lac Kivu',
      rw: 'Ubukerarugendo bwa Kivu'
    },

    desc: {
      en: 'Relax on beautiful beaches, enjoy boat rides, and experience peaceful sunsets.',
      fr: 'Profitez des plages magnifiques et des couchers de soleil paisibles.',
      rw: 'Iruhukire ku nkengero za Kivu unishimire ubwato n’izuba rirenga.'
    }
  },

  {
    image: '/amaraba.jpg',

    title: {
      en: 'Cultural Experiences',
      fr: 'Expériences Culturelles',
      rw: 'Umuco Nyarwanda'
    },

    desc: {
      en: 'Enjoy traditional dances, local foods, storytelling, and Rwandan hospitality.',
      fr: 'Découvrez les danses traditionnelles et l’hospitalité rwandaise.',
      rw: 'Menya imbyino gakondo n’ubwakiranyi bw’Abanyarwanda.'
    }
  },

  {
    image: '/thousand.jpg',

    title: {
      en: 'Nature Adventures',
      fr: 'Aventures Naturelles',
      rw: 'Ubukerarugendo bwa Kamere'
    },

    desc: {
      en: 'Explore Rwanda’s breathtaking hills, forests, waterfalls, and wildlife.',
      fr: 'Explorez les collines, forêts et cascades magnifiques du Rwanda.',
      rw: 'Sura imisozi, amashyamba n’ibyiza nyaburanga by’u Rwanda.'
    }
  },

  {
    image: '/rw.jpg',

    title: {
      en: 'Hotel & Travel Booking',
      fr: 'Réservation Hôtel & Voyage',
      rw: 'Gufasha mu Ngendo na Hoteli'
    },

    desc: {
      en: 'We help visitors find comfortable hotels, transport, and travel guides.',
      fr: 'Nous aidons les visiteurs à trouver des hôtels et des guides touristiques.',
      rw: 'Dufasha abakerarugendo kubona hoteli n’abayobora ingendo.'
    }
  }
]
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative min-h-screen bg-cover bg-center"
  style="background-image: url('/wow.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- Content -->
  <div class="relative z-10 px-8 py-20">

    <!-- TITLE -->
    <div class="text-center text-white mb-16">

      <h1 class="text-5xl md:text-6xl font-bold mb-6">

        <span v-if="currentLanguage === 'en'">
          Our Tourism Services
        </span>

        <span v-if="currentLanguage === 'fr'">
          Nos Services Touristiques
        </span>

        <span v-if="currentLanguage === 'rw'">
          Serivisi z'Ubukerarugendo
        </span>

      </h1>

      <p class="text-xl text-green-300 max-w-3xl mx-auto leading-8">

        <span v-if="currentLanguage === 'en'">
          Explore Rwanda through unforgettable adventures, culture, nature, and world-class hospitality.
        </span>

        <span v-if="currentLanguage === 'fr'">
          Explorez le Rwanda à travers des aventures, la culture et une hospitalité exceptionnelle.
        </span>

        <span v-if="currentLanguage === 'rw'">
          Menya ubwiza bw'u Rwanda binyuze mu bukerarugendo, umuco na serivisi nziza.
        </span>

      </p>

    </div>

    <!-- SERVICE CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

      <div
        v-for="service in services"
        :key="service.title.en"
        class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
      >

        <!-- IMAGE -->
        <img
          :src="service.image"
          class="w-full h-60 object-cover"
        />

        <!-- CONTENT -->
        <div class="p-6 text-white">

          <h2 class="text-2xl font-bold text-green-300 mb-4">
            {{ service.title[currentLanguage] }}
          </h2>

          <p class="leading-7 text-gray-200">
            {{ service.desc[currentLanguage] }}
          </p>

          <!-- BUTTON -->
          <button
            class="mt-6 bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full transition duration-300"
          >

            <span v-if="currentLanguage === 'en'">
              Learn More
            </span>

            <span v-if="currentLanguage === 'fr'">
              En savoir plus
            </span>

            <span v-if="currentLanguage === 'rw'">
              Menya byinshi
            </span>

          </button>

        </div>

      </div>

    </div>

  </div>

</section>
</template>