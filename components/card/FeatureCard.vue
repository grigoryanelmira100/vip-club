<template>
  <div
    class="sm:max-w-[324px] w-full flex flex-col items-start gap-y-5 bg-darkCharcoal p-6 border border-darkSlate rounded-2xl"
  >
    <div
      class="flex items-center justify-center rounded-xl bg-brown p-3 sm:p-3.5"
    >
      <img
        :src="icon"
        :alt="title"
        width="28"
        height="28"
        class="w-6 h-6 sm:w-auto sm:h-auto"
      />
    </div>
    <div class="flex flex-col items-start gap-y-1">
      <TextField
        textStyle="Body2xlNormal"
        class="text-white text-nowrap uppercase font-bebas"
      >
        {{ title }}
      </TextField>
      <TextField textStyle="BodySmNormal" class="text-grayBlue">
        {{ description }}
      </TextField>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "~/components/typography/TextField.vue";

defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
