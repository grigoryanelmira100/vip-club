<template>
  <div
    class="w-full sm:w-[296px] flex flex-col items-center gap-3 py-6 px-6 bg-[#1D1F25] border border-[#242730] rounded-xl"
  >
    <img :src="icon" :alt="text" width="32" height="32" class="w-6 h-6" />
    <div class="flex flex-col items-center gap-1">
      <TextField textStyle="Body2xlNormal" class="text-white">
        {{ number }}
      </TextField>
      <TextField textStyle="BodySmNormal" class="text-grayBlue">
        {{ text }}
      </TextField>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "~/components/typography/TextField.vue";

defineProps<{
  icon: string;
  number: string;
  text: string;
}>();
</script>
