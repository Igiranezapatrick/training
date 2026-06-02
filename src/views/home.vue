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
  return dictionary[currentLanguage.value] || dictionary.en
})
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-900"></div>

    <div class="relative text-center px-6 max-w-7xl mx-auto z-10 pt-20 pb-24">
      
      <p class="uppercase tracking-[6px] text-emerald-400 mb-4 text-xs md:text-sm font-semibold">
        {{ content.heroBadge }}
      </p>

      <h1 class="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight">
        {{ content.heroTitle }}
      </h1>

      <p class="text-lg md:text-xl text-emerald-100/80 mb-20 max-w-3xl mx-auto leading-relaxed font-light">
        {{ content.heroSubtitle }}
      </p>

      <!-- INSTAGRAM STACK CONTAINER -->
      <!-- 'group' is declared here so that hovering anywhere over the stack triggers the layout animation -->
      <div class="relative w-full max-w-4xl mx-auto min-h-[420px] md:min-h-[380px] flex items-center justify-center group">
        
        <!-- CULTURE PHOTO CARD -->
        <div class="absolute md:relative w-[280px] md:w-1/3 bg-white p-3 pb-8 rounded-xl shadow-2xl border border-slate-100 text-left transition-all duration-500 ease-out z-30
                    transform -rotate-6 -translate-x-6 translate-y-2
                    group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:mx-2 group-hover:scale-105">
          <div class="overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 mb-4">
            <img :src="cultureImg" alt="Culture" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-1">{{ content.cards.culture.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed font-normal">{{ content.cards.culture.text }}</p>
        </div>

        <!-- NATURE PHOTO CARD (Center piece) -->
        <div class="absolute md:relative w-[280px] md:w-1/3 bg-white p-3 pb-8 rounded-xl shadow-2xl border border-slate-100 text-left transition-all duration-500 ease-out z-20
                    transform rotate-2 translate-y-1
                    group-hover:rotate-0 group-hover:translate-y-0 group-hover:mx-2 group-hover:scale-105 group-hover:z-40">
          <div class="overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 mb-4">
            <img :src="natureImg" alt="Nature" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-1">{{ content.cards.nature.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed font-normal">{{ content.cards.nature.text }}</p>
        </div>

        <!-- PROGRESS PHOTO CARD -->
        <div class="absolute md:relative w-[280px] md:w-1/3 bg-white p-3 pb-8 rounded-xl shadow-2xl border border-slate-100 text-left transition-all duration-500 ease-out z-10
                    transform rotate-8 translate-x-8 translate-y-4
                    group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:mx-2 group-hover:scale-105">
          <div class="overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 mb-4">
            <img :src="progressImg" alt="Progress" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-1">{{ content.cards.progress.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed font-normal">{{ content.cards.progress.text }}</p>
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
      <div class="space-y-6 max-w-3xl">
        <p v-for="(paragraph, index) in content.originText" :key="index" class="text-slate-700 text-base md:text-lg leading-relaxed">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
