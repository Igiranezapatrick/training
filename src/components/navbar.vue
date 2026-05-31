<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { currentLanguage } from '../store/language'
</script>

<template>

<nav class="bg-green-800 text-white px-8 py-2 flex items-center justify-between shadow-lg w-full">

  <!-- Logo -->
  <img src="../assets/rwa.jpg" class="h-10 w-10 rounded-full" />

  <span class="text-medium font-bold">
    TEMBERA URWANDA
  </span>

  <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">

    <!-- HOME -->
    <li>
      <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
    </li>

    <!-- ABOUT -->
    <li>
      <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink>
    </li>

    <!-- SERVICES -->
    <li>
      <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink>
    </li>

    <!-- GALLERY (FIXED ONLY HERE) -->
    <li class="relative group">

      <a href="#" class="hover:text-yellow-300 flex items-center gap-1">
        Gallery <span>🔽</span>
      </a>

      <ul
        class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition duration-200 z-50"
      >

        <!-- FIX: use RouterLink instead of plain a -->
        <li>
          <RouterLink
            to="/gallery/images"
            class="block px-4 py-2 hover:bg-green-700"
          >
            Images
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/gallery/videos"
            class="block px-4 py-2 hover:bg-green-700"
          >
            Videos
          </RouterLink>
        </li>

      </ul>

    </li>

    <!-- DESTINATION (FIXED ONLY HERE) -->
    <li class="relative group">

      <a href="#" class="hover:text-yellow-300 flex items-center gap-1">
        Destination <span>🔽</span>
      </a>

      <ul
        class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition duration-200 z-50"
      >

        <li>
          <RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">
            Northern Province
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">
            Southern Province
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">
            Eastern Province
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">
            Western Province
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">
            City of Kigali
          </RouterLink>
        </li>

      </ul>

    </li>

    <!-- CONTACT -->
    <li>
      <RouterLink to="/contact" class="hover:text-yellow-300">
        Contact
      </RouterLink>
    </li>

    <!-- LANGUAGE -->
    <li>
      <select
        v-model="currentLanguage"
        class="bg-white/10 border border-white/30 text-white rounded-md px-3 py-1 text-sm focus:outline-none cursor-pointer"
      >
        <option value="en" class="text-black">English</option>
        <option value="fr" class="text-black">Français</option>
        <option value="rw" class="text-black">Kinyarwanda</option>
      </select>
    </li>

  </ul>

</nav>

</template>