<script setup lang="ts">

import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import HeroSection from "@/components/sections/HeroSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ProductsSection from "@/components/sections/ProductsSection.vue";
import AdditionalInfo from "@/components/sections/AdditionalInfo.vue";
import FeatureSection from "@/components/sections/FeatureSection.vue";
import PartnershipSection from "@/components/sections/PartnershipSection.vue";

import Section from "@/components/Section.vue";

const sections = [
  { component: HeroSection, background: '#3e4041' },
  { component: FeatureSection },
  { component: ServicesSection },
  { component: AdditionalInfo },
  { component: PartnershipSection },
  { component: ProductsSection, background: '#ffffff' },
  { component: ProjectsSection, background: '#ffffff' },
  { component: AboutSection },
  { component: ContactSection },
]
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <Section v-for="(section, idx) in sections"
           :key="idx"
           :background="section.background">
    <component :is="section.component" />
  </Section>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped></style>
