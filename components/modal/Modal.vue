<script setup lang="ts">
import { watch, onUnmounted } from "vue";
import Button from "../button/Button.vue";
import TextField from "../typography/TextField.vue";

interface Props {
  show: boolean;
  type: "success" | "error";
  errorMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  errorMessage: "",
});

const emit = defineEmits<{
  (e: "close"): void;
  (e: "tryAgain"): void;
}>();

const close = () => {
  emit("close");
};

const tryAgain = () => {
  emit("tryAgain");
};

const maxWidthClass = "max-w-lg";
const successIconPath = "/icons/success.svg";
const failedIconPath = "/icons/failed.svg";

const lockBodyScroll = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const unlockBodyScroll = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
};

watch(
  () => props.show,
  (isOpen) => {
    if (isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  unlockBodyScroll();
});
</script>

<template>
  <transition leave-active-class="duration-200">
    <div
      v-if="show"
      key="modal-root"
      class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center px-4 py-6"
    >
      <!-- Backdrop overlay -->
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-75 z-40"
          @click="close"
        />
      </transition>

      <!-- Modal content -->
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="relative z-50 transform transition-all w-full"
          :class="maxWidthClass"
          @click.stop
        >
          <div
            class="w-full flex flex-col items-center gap-y-7 bg-darkCharcoal p-6 sm:py-8 sm:px-12 rounded-[20px]"
          >
            <div class="w-full relative flex items-center justify-center">
              <!-- Icon - Centered -->
              <div v-if="type === 'success'">
                <img
                  :src="successIconPath"
                  alt="Success"
                  width="84"
                  height="84"
                  class="max-w-[70px] max-h-[70px] md:max-w-[84px] md:max-h-[84px] w-full h-full"
                />
              </div>
              <div v-else>
                <img
                  :src="failedIconPath"
                  alt="Failed"
                  width="87"
                  height="87"
                  class="max-w-[70px] max-h-[70px] md:max-w-[84px] md:max-h-[84px] w-full h-full"
                />
              </div>
              <!-- Close icon - Top right corner -->
              <img
                src="/icons/close.svg"
                alt="Close Icon"
                width="20"
                height="20"
                class="absolute top-0 right-0 hover:cursor-pointer"
                @click="close"
              />
            </div>

            <!-- Content -->
            <div class="flex flex-col items-center gap-y-2">
              <!-- Success Content -->
              <template v-if="type === 'success'">
                <TextField
                  textStyle="Body2xlNormal"
                  class="text-grayBlue text-center"
                >
                  Thank you for your interest
                </TextField>
                <TextField
                  textStyle="BodyxlNormal"
                  class="text-grayBlue text-center"
                >
                  We will contact you soon
                </TextField>
              </template>

              <!-- Error Content -->
              <template v-else>
                <TextField
                  v-if="errorMessage"
                  textStyle="Body2xlNormal"
                  class="text-grayBlue text-center"
                >
                  {{ errorMessage }}
                </TextField>
                <TextField
                  textStyle="BodyxlNormal"
                  class="text-grayBlue text-center"
                >
                  Please check your details and try again.
                </TextField>
              </template>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col gap-3 w-full">
              <!-- Success Buttons -->
              <template v-if="type === 'success'">
                <a href="https://vipclubpreview.com/" target="_blank">
                  <Button
                    variant="gold"
                    class="flex items-center justify-center gap-x-4 transition-shadow duration-300 ease-in-out hover:shadow-gold-glow w-full"
                  >
                    See Preview
                  </Button>
                </a>
                <Button variant="default" class="w-full" @click="close">
                  Close
                </Button>
              </template>

              <!-- Error Buttons -->
              <template v-else>
                <Button
                  variant="gold"
                  class="flex items-center justify-center gap-x-4 transition-shadow duration-300 ease-in-out hover:shadow-gold-glow w-full"
                  @click="tryAgain"
                >
                  Try Again
                </Button>
                <Button variant="default" class="w-full" @click="close">
                  Close
                </Button>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
