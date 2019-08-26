<template>
  <div class="banner">
     <picture>
        <source :srcset="hero.bannerImgSrcSet"
                 sizes="100vw"
                 type="image/webp" />
        <img :src="hero.bannerImg"
             :srcset="hero.bannerImgSrcSet"
             :alt="hero.bannerImg"
             sizes="100vw" />
     </picture>
  </div>
</template>

<script>
export default {
    name: 'banner',
    data() {
        return {
            hero: {
                heading:  "Website Design",
                paragraph:  "We’re a Melbourne based web design and development agency founded upon honest work and a handshake mentality",
                introButtons: false,
                actionText: "Learn More",
                actionUrl: "#",
                bannerImg: require('~/assets/img/bg.jpg'),
                bannerImgSrcSet: require('~/assets/img/bg.jpg'),
                bannerImgAlt: 'Alt text for hero banner',
                buttonStyle: "bg-green px-8 py-4 mb-2 border-1 border-green inline-block font-mono uppercase",
                heroBox: true,
                heroBoxStyle: 'absolute w-1/3'
            },
        }
    }
}
</script>

<style lang="scss" scoped>
$bmm-purple: #6D32FF;
$bmm-green: #87FC8E;
$bmm-white: #ffffff;
$bmm-black: #1f1f1f;
$bmm-grey: #DBDBDB;

.hero-section {

  .hero-section__heading {
    background: rgba($bmm-purple,1);
    color: white;
    font-size: 36px;
    line-height: 1.1;
    margin: 0 -15px;
    padding: 10px 15px;

    &--burgundy {
      background: rgba($bmm-green,1);
    }

    &--orange {
      background: rgba($bmm-black,1);
    }

    &--green {
      background: rgba($bmm-green,1);
    }

    &--purple  {
      background: rgba($bmm-purple,1);
    }
  }

  .hero-section__intro {
    margin: 15px 0 0 0;
    padding: 0;
  }

  .btn {
    background: $bmm-purple;
    border: none;
    border-color: $bmm-purple;
    border-bottom: 3px $bmm-purple solid;
    font-weight: bold;
    line-height: 1;
    margin: 15px 10px 0 0;
    position:relative;
    padding:15px 45px 12px 15px;
    text-align: left;

    &:before {
    //   @extend .fa;
    //   @extend .fa-chevron-right;
      font-size: 24px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateY(1px);
      right: 15px;
    }

    &:hover,
    &:focus {
      background:$bmm-purple;
    }
  }

@media (max-width:540px){
  .btn {
    width: 100%;
  }
}

// Position content over image
@media (min-width:768px){
  position:relative;
  overflow: hidden;
  height: 480px;

  img {
     position: absolute;
     left: 50%;
     top: 50%;
     -webkit-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     max-width: none;
     min-height: 100%;
     min-width: 100%;
  }

  .container {
    height: 100%;
    position: relative;
    z-index: 100;
  }


  // Increase size of button
  .btn {
    font-size: 1.2em;
    line-height: 1;
    margin-top:25px;
    border-bottom-width: 5px;
    padding-bottom: 10px;
    padding-right: 50px;

    &:before {
      font-size: 30px;
      transform: translateY(-50%) translateY(3px);
    }
  }

}


@media (min-width:992px){
  height: 530px;
  .hero-section__heading {
    font-size: 52px;
    line-height: 1.1;
  }
}

@media (min-width:1200px){
  height: 540px;
}

@media (min-width:1400px){
  height: 580px;
}

// Supersize on big screens
@media (min-width:1601px){
  height: 600px;

  .hero-section__heading {
    font-size: 56px;
    line-height: 1.1;
  }

}
}
</style>


