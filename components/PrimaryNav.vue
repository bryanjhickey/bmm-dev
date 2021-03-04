<template>
  <nav class="bg-purple-500 text-white">
    <div class="flex flex-wrap">
      <nuxt-link to="/" class="flex items-center">
        <img
          class="w-24 md:w-40 p-2 md:p-6"
          src="~/assets/img/logo-colour-white.svg"
          alt="Big Man Media Logo"
        />
      </nuxt-link>
      <ul class="ml-auto mr-0 flex flex-row items-center text-xs sm:text-sm md:text-base font-bold">
        <li v-for="(headerNav, index) in headerNavs" :key="index" class="px-4 md:px-6 py-6 md:py-8 leading-none">
          <nuxt-link class="text-white uppercase" :to="headerNav.slug">
            <h4>{{ headerNav.title }}</h4>
          </nuxt-link>
        </li>
        <li class="bg-black text-green px-4 md:px-6 py-6 md:py-8 leading-none">
         <a href="tel://03-9366-4082">
          <span class="inline lg:hidden">Call</span>
          <span class="hidden lg:flex">Call us Today</span>
        </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'topheader',
  data() {
    return {
      headerNavs: [
        { title: 'Services', slug: '/services' },
        { title: 'About', slug: '/about' }
        // { title: 'Work', slug: '/work' },
        // { title: 'Articles', slug: '/articles' },
        // { title: 'Contact', slug: '/contact' }
      ]
    }
  }
}
</script>
