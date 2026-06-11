<template>
  <div class="store-layout">
    <Header />
    <main class="layout-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/footer/Footer.vue";
import Header from "~/components/header/Header.vue";
</script>
