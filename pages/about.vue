<template>
  <div class="home">
    <section class="py-24 md:py-48">
      <div class="container">
        <div class="flex flex-col md:flex-row md:flex-wrap">
          <div class="w-full md:w-1/2 overflow-hidden">
            <h2 class="text-xl uppercase font-black mb-8">About</h2>
            <p>Big Man Media provides marketing and digital media to visionaries, helping them feel informed and experience business growth.</p>
            <p>Starting in 2010, as a sole trader operating under the name Happy Widget Design, Big Man Media has built a reputation for honest, trustworthy and frank work that results in business growth.</p>
            <p>Bryan Hickey, the Director of Big Man Media, knows the needs of business owners. A keen contributor to organisational growth, profitability and ethical practice, Bryan loves to see business owners gather momentum as they pursue the mission of their organisation.</p>
            <p>Working with partners in Australia and around the world, Big Man Media delivers solutions across a range of marketing and digital design solutions. High-value returns on media campaigns for headline events, steady sales and business development plans for entrepreneurs and mission-critical web-apps are just some of the project areas we work in every day.</p>
            <p>But we’re just getting started…</p>
            <p>If you’re after an honest no-bullshit partner to work with you on your vision and deliver real growth through marketing and digital design give us a call.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
        return {
            hero: {
                heading:  "About Us",
                paragraph:  "We’re a Melbourne based web design and development agency founded upon honest work and a handshake mentality",
                introButtons: false,
                actionText: "Learn More",
                actionUrl: "#",
                bgImage: require('~/assets/img/bg.jpg'),
                bgImgAlt: 'Alt text for hero banner',
                buttonStyle: "bg-green px-8 py-4 mb-2 border-1 border-green inline-block font-mono uppercase",
                heroBox: true,
                heroBoxStyle: 'absolute w-1/3'
            },
        }
    }
}
</script>