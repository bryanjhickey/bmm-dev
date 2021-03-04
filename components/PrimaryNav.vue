<template>
  <nav class="bg-purple-500 text-white">
    <div class="flex flex-wrap">
      <nuxt-link to="/" class="flex items-center">
        <img
          class="w-24 md:w-48 p-2 md:p-6"
          src="~/assets/img/logo-colour-white.svg"
          alt="Big Man Media Logo"
        />
      </nuxt-link>
      <ul class="ml-auto mr-0 flex flex-row items-center">
        <li v-for="(headerNav, index) in headerNavs" :key="index" class="p-6 leading-none">
          <nuxt-link class="text-sm md:text-base font-bold text-white uppercase" :to="headerNav.slug">
            <h4>{{ headerNav.title }}</h4>
          </nuxt-link>
        </li>
      </ul>
      <!-- <div class="flex items-center ml-auto md:hidden">
        <div class="font-bold">Menu</div>
      </div>-->
      <div class="flex ml-4 mr-0 bg-black text-green font-bold text-sm md:text-base items-center">
        <a class="p-6" href="tel://03-9366-4082">
          <span class="flex lg:hidden">Call</span>
          <span class="hidden lg:flex">Call us Today</span>
        </a>
      </div>
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
