<template>
  <footer class="bg-black text-white py-32">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3 px-8 py-4">
        <div class="flex h-24 border-white border-b-4 mb-8">
          <h4
            class="text-sm self-end w-3/4 pb-8 text-green font-bold"
          >We’re a web design and development agency founded upon honest work and a handshake mentality</h4>
        </div>
        <!-- <ul class="flex flex-wrap">
          <li class="w-1/2 py-2 md:py-4" v-for="(footerNav, index) in footerNavs" :key="index">
            <a class="font-black italic hover:text-green" :href="footerNav.slug">
              <h4 class="anchor anchor__green anchor__no-border w-11/12">{{ footerNav.title }}</h4>
            </a>
          </li>
        </ul> -->
      </div>

      <div class="w-full md:w-1/3 px-8 py-4">
        <!-- <div class="flex h-24 border-white border-b-4 mb-8">
          <h4 class="self-end pb-8 font-bold text-lg italic">Recent Articles</h4>
        </div>
        <ul>
          <li class="mb-8" v-for="(article, a) in articles" :key="a">
            <nuxt-link class="hover:text-green" :to="`/articles/${article.link}`">
              <h4 class="font-bold">{{ article.title }}</h4>
              <h6 class="text-xs uppercase">Published on {{ article.pubDate }}.</h6>
            </nuxt-link>
          </li>
        </ul>-->
      </div>

      <div class="w-full md:w-1/3 px-8 py-4 text-center md:text-left">
        <div class="flex h-24 border-purple-500 border-b-4">
          <img
            class="w-40 ml-auto mr-auto md:ml-0"
            src="~/assets/img/logo-colour-white.svg"
            alt="Big Man Media Logo"
          />
        </div>
        <div class="mt-8">
          <h3 class="font-bold mb-2">0425 854 720</h3>
          <h3 class="font-bold mb-2">grow@bigmanmedia.com.au</h3>
        </div>
        <div class="flex items-center md:items-start mt-12">
          <div class="ml-auto mr-auto md:ml-0">
            <a href="https://behance.net/bigmanmedia" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/img/behance.svg" class="w-6 md:mr-8" alt="Behance Logo" />
            </a>
          </div>
          <div class="ml-auto mr-auto md:ml-0">
            <a
              href="https://www.facebook.com/bigmanmedia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~/assets/img/white-facebook.svg" class="w-6 md:mr-8" alt="Facebook Logo" />
            </a>
          </div>
          <div class="ml-auto mr-auto md:ml-0">
            <a href="https://twitter.com/big_man_media" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/img/twitter.svg" class="w-6 md:mr-8" alt="Twitter Logo" />
            </a>
          </div>
          <div class="ml-auto mr-auto md:ml-0">
            <a href="https://github.com/bigmanmedia" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/img/github.svg" class="w-6 md:mr-8" alt="Github Logo" />
            </a>
          </div>
          <div class="ml-auto mr-auto md:ml-0">
            <a
              href="https://www.instagram.com/big_man_media/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~/assets/img/instagram.svg" class="w-6 md:mr-8" alt="Instagram Logo" />
            </a>
          </div>
        </div>
        <div class="mt-12">
          <p class="font-bold">
            Made with<span class="px-1 text-base leading-none">❤️</span>in Melbourne, Australia
          </p>
          <p class="text-sm mt-6">Copyright © 2019. All Rights Reserved.</p>
          <p class="text-sm">The Big Man Group Pty Ltd.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'primaryFooter',
  data() {
    return {
      footerNavs: [
        { title: 'Services', slug: '/services' },
        { title: 'About', slug: '/about' }
        // { title: 'Work', slug: '/work' }
        // { title: 'Articles', slug: '/articles' },
        // { title: 'Contact', slug: '/contact' }
      ],
      articles: [
        {
          title: 'Understanding Local SEO and How to Win Customers',
          pubDate: '24 Jun 2019',
          featured: true,
          image: require('~/assets/img/bankst.jpg'),
          shortDescription:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by',
          link: 'test-link'
        },
        {
          title: 'The Business Case for a Head-less CMS',
          pubDate: '24 Jun 2019',
          featured: true,
          image: require('~/assets/img/bankst.jpg'),
          shortDescription:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
          link: 'test-link'
        },
        {
          title: 'Ferraris not Fiats: Web Performance Considered',
          pubDate: '24 Jun 2019',
          featured: false,
          image: require('~/assets/img/bankst.jpg'),
          shortDescription:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born',
          link: 'test-link'
        },
        {
          title: 'Understanding Local SEO and How to Win Customers',
          pubDate: '24 Jun 2019',
          featured: false,
          image: require('~/assets/img/bankst.jpg'),
          shortDescription:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by',
          link: 'test-link'
        }
      ]
    }
  }
}
</script>

