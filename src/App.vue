<script setup lang="ts">

import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import HeroSection from "@/components/sections/HeroSection.vue";
import ServiceSection from "@/components/sections/services/ServiceSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import AboutSection from "@/components/sections/about/AboutSection.vue";
import ProjectsSection from "@/components/sections/projects/ProjectsSection.vue";
import ProductsSection from "@/components/sections/products/ProductsSection.vue";
import FeatureSection from "@/components/sections/feature/FeatureSection.vue";
import ProductionSection from "@/components/sections/production/ProductionSection.vue";

import Section from "@/components/Section.vue";
import PartnershipSection from "@/components/sections/partnership/PartnershipSection.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useHeader } from "@/composables/useHeader.ts";
import { useScroll } from "@/composables/useScroll.ts";
import { useIntersection } from "@/composables/useIntersection.ts";
import { onMounted, ref } from 'vue'
import { useMenu } from "@/composables/useMenu.ts";

const sections = [
  { component: HeroSection, background: '#3e4041', spacing: 'hero', id: 'hero' },
  { component: FeatureSection, spacing: 'md', fullWidth: true, id: 'feature' },
  { component: ServiceSection, spacing: 'md', id: 'service' },
  { component: ProductionSection, spacing: 'md', id: 'production', fullWidth: true },
  { component: PartnershipSection, spacing: 'md', fullWidth: true, id: 'partnership' },
  { component: ProductsSection, background: '#ffffff', spacing: 'product', id: 'products', fullWidth: true },
  { component: ProjectsSection, background: '#ffffff', spacing: 'alt', id:  'projects' },
  { component: AboutSection, spacing: 'lg', id: 'about' },
  { component: ContactSection, spacing: 'contact',  id: 'contact' },
]

const { isPastHero } = useHeader()
const { scrollTo } = useScroll()
const { isMenuOpen } = useMenu();

const contactRef = ref<HTMLElement | null>(null);
const footerRef =  ref<HTMLElement | null>(null);

const { isVisible: contactVisible } = useIntersection(contactRef);
const { isVisible: footerVisible } = useIntersection(footerRef);

onMounted(() => {
  contactRef.value = document.getElementById('contact')
  footerRef.value = document.getElementById('footer')
})
</script>

<template>
  <Transition name="slide-up-header">
    <header class="app-header" v-if="!footerVisible">
      <AppHeader/>
    </header>
  </Transition>

  <Transition name="slide-up">
    <BaseButton v-if="isPastHero && !contactVisible && !footerVisible && !isMenuOpen" @click="scrollTo('contact')"
        variant="primary" size="lg" class="fixed bottom-12 right-6 drop-shadow-2xl z-[1000] !px-4 !py-3 md:!px-6 md:!py-[18px] xl:hidden ">
      Оставить заявку
    </BaseButton>
  </Transition>

  <Section v-for="(section, idx) in sections"
           :key="idx"
           :background="section.background || '#f4f1ef'"
           :spacing="section.spacing"
           :fullWidth="section.fullWidth"
           :id="section.id"
  >
    <component :is="section.component"/>
  </Section>

  <footer class="app-footer" id="footer">
    <AppFooter/>
  </footer>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-header-enter-active,
.slide-up-header-leave-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.slide-up-header-enter-from,
.slide-up-header-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
