<script setup lang="ts">
import { ref, computed } from "vue";
export type TextStyle =
  | "Body9xlNormal"
  | "Body6xlNormal"
  | "Body2xlNormal"
  | "Body2xlBold"
  | "BodylgNormal"
  | "BodyxlNormal"
  | "BodyBaseNormal"
  | "BodySmNormal";
const props = defineProps<{
  textStyle: TextStyle;
  value?: string | number;
  className?: string;
}>();

const textRef = ref<null>(null);

const styleClass = computed(() => {
  let baseClass = props.className ? `${props.className} ` : "";
  switch (props.textStyle) {
    case "Body9xlNormal":
      baseClass += "text-7xl md:text-8xl 2xl:text-9xl font-normal";
      break;
    case "Body6xlNormal":
      baseClass += "text-5xl xl:text-6xl font-normal";
      break;
    case "Body2xlNormal":
      baseClass += "text-xl md:text-2xl font-normal";
      break;
    case "Body2xlBold":
      baseClass += "text-xl md:text-2xl font-bold";
      break;
    case "BodyxlNormal":
      baseClass += "text-lg md:text-xl font-normal";
      break;
    case "BodylgNormal":
      baseClass += "text-base md:text-lg font-normal";
      break;
    case "BodyBaseNormal":
      baseClass += "text-sm sm:text-base font-normal";
      break;
    case "BodySmNormal":
      baseClass += "text-sm font-normal";
      break;
  }
  return baseClass;
});

defineExpose({ textRef });
</script>

<template>
  <div :class="styleClass" ref="textRef">
    <slot>
      {{ props.value }}
    </slot>
  </div>
</template>
