import { ref, watch } from 'vue'

// load saved language OR default
const savedLanguage = localStorage.getItem('language')

export const currentLanguage = ref(savedLanguage || 'en')

// switch language globally
export function setLanguage(lang) {
  currentLanguage.value = lang
}

// persist language
watch(currentLanguage, (newLang) => {
  localStorage.setItem('language', newLang)
})