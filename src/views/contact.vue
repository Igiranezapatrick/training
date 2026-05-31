<script setup>
import { currentLanguage } from '../store/language'
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/hand.png');"
>

  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 text-center text-white px-6">

    <h1 class="text-6xl font-bold mb-4">

      <span v-if="currentLanguage === 'en'">
        Contact Us
      </span>

      <span v-if="currentLanguage === 'fr'">
        Contactez-nous
      </span>

      <span v-if="currentLanguage === 'rw'">
        Twandikire
      </span>

    </h1>

    <p class="text-xl text-green-300">

      <span v-if="currentLanguage === 'en'">
        We'd love to hear from you 
      </span>

      <span v-if="currentLanguage === 'fr'">
        Nous aimerions avoir de vos nouvelles 
      </span>

      <span v-if="currentLanguage === 'rw'">
        Twishimiye kwakira ubutumwa bwawe 
      </span>

    </p>

  </div>

</section>

<!-- CONTACT SECTION -->
<section class="bg-slate-50 py-20 px-8">

  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    <!-- CONTACT INFO -->
    <div
      class="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-green-700
             transition-all duration-500 hover:-translate-y-2 hover:shadow-green-100"
    >

      <h1 class="text-4xl font-bold text-green-800 mb-8">

        <span v-if="currentLanguage === 'en'">
          Get In Touch
        </span>

        <span v-if="currentLanguage === 'fr'">
          Entrer en Contact
        </span>

        <span v-if="currentLanguage === 'rw'">
          Twandikire
        </span>

      </h1>

      <!-- PHONE -->
      <div
        class="bg-emerald-50 rounded-2xl p-6 mb-6
               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >

        <h2 class="text-2xl font-bold text-emerald-700 mb-3">
          📞 Phone
        </h2>

        <p class="text-gray-700 text-lg">
          +250767543218
        </p>

      </div>

      <!-- EMAIL -->
      <div
        class="bg-sky-50 rounded-2xl p-6 mb-6
               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >

        <h2 class="text-2xl font-bold text-sky-700 mb-3">
          ✉️ Email
        </h2>

        <p class="text-gray-700 text-lg break-all">
          muhizaamina@gmail.com
        </p>

      </div>

      <!-- LOCATION -->
      <div
        class="bg-orange-50 rounded-2xl p-6
               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >

        <h2 class="text-2xl font-bold text-orange-600 mb-3">
          📍 Location
        </h2>

        <p class="text-gray-700 text-lg">

          <span v-if="currentLanguage === 'en'">
            Kigali, Rwanda
          </span>

          <span v-if="currentLanguage === 'fr'">
            Kigali, Rwanda
          </span>

          <span v-if="currentLanguage === 'rw'">
            Kigali, Rwanda
          </span>

        </p>

      </div>

    </div>

    <!-- CONTACT FORM -->
    <div
      class="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-cyan-500
             transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-200"
    >

      <h1 class="text-4xl font-bold text-cyan-700 mb-8">

        <span v-if="currentLanguage === 'en'">
          Send a Message
        </span>

        <span v-if="currentLanguage === 'fr'">
          Envoyer un Message
        </span>

        <span v-if="currentLanguage === 'rw'">
          Ohereza Ubutumwa
        </span>

      </h1>

      <form class="space-y-6">

        <!-- NAME -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">

            <span v-if="currentLanguage === 'en'">
              Full Name
            </span>

            <span v-if="currentLanguage === 'fr'">
              Nom Complet
            </span>

            <span v-if="currentLanguage === 'rw'">
              Amazina Yose
            </span>

          </label>

          <input
            type="text"
            placeholder="Enter your name"
            class="w-full border border-slate-300 rounded-2xl px-5 py-4
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   transition duration-300"
          />
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">

            <span v-if="currentLanguage === 'en'">
              Email Address
            </span>

            <span v-if="currentLanguage === 'fr'">
              Adresse Email
            </span>

            <span v-if="currentLanguage === 'rw'">
              Imeli
            </span>

          </label>

          <input
            type="email"
            placeholder="Enter your email"
            class="w-full border border-slate-300 rounded-2xl px-5 py-4
                   focus:outline-none focus:ring-2 focus:ring-cyan-500
                   transition duration-300"
          />
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">

            <span v-if="currentLanguage === 'en'">
              Message
            </span>

            <span v-if="currentLanguage === 'fr'">
              Message
            </span>

            <span v-if="currentLanguage === 'rw'">
              Ubutumwa
            </span>

          </label>

          <textarea
            rows="6"
            placeholder="Write your message..."
            class="w-full border border-slate-300 rounded-2xl px-5 py-4
                   focus:outline-none focus:ring-2 focus:ring-orange-400
                   transition duration-300"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <button
          type="submit"
          class="bg-green-700 hover:bg-green-800 text-white font-bold
                 px-10 py-4 rounded-full shadow-xl
                 transition-all duration-300 hover:scale-105"
        >

          <span v-if="currentLanguage === 'en'">
            Send Message
          </span>

          <span v-if="currentLanguage === 'fr'">
            Envoyer
          </span>

          <span v-if="currentLanguage === 'rw'">
            Ohereza
          </span>

        </button>

      </form>

    </div>

  </div>

</section>

<!-- CTA SECTION -->
<section class="bg-green-800 py-20 px-8 text-center text-white">

  <h1 class="text-2xl font-bold mb-8">

    <span v-if="currentLanguage === 'en'">
      Let’s Explore Rwanda Together 
    </span>

    <span v-if="currentLanguage === 'fr'">
      Explorons le Rwanda Ensemble 
    </span>

    <span v-if="currentLanguage === 'rw'">
      Reka Dutembere u Rwanda Hamwe 
    </span>

  </h1>

  <button
    class="bg-white text-green-800 font-bold px-10 py-4 rounded-full
           hover:bg-green-100 transition-all duration-300
           hover:scale-105 shadow-2xl"
  >

    <span v-if="currentLanguage === 'en'">
      Explore More
    </span>

    <span v-if="currentLanguage === 'fr'">
      Explorer Plus
    </span>

    <span v-if="currentLanguage === 'rw'">
      Menya Byinshi
    </span>

  </button>

</section>

</template>