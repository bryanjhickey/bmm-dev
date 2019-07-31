<template>
  <div class="font-sans text-base text-black">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  name: 'default',
  components: {
    Footer,
    Header
  }
}
</script>
