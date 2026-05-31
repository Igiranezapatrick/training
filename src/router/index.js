import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Services from '../views/services.vue'
import Contact from '../views/contact.vue'

import Northern from '../views/northern.vue'
import Southern from '../views/southern.vue'
import Eastern from '../views/eastern.vue'
import Western from '../views/western.vue'
import Kigali from '../views/kigali.vue'

import Gallery from '../views/gallery.vue'
import GalleryImages from '../views/galleryImages.vue'
import GalleryVideos from '../views/galleryVideos.vue'

const routes = [

  {
    path: '/',
    component: Home
  },

  {
    path: '/about',
    component: About
  },

  {
    path: '/services',
    component: Services
  },

  {
    path: '/gallery',
    component: Gallery
  },

  {
    path: '/gallery/images',
    component: GalleryImages
  },

  {
    path: '/gallery/videos',
    component: GalleryVideos
  },

  {
    path: '/contact',
    component: Contact
  },

  {
    path: '/northern',
    component: Northern
  },

  {
    path: '/southern',
    component: Southern
  },

  {
    path: '/eastern',
    component: Eastern
  },

  {
    path: '/western',
    component: Western
  },

  {
    path: '/kigali',
    component: Kigali
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router