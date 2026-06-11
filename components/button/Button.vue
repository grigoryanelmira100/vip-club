<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "gold" | "default" | "tier";
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "gold",
  className: "",
});

const baseStyles = "rounded-lg transition-colors duration-300 ease-in-out";

const variants: Record<string, string> = {
  gold: " bg-gradient-gold whitespace-nowrap text-black px-10 py-3 hover:cursor-pointer",
  default: " text-grayBlue whitespace-nowrap hover:cursor-pointer",
  tier: "w-full py-3 px-4 border border-darkGoldBorder bg-darkGoldBg text-tierGold hover:cursor-pointer",
};

const buttonClass = computed(() => {
  const base = `${baseStyles} ${variants[props.variant]} ${props.className}`;
  return base;
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent | TouchEvent): void;
}>();
</script>

<template>
  <button
    :type="props.type"
    :class="buttonClass"
    @click="emit('click', $event)"
    @touch="emit('click', $event)"
  >
    <slot />
  </button>
</template>
