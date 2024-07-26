import { computed } from "vue"
import { useRoute } from "vue-router"

const useHeaderHook = () => {
  const route = useRoute()

  const linkPath = computed(() => {
    return route.path === '/' ? '/sign-up' : '/'
  })

  const linkText = computed(() => {
    return route.path === '/' ? 'Sign Up' : 'Log in'
  })

  const textColor = computed(() => {
    return route.path === '/profile' ? '#FFF' : '#000'
  })

  return {
    linkPath, 
    linkText,
    textColor
  }
}

export default useHeaderHook
