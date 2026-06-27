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
</script>

<template>
  <header>
    <AppHeader/>
  </header>
  <main>
    <HeroSection/>
    <FeatureSection/>
    <ServicesSection/>
    <AdditionalInfo/>
    <PartnershipSection/>
    <ProductsSection/>
    <ProjectsSection/>
    <AboutSection/>
    <ContactSection/>
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped></style>
