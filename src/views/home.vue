<script setup>
import { ref, computed } from 'vue'

import heroImage from '../assets/image.png'
import cultureImg from '../assets/culture.jpg'
import natureImg from '../assets/nature.png'
import progressImg from '../assets/KCC.jpg'

import { currentLanguage } from '../store/language'

const content = computed(() => {
  const dictionary = {
    en: {
      heroBadge: "Discover Africa's Hidden Gem",
      heroTitle: "Welcome to Rwanda",
      heroSubtitle: "The Land of a Thousand Hills, where breathtaking landscapes, vibrant culture, and unforgettable adventures meet.",
      sections: [
        {
          id: 'culture',
          badge: "Heritage",
          title: "Vibrant Culture",
          text: "Immerse yourself in rich traditions passed down through generations. From the rhythmic energy of traditional dances to ancestral storytelling, discover deep community values that form the heartbeat of modern Rwanda.",
          image: cultureImg
        },
        {
          id: 'nature',
          badge: "Biodiversity",
          title: "Untamed Nature",
          text: "Discover majestic mountain gorillas tracking through misty bamboo forests, dramatic volcanic peaks, and endless sweeping green hills that define this breathtaking ecological sanctuary.",
          image: natureImg
        },
        {
          id: 'progress',
          badge: "Vision",
          title: "Inspiring Progress",
          text: "Experience the remarkable renaissance of one of Africa’s cleanest, safest, and fastest-growing nations—a global model for environmental sustainability and forward-thinking innovation.",
          image: progressImg
        }
      ],
      originBadge: "History & Identity",
      originTitle: "The Origin of Rwanda",
      originText: [
        "The name “Rwanda” is believed to come from the Kinyarwanda word “Kwanda,” meaning “to expand” or “to grow.”",
        "Long ago, the ancient Kingdom of Rwanda expanded across beautiful hills and valleys under the leadership of kings known as “Abami.”",
        "These kings united communities, protected traditions and preserved Rwanda’s rich culture through storytelling, traditional dances, cattle keeping and strong family values.",
        "Today, Rwanda is admired around the world for its natural beauty, wildlife, cleanliness, safety and rapid transformation."
      ]
    },
    fr: {
      heroBadge: "Découvrez le joyau caché de l'Afrique",
      heroTitle: "Bienvenue au Rwanda",
      heroSubtitle: "Le Pays des Mille Collines où paysages magnifiques, culture vibrante et aventures inoubliables se rencontrent.",
      sections: [
        {
          id: 'culture',
          badge: "Patrimoine",
          title: "Culture Vibrante",
          text: "Traditions riches, danses culturelles et valeurs communautaires fortes transmis à travers les âges.",
          image: cultureImg
        },
        {
          id: 'nature',
          badge: "Biodiversité",
          title: "Nature Sauvage",
          text: "Découvrez les gorilles majestueux des montagnes, les volcans impressionnants et les paysages verdoyants.",
          image: natureImg
        },
        {
          id: 'progress',
          badge: "Vision",
          title: "Progrès Inspirant",
          text: "L'une des nations les plus propres, sûres et au développement le plus rapide d'Afrique.",
          image: progressImg
        }
      ],
      originBadge: "Histoire & Identité",
      originTitle: "L'Origine du Rwanda",
      originText: [
        "Le nom « Rwanda » provient du mot kinyarwanda « Kwanda », qui signifie « grandir » ou « s'étendre ».",
        "L'ancien Royaume du Rwanda s'est développé à travers les collines et vallées sous la direction des rois appelés « Abami ».",
        "Aujourd'hui, le Rwanda est admiré pour sa beauté naturelle, sa culture, sa sécurité et son développement rapide."
      ]
    },
    rw: {
      heroBadge: "Menya ubwiza bw'u Rwanda",
      heroTitle: "Murakaza neza mu Rwanda",
      heroSubtitle: "Igihugu cy'Imisozi Igihumbi gifite ubwiza bwa kamere, umuco ukize n'ubukerarugendo budasanzwe.",
      sections: [
        {
          id: 'culture',
          badge: "Umurage",
          title: "Umuco Ukize",
          text: "Umuco ukize, imbyino gakondo n'indangagaciro nyarwanda biranga ubwiza bw'abanyarwanda.",
          image: cultureImg
        },
        {
          id: 'nature',
          badge: "Ibidukikije",
          title: "Kamere Kidahinyuka",
          text: "Reba ingagi zo mu birunga n'ubwiza bw'ibidukikije nyaburanga n'imisozi yacu.",
          image: natureImg
        },
        {
          id: 'progress',
          badge: "Icyerekezo",
          title: "Iterambere Ryihuse",
          text: "Igihugu gifite isuku, umutekano n'iterambere ryihuse kandi ry'icyerekezo muri Afurika.",
          image: progressImg
        }
      ],
      originBadge: "Amateka y'u Rwanda",
      originTitle: "Inkomoko y'u Rwanda",
      originText: [
        "Izina “Rwanda” rikomoka ku ijambo “Kwanda” risobanura kwaguka cyangwa gukura.",
        "U Rwanda rwa kera rwagutse mu misozi n'ibibaya biyobowe n'abami bazwi nka “Abami”.",
        "U Rwanda ruzwi kubera ubwiza bwa kamere, umutekano, isuku n'iterambere ryihuse."
      ]
    }
  }
  return dictionary[currentLanguage.value] || dictionary.en
})
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>

    <div class="relative text-center px-6 max-w-5xl mx-auto z-10 pt-12">
      <p class="uppercase tracking-[6px] text-emerald-400 mb-4 text-xs md:text-sm font-semibold">
        {{ content.heroBadge }}
      </p>

      <h1 class="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight">
        {{ content.heroTitle }}
      </h1>

      <p class="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
        {{ content.heroSubtitle }}
      </p>
    </div>
  </section>

  <!-- EDITORIAL STORY FEATURE SECTION (No more cards!) -->
  <section class="bg-slate-950 text-white py-12 px-6">
    <div class="max-w-6xl mx-auto space-y-32">
      
      <div 
        v-for="(section, index) in content.sections" 
        :key="section.id"
        class="flex flex-col md:items-center gap-12 md:gap-20"
        :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <!-- Image Frame -->
        <div class="w-full md:w-1/2">
          <div class="relative overflow-hidden aspect-[16/10] md:aspect-[4/3] rounded-sm group bg-slate-900">
            <!-- Sleek Minimalistic Border Frame Layer -->
            <div class="absolute inset-0 border border-white/5 z-10 pointer-events-none transition-all duration-300 group-hover:border-emerald-500/20"></div>
            <img
              :src="section.image"
              :alt="section.title"
              class="w-full h-full object-cover grayscale-[20%] contrast-[105%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        </div>

        <!-- Typography Content -->
        <div class="w-full md:w-1/2 space-y-4">
          <span class="text-xs uppercase font-bold tracking-[4px] text-emerald-500 block">
            {{ section.badge }}
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {{ section.title }}
          </h2>
          <p class="text-slate-400 leading-relaxed text-base font-light max-w-xl">
            {{ section.text }}
          </p>
          
          <!-- Subtle clean interactive anchor to replace bulky card layout -->
          <div class="pt-2">
            <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-emerald-400 transition-colors group/link">
              Explore Detail
              <span class="ml-2 transform transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ORIGIN SECTION -->
  <section class="bg-white py-32 px-6 text-slate-900">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        <!-- Sticky left column on large screens -->
        <div class="lg:sticky lg:top-12 space-y-3 lg:col-span-1">
          <p class="uppercase tracking-[4px] text-emerald-700 text-xs font-bold">
            {{ content.originBadge }}
          </p>
          <h2 class="text-4xl font-black text-slate-950 tracking-tight leading-none">
            {{ content.originTitle }}
          </h2>
        </div>

        <!-- Text stream column -->
        <div class="space-y-6 lg:col-span-2 border-l border-slate-100 pl-0 lg:pl-12">
          <p 
            v-for="(paragraph, index) in content.originText" 
            :key="index"
            class="text-slate-600 text-lg leading-relaxed font-light"
          >
            {{ paragraph }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
