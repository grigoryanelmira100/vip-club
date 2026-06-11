<template>
  <header
    class="bg-black md:py-8 p-5 md:px-28 flex items-center justify-start relative"
  >
    <div class="w-full flex items-center justify-between gap-4">
      <img
        src="/images/logo.webp"
        alt="VIPCLUB Logo"
        width="80"
        height="52"
        fetchpriority="high"
        decoding="async"
      />
      <!-- Desktop Button -->
      <Button
        variant="gold"
        class="hidden screen500:flex items-center gap-x-4 transition-shadow duration-300 ease-in-out hover:shadow-gold-glow"
        @click="scrollToForm"
      >
        Request Access
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from "../button/Button.vue";

const scrollToForm = () => {
  if (!import.meta.client) return;
  const element = document.getElementById("request-access-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
</script>
