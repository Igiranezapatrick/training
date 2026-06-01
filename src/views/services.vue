<script setup>
import { ref } from 'vue'
import { currentLanguage } from '../store/language'

const activeCard = ref(null)

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
      fr: 'Vivez une aventure inoubliable avec les gorilles des montagnes du Rwanda.',
      rw: 'Sura ingagi zo mu birunga maze ugire ibihe bitazibagirana.'
    },
    more: {
      en: 'Gorilla trekking helps protect endangered mountain gorillas while supporting local communities and eco-tourism in Rwanda.',
      fr: 'Cette activité protège les gorilles et soutient le tourisme écologique.',
      rw: 'Iki gikorwa gifasha kurengera ingagi no guteza imbere ubukerarugendo.'
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
      fr: 'Découvrez Kigali avec ses rues propres et sa culture dynamique.',
      rw: 'Menya Kigali igezweho, isukuye kandi ifite umuco mwiza.'
    },
    more: {
      en: 'City tours help visitors understand Rwanda’s history, innovation, safety, and modern urban development.',
      fr: 'Les visites permettent de découvrir l’histoire et le développement du Rwanda.',
      rw: 'Bituma abantu bamenya amateka n’iterambere rya Kigali.'
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
      en: 'Relax on peaceful beaches and enjoy golden sunsets over Lake Kivu.',
      fr: 'Profitez des plages et des couchers de soleil du Lac Kivu.',
      rw: 'Iruhukire ku nkengero za Kivu unyure mu bwiza bw’izuba rirenga.'
    },
    more: {
      en: 'Lake Kivu offers relaxation, water activities, fresh air, and beautiful scenery for tourists and families.',
      fr: 'Le Lac Kivu offre détente et paysages magnifiques.',
      rw: 'Ikiyaga cya Kivu gitanga amahumbezi n’ubwiza nyaburanga.'
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
      en: 'Enjoy traditional dances, storytelling, local food, and Rwandan heritage.',
      fr: 'Découvrez les danses et traditions rwandaises.',
      rw: 'Menya imbyino gakondo n’umuco nyarwanda.'
    },
    more: {
      en: 'Cultural experiences preserve Rwanda’s traditions and connect visitors to local communities.',
      fr: 'Ces expériences préservent les traditions rwandaises.',
      rw: 'Bifasha kubungabunga umuco nyarwanda.'
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
      en: 'Explore Rwanda’s green hills, forests, waterfalls, and wildlife.',
      fr: 'Explorez les collines et forêts du Rwanda.',
      rw: 'Sura imisozi, amashyamba n’ibyiza nyaburanga.'
    },
    more: {
      en: 'Nature adventures encourage environmental protection and showcase Rwanda’s biodiversity.',
      fr: 'Ces aventures valorisent la biodiversité du Rwanda.',
      rw: 'Bituma abantu barushaho kurengera ibidukikije.'
    }
  },

  {
    image: '/rw.jpg',
    title: {
      en: 'Travel Support',
      fr: 'Assistance Voyage',
      rw: 'Ubufasha mu Ngendo'
    },
    desc: {
      en: 'We help you find hotels, transport, and guided travel experiences.',
      fr: 'Nous aidons à organiser vos voyages.',
      rw: 'Dufasha kubona hoteli n’abayobora ingendo.'
    },
    more: {
      en: 'Travel support makes journeys easier, safer, and more enjoyable for tourists visiting Rwanda.',
      fr: 'L’assistance rend les voyages plus simples et agréables.',
      rw: 'Bituma urugendo rworoha kandi rurushaho kunezeza.'
    }
  }
]
</script>

<template>

<!-- PAGE WRAPPER -->
<section class="bg-white min-h-screen">

  <!-- HERO -->
  <div
    class="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/wow.png');"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative text-center text-white px-6 max-w-4xl">

      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        {{ currentLanguage === 'en'
          ? 'Our Tourism Services'
          : currentLanguage === 'fr'
          ? 'Nos Services Touristiques'
          : 'Serivisi z\'Ubukerarugendo'
        }}
      </h1>

      <p class="text-green-200 text-base md:text-lg leading-8">
        {{ currentLanguage === 'en'
          ? 'Discover Rwanda through curated travel, culture, nature, and unforgettable experiences.'
          : currentLanguage === 'fr'
          ? 'Découvrez le Rwanda à travers des expériences uniques.'
          : 'Menya ubwiza bw’u Rwanda mu bukerarugendo.'
        }}
      </p>

    </div>
  </div>

  <!-- SERVICES -->
  <div class="max-w-7xl mx-auto px-6 py-20">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      <div
        v-for="(service, index) in services"
        :key="service.title.en"
        class="bg-white rounded-3xl shadow-md overflow-hidden
               border border-slate-100
               transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <!-- IMAGE -->
        <div class="h-64 w-full overflow-hidden">
          <img
            :src="service.image"
            class="w-full h-full object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            {{ service.title[currentLanguage] }}
          </h2>

          <p class="text-gray-600 leading-7 text-sm md:text-base">
            {{ service.desc[currentLanguage] }}
          </p>

          <!-- INTERACTIVE BUTTON -->
          <button
            @click="activeCard === index ? activeCard = null : activeCard = index"
            class="group mt-6 flex items-center gap-2 text-green-700
                   font-semibold hover:text-green-900 transition"
          >

            {{
              currentLanguage === 'en'
                ? 'Learn more'
                : currentLanguage === 'fr'
                ? 'En savoir plus'
                : 'Menya byinshi'
            }}

            <span
              class="transition duration-300"
              :class="activeCard === index ? 'rotate-90' : ''"
            >
              →
            </span>

          </button>

          <!-- EXPANDING DESCRIPTION -->
          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-40"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 max-h-40"
            leave-to-class="opacity-0 max-h-0"
          >

            <div
              v-if="activeCard === index"
              class="mt-5 bg-green-50 border border-green-100
                     rounded-2xl p-4 overflow-hidden"
            >

              <p class="text-gray-700 leading-7 text-sm">
                {{ service.more[currentLanguage] }}
              </p>

            </div>

          </transition>

        </div>

      </div>

    </div>

  </div>

</section>

</template>