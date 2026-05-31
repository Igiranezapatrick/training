<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { currentLanguage } from '../store/language'
</script>

<template>

<nav
  class="sticky top-0 z-50 bg-green-900/95 backdrop-blur-md text-white px-10 py-4 flex items-center justify-between shadow-xl border-b border-white/10"
>

  <!-- LEFT SIDE -->
  <div class="flex items-center gap-4">

    <!-- Logo -->
    <img
      src="../assets/rwa.jpg"
      class="h-12 w-12 rounded-full object-cover border-2 border-yellow-300 shadow-md"
    />

    <!-- Brand -->
    <span class="text-xl font-bold tracking-wide text-white">
      TEMBERA URWANDA
    </span>

  </div>

  <!-- NAVIGATION -->
  <ul class="flex gap-8 text-sm font-medium items-center">

    <!-- HOME -->
    <li>
      <RouterLink
        to="/"
        class="hover:text-yellow-300 transition duration-300"
      >
        Home
      </RouterLink>
    </li>

    <!-- ABOUT -->
    <li>
      <RouterLink
        to="/about"
        class="hover:text-yellow-300 transition duration-300"
      >
        About
      </RouterLink>
    </li>

    <!-- SERVICES -->
    <li>
      <RouterLink
        to="/services"
        class="hover:text-yellow-300 transition duration-300"
      >
        Services
      </RouterLink>
    </li>

    <!-- GALLERY -->
    <li class="relative group">

      <button
        class="hover:text-yellow-300 flex items-center gap-1 transition duration-300"
      >
        Gallery
        <span class="text-xs group-hover:rotate-180 transition duration-300">
          ▼
        </span>
      </button>

      <!-- DROPDOWN -->
      <ul
        class="absolute left-0 top-full pt-3 w-44
               opacity-0 invisible translate-y-2
               group-hover:opacity-100
               group-hover:visible
               group-hover:translate-y-0
               transition-all duration-300 z-50"
      >

        <div class="bg-green-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">

          <li>
            <RouterLink
              to="/gallery/images"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Images
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/gallery/videos"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Videos
            </RouterLink>
          </li>

        </div>

      </ul>

    </li>

    <!-- DESTINATION -->
    <li class="relative group">

      <button
        class="hover:text-yellow-300 flex items-center gap-1 transition duration-300"
      >
        Destination
        <span class="text-xs group-hover:rotate-180 transition duration-300">
          ▼
        </span>
      </button>

      <!-- DROPDOWN -->
      <ul
        class="absolute right-0 top-full pt-3 w-56
               opacity-0 invisible translate-y-2
               group-hover:opacity-100
               group-hover:visible
               group-hover:translate-y-0
               transition-all duration-300 z-50"
      >

        <div class="bg-green-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">

          <li>
            <RouterLink
              to="/northern"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/southern"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Southern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/eastern"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/western"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/kigali"
              class="block px-5 py-3 hover:bg-green-800 transition duration-200"
            >
              City of Kigali
            </RouterLink>
          </li>

        </div>

      </ul>

    </li>

    <!-- CONTACT -->
    <li>
      <RouterLink
        to="/contact"
        class="hover:text-yellow-300 transition duration-300"
      >
        Contact
      </RouterLink>
    </li>

    <!-- LANGUAGE -->
    <li>

      <select
        v-model="currentLanguage"
        class="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2 text-sm focus:outline-none cursor-pointer hover:bg-white/20 transition duration-300"
      >
        <option value="en" class="text-black">
          English
        </option>

        <option value="fr" class="text-black">
          Français
        </option>

        <option value="rw" class="text-black">
          Kinyarwanda
        </option>

      </select>

    </li>

  </ul>

</nav>

</template>