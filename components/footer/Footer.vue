<template>
  <footer
    class="bg-black border-t border-footerBorder py-8 px-5 sm:px-28 flex items-center justify-center"
  >
    <div
      class="w-full max-w-[1368px] flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          src="/images/logo.webp"
          alt="VIPCLUB Logo"
          width="80"
          height="52"
          class="max-w-20 h-auto"
          loading="lazy"
          decoding="async"
        />
        <TextField textStyle="BodyBaseNormal" class="text-grayBlue">
          © {{ currentYear }} VIPCLUB. All rights reserved.
        </TextField>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="https://www.instagram.com/vipclub.lv?igsh=Mzcyc3RudG10ZW5v"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 bg-[#23272F] rounded-xl hover:bg-iconHover transition-colors duration-300"
          aria-label="Instagram"
        >
          <img
            src="/icons/instagram.svg"
            alt="Instagram"
            width="20"
            height="20"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 bg-[#23272F] rounded-xl hover:bg-iconHover transition-colors duration-300"
          aria-label="Twitter"
        >
          <img
            src="/icons/twitter.svg"
            alt="Twitter"
            width="16"
            height="16"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 bg-[#23272F] rounded-xl hover:bg-iconHover transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width="16"
            height="16"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TextField from "~/components/typography/TextField.vue";
const currentYear = new Date().getFullYear();
</script>
