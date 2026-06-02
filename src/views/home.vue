<script setup>
import { ref, computed } from 'vue'

import heroImage from '../assets/image.png'
import cultureImg from '../assets/culture.jpg'
import natureImg from '../assets/nature.png'
import progressImg from '../assets/KCC.jpg'

import { currentLanguage } from '../store/language'

// Centralized localization dictionary to prevent structural template repetition
const content = computed(() => {
  const dictionary = {
    en: {
      heroBadge: "Discover Africa's Hidden Gem",
      heroTitle: "Welcome to Rwanda",
      heroSubtitle: "The Land of a Thousand Hills, where breathtaking landscapes, vibrant culture, and unforgettable adventures meet.",
      originBadge: "History & Identity",
      originTitle: "The Origin of Rwanda",
      originText: [
        "The name “Rwanda” is believed to come from the Kinyarwanda word “Kwanda,” meaning “to expand” or “to grow.”",
        "Long ago, the ancient Kingdom of Rwanda expanded across beautiful hills and valleys under the leadership of kings known as “Abami.”",
        "These kings united communities, protected traditions and preserved Rwanda’s rich culture through storytelling, traditional dances, cattle keeping and strong family values.",
        "Today, Rwanda is admired around the world for its natural beauty, wildlife, cleanliness, safety and rapid transformation."
      ],
      cards: {
        culture: { title: "Culture", text: "Rich traditions, traditional dances, storytelling and deep community values." },
        nature: { title: "Nature", text: "Discover majestic mountain gorillas, volcanoes and breathtaking green landscapes." },
        progress: { title: "Progress", text: "One of Africa’s cleanest, safest and fastest-growing nations." }
      }
    },
    fr: {
      heroBadge: "Découvrez le joyau caché de l'Afrique",
      heroTitle: "Bienvenue au Rwanda",
      heroSubtitle: "Le Pays des Mille Collines où paysages magnifiques, culture vibrante et aventures inoubliables se rencontrent.",
      originBadge: "Histoire & Identité",
      originTitle: "L'Origine du Rwanda",
      originText: [
        "Le nom « Rwanda » provient du mot kinyarwanda « Kwanda », qui signifie « grandir » ou « s'étendre ».",
        "L'ancien Royaume du Rwanda s'est développé à travers les collines et vallées sous la direction des rois appelés « Abami ».",
        "Aujourd'hui, le Rwanda est admiré pour sa beauté naturelle, sa culture, sa sécurité et son développement rapide."
      ],
      cards: {
        culture: { title: "Culture", text: "Traditions riches, danses culturelles et valeurs communautaires fortes." },
        nature: { title: "Nature", text: "Découvrez les gorilles majestueux et les magnifiques paysages verdoyants." },
        progress: { title: "Progrès", text: "L'une des nations les plus propres et sûres d'Afrique." }
      }
    },
    rw: {
      heroBadge: "Menya ubwiza bw'u Rwanda",
      heroTitle: "Murakaza neza mu Rwanda",
      heroSubtitle: "Igihugu cy'Imisozi Igihumbi gifite ubwiza bwa kamere, umuco ukize n'ubukerarugendo budasanzwe.",
      originBadge: "Amateka y'u Rwanda",
      originTitle: "Inkomoko y'u Rwanda",
      originText: [
        "Izina “Rwanda” rikomoka ku ijambo “Kwanda” risobanura kwaguka cyangwa gukura.",
        "U Rwanda rwa kera rwagutse mu misozi n'ibibaya biyobowe n'abami bazwi nka “Abami”.",
        "U Rwanda ruzwi kubera ubwiza bwa kamere, umutekano, isuku n'iterambere ryihuse."
      ],
      cards: {
        culture: { title: "Umuco", text: "Umuco ukize, imbyino gakondo n'indangagaciro nyarwanda." },
        nature: { title: "Kamere", text: "Reba ingagi zo mu birunga n'ubwiza bw'ibidukikije nyaburanga." },
        progress: { title: "Iterambere", text: "Igihugu gifite isuku, umutekano n'iterambere ryihuse muri Afurika." }
      }
    }
  }
  
  // Fallback to English if a language state errors out or is missing
  return dictionary[currentLanguage.value] || dictionary.en
})
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <!-- OVERLAY (Slightly adjusted opacity to balance text readability and background imagery) -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-slate-900"></div>

    <!-- HERO CONTENT -->
    <div class="relative text-center px-6 max-w-7xl mx-auto z-10 pt-20 pb-16">
      
      <!-- Localized Typography Stack -->
      <p class="uppercase tracking-[6px] text-emerald-400 mb-4 text-xs md:text-sm font-semibold">
        {{ content.heroBadge }}
      </p>

      <h1 class="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight">
        {{ content.heroTitle }}
      </h1>

      <p class="text-lg md:text-xl text-emerald-100/90 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
        {{ content.heroSubtitle }}
      </p>

      <!-- FEATURE CARDS (Unified Layout Grid) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- CULTURE CARD -->
        <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 group text-left">
          <div class="overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
            <img
              :src="cultureImg"
              alt="Rwanda Culture"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {{ content.cards.culture.title }}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed font-light">
            {{ content.cards.culture.text }}
          </p>
        </div>

        <!-- NATURE CARD -->
        <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 group text-left">
          <div class="overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
            <img
              :src="natureImg"
              alt="Rwanda Nature"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {{ content.cards.nature.title }}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed font-light">
            {{ content.cards.nature.text }}
          </p>
        </div>

        <!-- PROGRESS CARD -->
        <div class="bg-slate-900/40 backdrop-blur-md border border-white/10 p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 group text-left">
          <div class="overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
            <img
              :src="progressImg"
              alt="Rwanda Progress"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {{ content.cards.progress.title }}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed font-light">
            {{ content.cards.progress.text }}
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- ORIGIN SECTION -->
  <section class="bg-slate-50 py-24 px-6 border-t border-slate-200/60">
    <div class="max-w-4xl mx-auto text-center md:text-left">
      
      <p class="uppercase tracking-[4px] text-emerald-700 text-xs font-bold mb-3">
        {{ content.originBadge }}
      </p>

      <h2 class="text-4xl md:text-5xl font-black text-slate-950 mb-8 tracking-tight">
        {{ content.originTitle }}
      </h2>

      <!-- Loop through paragraph arrays directly to keep semantic line splits elegant -->
      <div class="space-y-6 max-w-3xl">
        <p 
          v-for="(paragraph, index) in content.originText" 
          :key="index"
          class="text-slate-700 text-base md:text-lg leading-relaxed font-normal"
        >
          {{ paragraph }}
        </p>
      </div>

    </div>
  </section>
</template>
