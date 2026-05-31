<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">
<div class="flex flex-wrap justify-between gap-8">

<!-- About -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
<p class="text-sm text-green-200">Discover the beauty of the land of a Thousand Hills</p>
</div>
<!-- Quick Links -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
<ul class="space-y-2 text-sm">
<li>
<RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
<li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
<li><RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink></li>
<li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink></li>
</ul>
</div>
<!-- Destinations -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
<ul class="space-y-2 text-sm">
<li><RouterLink to="/northern" class="hover:text-yellow-300">Northern Province</RouterLink></li>
<li><RouterLink to="/southern" class="hover:text-yellow-300">Southern Province</RouterLink></li>
<li><RouterLink to="/eastern" class="hover:text-yellow-300">Eastern Province</RouterLink></li>
<li><RouterLink to="/western" class="hover:text-yellow-300">Western Province</RouterLink></li>
<li><RouterLink to="/kigali" class="hover:text-yellow-300">City of Kigali</RouterLink></li>
</ul>
</div>
<!-- Contact -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3">Contacts</h3>
<ul class="space-y-2 text-green-300">
<li>muhizaamina@gmail.com</li>
<li>+250767453412</li>
<li>Kagugu, Kigali, Rwanda</li>
</ul>
</div>
</div>
<!-- Copyright -->
<div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center">&copy; 2025 Tembera URWANDA. All rights reserved</p>
</div>
</footer>
</template>