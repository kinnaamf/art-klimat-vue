<script setup lang="ts">

import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import HeroSection from "@/components/sections/HeroSection.vue";
import ServiceSection from "@/components/sections/services/ServiceSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import AboutSection from "@/components/sections/about/AboutSection.vue";
import ProjectsSection from "@/components/sections/projects/ProjectsSection.vue";
import ProductsSection from "@/components/sections/products/ProductsSection.vue";
import AdditionalInfo from "@/components/sections/AdditionalInfo.vue";
import FeatureSection from "@/components/sections/feature/FeatureSection.vue";
import ProductionSection from "@/components/sections/production/ProductionSection.vue";

import Section from "@/components/Section.vue";
import PartnershipSection from "@/components/sections/partnership/PartnershipSection.vue";

const sections = [
  { component: HeroSection, background: '#3e4041', spacing: 'hero' },
  { component: FeatureSection, spacing: 'md', fullWidth: true },
  { component: ServiceSection, spacing: 'md' },
  { component: AdditionalInfo, spacing: 'custom' },
  { component: ProductionSection, spacing: 'md' },
  { component: PartnershipSection, spacing: 'md', fullWidth: true },
  { component: ProductsSection, background: '#ffffff', spacing: 'product' },
  { component: ProjectsSection, background: '#ffffff', spacing: 'alt' },
  { component: AboutSection, spacing: 'lg' },
  { component: ContactSection, spacing: 'contact' },
]
</script>

<template>
  <header class="app-header">
    <AppHeader/>
  </header>

  <Section v-for="(section, idx) in sections"
           :key="idx"
           :background="section.background || '#f4f1ef'"
           :spacing="section.spacing"
           :fullWidth="section.fullWidth"
  >
    <component :is="section.component"/>
  </Section>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped></style>
