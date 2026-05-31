import { computed } from 'vue'
import { currentLanguage } from '../store/language'

export function useI18n(messages) {
  return (key) =>
    computed(() => messages[key][currentLanguage.value])
}