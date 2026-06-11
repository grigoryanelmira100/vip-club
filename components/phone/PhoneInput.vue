<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="text-labelGray text-sm font-normal">
      {{ label }}
      <span v-if="required" class="text-gold">*</span>
    </label>
    <div
      :class="[
        'flex items-center bg-darkCharcoal border rounded-lg overflow-hidden focus-within:border-gold',
        error ? 'border-red-500' : 'border-darkSlate',
      ]"
    >
      <input
        type="tel"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :maxlength="20"
        class="flex-1 bg-transparent px-4 py-3 text-lightBeige text-sm font-normal placeholder:text-grayBlue focus:outline-none border-0"
        @input="handleInput"
        @blur="handleBlur"
        @keypress="handleKeyPress"
      />
    </div>
    <span v-if="error" class="text-red-500 text-sm font-normal">
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
  modelValue?: string | number;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

// Count digits in the phone number (ignoring formatting characters)
const digitCount = computed(() => {
  if (!props.modelValue) return 0;
  const digits = String(props.modelValue).replace(/\D/g, "");
  return digits.length;
});

// Validate that phone number has 7-15 digits
const isValid = computed(() => {
  const count = digitCount.value;
  return count >= 7 && count <= 15;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  // Allow only numbers, +, spaces, dashes, and parentheses
  let allowedValue = target.value.replace(/[^0-9+\s\-()]/g, "");

  // Limit to 15 digits (count digits and truncate if needed)
  const digits = allowedValue.replace(/\D/g, "");
  if (digits.length > 15) {
    // Keep only the first 15 digits, preserving formatting
    let digitCount = 0;
    allowedValue = allowedValue
      .split("")
      .filter((char) => {
        if (/\d/.test(char)) {
          digitCount++;
          return digitCount <= 15;
        }
        return true;
      })
      .join("");
  }

  emit("update:modelValue", allowedValue);
  target.value = allowedValue;
};

const handleKeyPress = (event: KeyboardEvent) => {
  // Allow numbers, +, spaces, dashes, and parentheses
  const char = String.fromCharCode(event.which || event.keyCode);
  if (!/[0-9+\s\-()]/.test(char)) {
    event.preventDefault();
  }
};

const handleBlur = () => {
  emit("blur");
};

// Expose validation state for parent components
defineExpose({
  isValid,
  digitCount,
});
</script>
