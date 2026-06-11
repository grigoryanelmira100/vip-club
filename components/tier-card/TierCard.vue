<template>
  <div
    class="w-full max-w-[350px] self-stretch flex flex-col items-center bg-obsidian gap-y-3 p-2 sm:p-3 rounded-xl border border-tierBorder"
  >
    <div class="flex flex-col items-center gap-y-3 text-center flex-grow">
      <TextField textStyle="Body2xlBold" class="text-tierGold">
        {{ title }}
      </TextField>
      <TextField textStyle="BodySmNormal" class="text-tierGray">
        {{ text }}
      </TextField>
    </div>
    <Button variant="tier" class="mt-auto">
      <TextField textStyle="BodySmNormal" class="text-nowrap">
        {{ buttonText }}
      </TextField>
    </Button>
  </div>
</template>

<script setup lang="ts">
import TextField from "~/components/typography/TextField.vue";
import Button from "~/components/button/Button.vue";

defineProps<{
  title: string;
  text: string;
  buttonText: string;
}>();
</script>
