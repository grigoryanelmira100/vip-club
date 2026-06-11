<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="text-labelGray text-sm font-normal">
      {{ label }}
      <span v-if="required" class="text-gold">*</span>
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :maxlength="maxlength"
      :class="inputClass"
      @input="handleInput"
      @blur="handleBlur"
    />
    <span v-if="error" class="text-red-500 text-sm font-normal">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  modelValue?: string | number;
  className?: string;
  error?: string;
  maxlength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  required: false,
  className: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

const inputClass = computed(() => {
  const errorBorder = props.error ? "border-red-500" : "border-darkSlate";
  return `bg-darkCharcoal border ${errorBorder} rounded-lg px-4 py-3 text-lightBeige text-sm font-normal placeholder:text-grayBlue focus:outline-none focus:border-gold ${props.className}`;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const handleBlur = () => {
  emit("blur");
};
</script>

