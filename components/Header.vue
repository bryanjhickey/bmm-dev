<template>
   <header>
       <PrimaryNav />
       <Banner />
   </header>
</template>

<script>
import PrimaryNav from '~/components/PrimaryNav'
import Banner from '~/components/Banner'

export default {
    name: 'topheader',
    components: {
        PrimaryNav,
        Banner
    },
}
</script>
