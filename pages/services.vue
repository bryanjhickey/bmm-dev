<template>
  <div class="home">

    <section class="py-24 md:py-48">
      <div class="container">
        <div class="flex flex-col md:flex-row md:flex-wrap">
          <div class="w-full md:w-1/2 overflow-hidden">
            <h2 class="text-xl uppercase font-black mb-8">{{ services.title }}</h2>
            <p>{{ services.description }}</p>
            <img class="w-11/12 mr-auto ml-auto my-8 md:hidden" :src="services.image.src" :alt="services.image.alt">
            <h3 class="font-mono tracking-widest font-bold uppercase mt-16 mb-8">Core Services</h3>
            <ul class="flex flex-wrap">
                <li class="w-full md:w-1/2 py-2 md:py-4" v-for="(coreService, c) in services.coreServices" :key="c">
                    <a class="text-lg font-black italic hover:text-purple" :href="`#${coreService.idSlug}`">
                        <h4>{{ coreService.title }}</h4>
                    </a>
                </li>
            </ul>
          </div>
          <div class="w-full md:w-1/2 hidden md:flex">
              <img class="w-11/12 mr-0 ml-auto mt-12" :src="services.image.src" :alt="services.image.alt">
          </div>
        </div>
      </div>
    </section>

    <section v-for="(coreService, c) in services.coreServices" :key="c" :id="coreService.idSlug">
        <div v-if="coreService.darkTheme">
            <div class="pt-32 pb-12 md:py-48 bg-black">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-1/3 mb-8">
                            <div class="px-8">
                                <h2 class="font-mono text-xl uppercase tracking-widest font-bold text-purple pb-8 md:pb-16">{{ coreService.title }}</h2>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 text-white" v-for="(speciality, s) in coreService.specialities" :key="s">
                            <div class="px-8 pb-32">
                                <h4 class="uppercase font-bold mb-8">{{ speciality.title }}</h4>
                                <p>{{ speciality.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="pt-32 pb-12 md:py-48">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-1/3 mb-8">
                            <div class="px-8">
                                <h2 class="font-mono text-xl uppercase tracking-widest font-bold pb-8 md:pb-16">{{ coreService.title }}</h2>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3" v-for="(speciality, s) in coreService.specialities" :key="s">
                            <div class="px-8 pb-32">
                                <h4 class="uppercase font-bold mb-8">{{ speciality.title }}</h4>
                                <p>{{ speciality.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'services',
  data() {
    return {
         services: {
            title: 'Our Services',
            description: 'We are business strategists, keen analysts, growth-focused designers and thoughtful developers. We’ve made it our mission to partner with businesses to achieve big goals and set new boundaries. We are about more than just tools and technology, we’re about building the size and reach of your business so that you can negotiate the future with confidence.',
            image: {src: require('~/assets/img/services-mobile-screens.png'), alt: 'Mobile Prototype Mock Designs'},
            coreServices: [
                {
                    title: 'Strategy',
                    idSlug: 'strategy',
                    darkTheme: true,
                    specialities: [
                        {title: 'Market Research', description: 'We’ll review your market with fresh eyes and no assumptions. Just our commitment to honest appraisals.' },
                        {title: 'Content Strategy', description: 'Your business should speak with one voice. We assess, schedule, and deliver content to improve your ROI. ' },
                        {title: 'Information Architecture', description: 'Reduce the costs of information storage and retrieval with one of our custom cloud or in-house solutions. ' },
                        {title: 'Business Analysis', description: 'The first step to beating out your competition is to have a smart content marketing plan for your business.' },
                        {title: 'Brand Positioninig', description: 'Need help driving more organic traffic to your website? Invest in ongoing Search Engine Optimisation.' }
                    ]
                },
                {
                    title: 'Web Design',
                    idSlug: 'webDesign',
                    darkTheme: false,
                    specialities: [
                        {title: 'Wireframing & Prototyping', description: 'Step up your inbound marketing game by creating experiences that attracts customers to your website.' },
                        {title: 'UX/UI Design', description: 'Each point of contact is a chance for failure or success. We know the psychology and data of good design' },
                        {title: 'Digital Style Guides', description: 'We develop consistent, usable and inviting design systems that can be applied across print and digital media.' },
                        {title: 'Interaction Design', description: 'How a websites moves and responds reveals your brands personality. We’ve mastered online interactions for you.' },
                        {title: 'Design Sprints', description: 'Have an idea for a product or service? From an initial idea to a user-tested prototype in just 5 days. We move quick.' }
                    ]
                },
                {
                    title: 'Web Development',
                    idSlug: 'webDevelopment',
                    darkTheme: true,
                    specialities: [
                        {title: 'Headless CMS', description: 'Content shouldn’t be tied to design. Uncouple the traditional website today and free yourself to change and grow ' },
                        {title: 'Critical CSS', description: 'Just the right amount of code at just the right time brings page-load speeds your users will appreciate.' },
                        {title: 'Art-Directed Assets', description: 'We’ve perfected the art of image curation and content placement for perfect designs across all devices. ' },
                        {title: 'Utility CSS Sytems', description: 'Wasting less time on complex code and delivering quality designs all while saving time and money? Yes, please.' },
                        {title: 'JavaScript Frameworks', description: 'Need help driving more organic traffic to your website? Invest in ongoing Search Engine Optimisation.' }
                    ]
                },
                {
                    title: 'Content Management',
                    idSlug: 'contentManagement',
                    darkTheme: false,
                    specialities: [
                        {title: 'Open Source CMS', description: 'Need a cost-effective stable solution for your website. Open source CMS’s might be the right choice for you.' },
                        {title: 'Proprietary CMS', description: 'Need the confidence of a fully supported CMS. We’re experts in Craft CMS for quality custom sites.' },
                        {title: 'Plugin Development', description: 'We develop custom plugins to deliver business objectives. Well-documented, fully supported, flexible pricing.' },
                        {title: 'Role-Based Permissions', description: 'Your team can have the tools they need with the  appropriate permissions they need to help you scale and grow.' },
                        {title: 'Static Content Systems', description: 'Cost effective solutions that deliver amazing designs without the cost of complex back-end setups.' }
                    ]
                },
                {
                    title: '3rd Party Integration',
                    idSlug: 'thirdParty',
                    darkTheme: true,
                    specialities: [
                        {title: 'API Development', description: 'Free your content from its cage. Share with approved parties or with the world. We develop API’s for sharing.' },
                        {title: 'CRM Solutions', description: 'Integrate your website with CRM tools like HubSpot, Infusion Soft and Salesforce. Get deeper insights today.' },
                        {title: 'Analytics Suites', description: 'Integrate the right analytics for tracking user behaviour, content hotspots and levering great value from your content.' },
                        {title: 'Automated Code Tracking ', description: 'Improve the service by eliminating bugs with automated code testing using Sentry, Lighthouse or JIRA. ' },
                        {title: 'Transaction Email', description: 'Automate interactions with your audience using dedicated email delivery services like Mandril, Drip and SendGrid' }
                    ]
                },
                {
                    title: 'Delivery & Support',
                    idSlug: 'deliverySupport',
                    darkTheme: false,
                    specialities: [
                        {title: 'CDN Distributions', description: 'Maximum speeds at minimum costs. We deliver blazingly fast websites around the corner and around the globe.' },
                        {title: 'Local Hosting Solutions', description: 'We know the benefits local hosting for your audience brings. Don’t keep your customers waiting with overseas hosts.' },
                        {title: 'Split Testing', description: 'Dying to capture the attention of your ideal audience? Let’s devise a multi-channel marketing campaign that does.' },
                        {title: 'Continuous Integration', description: 'We deliver quality code to local, development or production environments without interruptions.' },
                        {title: 'Dedicated Support 24/7', description: 'We have the right support team to stop issues before they arise. We manage your sites so you can focus on growth.' }
                    ]

                },
            ],
            articles: [
                {title: 'Understanding Local SEO and How to Win Customers', pubDate: '24 Jun 2019', featured: true, image: require('~/assets/img/bankst.jpg'), shortDescription: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by', link: '/'},
                {title: 'The Business Case for a Head-less CMS', pubDate: '24 Jun 2019', featured: true, image: require('~/assets/img/bankst.jpg'), shortDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', link: '/'},
                {title: 'Ferraris not Fiats: Web Performance Considered', pubDate: '24 Jun 2019', featured: false, image: require('~/assets/img/bankst.jpg'), shortDescription: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born', link: '/'},
                {title: 'Understanding Local SEO and How to Win Customers', pubDate: '24 Jun 2019', featured: false, image: require('~/assets/img/bankst.jpg'), shortDescription: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by', link: '/'},
            ]
        },
    }
  }
}
</script>