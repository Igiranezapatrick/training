<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

<footer class="bg-gradient-to-b from-green-900 to-green-950 text-white mt-20">

  <!-- MAIN FOOTER -->
  <div class="max-w-7xl mx-auto px-8 py-16">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      <!-- ABOUT -->
      <div>

        <h3 class="text-2xl font-bold text-yellow-300 mb-5 tracking-wide">
          TEMBERA URWANDA
        </h3>

        <p class="text-green-200 leading-8 text-sm">
          Discover the breathtaking beauty of the Land of a Thousand Hills,
          from majestic mountain gorillas to vibrant cultural experiences
          and unforgettable adventures.
        </p>

      </div>

      <!-- QUICK LINKS -->
      <div>

        <h3 class="text-xl font-semibold text-yellow-300 mb-5">
          Quick Links
        </h3>

        <ul class="space-y-4 text-sm">

          <li>
            <RouterLink
              to="/"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Home
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/services"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Services
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/about"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              About Us
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/gallery"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Gallery
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/contact"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Contact
            </RouterLink>
          </li>

        </ul>

      </div>

      <!-- DESTINATIONS -->
      <div>

        <h3 class="text-xl font-semibold text-yellow-300 mb-5">
          Destinations
        </h3>

        <ul class="space-y-4 text-sm">

          <li>
            <RouterLink
              to="/northern"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/southern"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Southern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/eastern"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/western"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/kigali"
              class="hover:text-yellow-300 transition duration-300 hover:pl-2 inline-block"
            >
              City of Kigali
            </RouterLink>
          </li>

        </ul>

      </div>

      <!-- CONTACT -->
      <div>

        <h3 class="text-xl font-semibold text-yellow-300 mb-5">
          Contacts
        </h3>

        <ul class="space-y-4 text-sm text-green-200">

          <li class="flex items-center gap-3">
            📧
            <span>
              muhizaamina@gmail.com
            </span>
          </li>

          <li class="flex items-center gap-3">
            📞
            <span>
              +250 767 453 412
            </span>
          </li>

          <li class="flex items-center gap-3">
            📍
            <span>
              Kagugu, Kigali, Rwanda
            </span>
          </li>

        </ul>

      </div>

    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="border-t border-white/10">

    <div class="max-w-7xl mx-auto px-8 py-6">

      <p class="text-center text-sm text-green-300 tracking-wide">

        © 2025 Tembera URWANDA.
        Crafted with pride for Rwanda tourism 🌍

      </p>

    </div>

  </div>

</footer>

</template>