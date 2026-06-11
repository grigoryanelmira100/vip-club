<template>
  <div class="bg-darkBlack relative">
    <Modal
      :show="showModal"
      :type="modalType"
      :errorMessage="modalErrorMessage"
      @close="closeModal"
      @tryAgain="handleTryAgain"
      @seePreview="handleSeePreview"
    />
    <div
      class="company-hero-bg w-full flex flex-col xl:flex-row items-center justify-center bg-cover bg-center bg-no-repeat gap-x-16 ps-5 pt-10 sm:pt-15 md:ps-28"
    >
      <div
        class="w-full flex flex-col items-start justify-center gap-y-8 lg:mb-20 max-w-[677px]"
      >
        <span
          class="inline-flex items-center gap-2 border border-darkSlate bg-darkGray rounded-full py-2 px-4 text-sm font-normal text-lightBeige"
        >
          <span class="w-2 h-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          Limited Early Access
        </span>
        <h1
          class="text-7xl md:text-8xl 2xl:text-9xl font-normal uppercase font-bebas leading-none tracking-title"
        >
          <span class="block text-white">HURRY — DON'T </span>
          <span class="block bg-gradient-spot bg-clip-text text-transparent">
            MISS YOUR SPOT
          </span>
        </h1>
        <p
          class="w-full text-xl md:text-2xl font-normal text-grayBlue sm:mt-4"
        >
          A faster, modern VIPCLUB experience is coming.
        </p>
        <p class="w-full text-base md:text-lg font-normal text-mutedGray">
          Same Game Parlays, one-click deposits, and zero-friction betting.
        </p>
        <Button
          variant="gold"
          class="flex items-center gap-x-4 uppercase transition-shadow mb-10 sm:mb-0 duration-300 ease-in-out hover:shadow-gold-glow"
          @click="scrollToForm"
          >Request Early Access
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Icon"
            width="16"
            height="16"
          />
        </Button>
      </div>
      <div class="self-end">
        <img
          src="/images/casino.webp"
          alt="VIPCLUB Casino Experience"
          width="900"
          height="525"
          class="hidden sm:block max-w-full h-auto"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </div>

    <div
      class="company-bonus-bg cv-auto flex justify-center items-center px-5 py-12 lg:px-20 lg:py-28 bg-cover bg-center bg-no-repeat"
    >
      <div
        class="max-w-[1340px] w-full flex flex-col items-center text-center gap-y-7"
      >
        <div
          class="flex items-center gap-2 border border-darkSlate bg-darkGray rounded-full py-2 px-4"
        >
          <div class="w-2 h-2 bg-gold rounded-full"></div>
          <TextField textStyle="BodySmNormal" class="text-lightBeige">
            Limited Early Access</TextField
          >
        </div>
        <TextField
          textStyle="Body9xlNormal"
          class="w-full font-bebas text-white leading-none tracking-title block bg-clip-text text-transparent"
        >
          Welcome Bonus!
        </TextField>
        <TextField textStyle="Body2xlNormal" class="text-grayBlue">
          No deposit required. Limited capacity -premium tiers are not for
          everyone. Once these fill, new entrants won’t have access to the same
          benefits.
        </TextField>
        <div
          class="w-full flex items-center justify-center flex-wrap gap-x-6 gap-y-4"
        >
          <TierCard
            v-for="(tier, index) in tierData"
            :key="index"
            :title="tier.title"
            :text="tier.text"
            :buttonText="tier.buttonText"
          />
        </div>
      </div>
    </div>
    <div
      class="cv-auto bg-darkCharcoal py-20 flex items-center justify-center px-5"
    >
      <div
        class="max-w-[937px] w-full flex flex-col items-center justify-center gap-8"
      >
        <div
          class="flex flex-col items-center text-center justify-center gap-4"
        >
          <TextField
            textStyle="Body6xlNormal"
            class="text-white font-bebas uppercase"
          >
            Early Access Progress
          </TextField>
          <TextField textStyle="BodyBaseNormal" class="text-grayBlue">
            Spots are limited and filled gradually. Access is approved in waves.
          </TextField>
        </div>

        <div class="w-full flex flex-col items-center gap-6">
          <div class="w-full flex flex-col gap-4">
            <div
              class="relative w-full h-3 bg-darkSlate rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-gradient-gold rounded-full transition-all duration-1000 ease-out"
                :style="{ width: progressWidth + '%' }"
              ></div>
            </div>
            <div class="flex justify-between items-center">
              <TextField textStyle="BodySmNormal" class="text-grayBlue">
                0 spots
              </TextField>
              <TextField textStyle="BodySmNormal" class="text-grayBlue">
                {{ Math.round(progressWidth) }}% Filled
              </TextField>
              <TextField textStyle="BodySmNormal" class="text-grayBlue">
                Limited
              </TextField>
            </div>
          </div>

          <div class="w-full flex justify-center items-center gap-6 flex-wrap">
            <InfoCard
              v-for="card in statsCards"
              :key="card.id"
              :icon="card.icon"
              :number="card.number"
              :text="card.text"
            />
          </div>

          <div
            class="w-[273px] flex items-center gap-2 px-4 py-2 bg-[#2D2A1E] border border-goldBorder rounded-lg"
          >
            <div class="w-2 h-2 rounded-full bg-gold"></div>
            <TextField textStyle="BodySmNormal" class="text-gold">
              Once full, requests will be paused
            </TextField>
          </div>
        </div>
      </div>
    </div>

    <div
      id="request-access-form"
      class="cv-auto flex flex-col 2xl:flex-row items-center justify-center gap-16 bg-black py-20 px-5 md:px-8 2xl:ps-0"
    >
      <img
        src="/images/laptop.webp"
        alt="VIPCLUB Early Access"
        width="1600"
        height="1664"
        class="hidden 2xl:block w-full max-w-[981px] h-auto"
        loading="lazy"
        decoding="async"
      />
      <div class="flex flex-col gap-6 w-full max-w-[770px]">
        <div class="flex flex-col items-center text-center gap-3 mb-4">
          <TextField textStyle="Body6xlNormal" class="uppercase font-bebas">
            <span class="text-white">REQUEST </span>
            <span class="bg-gradient-gold bg-clip-text text-transparent"
              >EARLY ACCESS</span
            >
          </TextField>
          <TextField textStyle="BodyBaseNormal" class="text-grayBlue">
            Join the early access list to be considered for priority access.
          </TextField>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-4">
            <Input
              v-model="formData.firstName"
              label="First Name"
              placeholder="John"
              required
              :maxlength="255"
              :error="
                touchedFields.firstName ? validationErrors.firstName : undefined
              "
              @blur="handleFieldBlur('firstName')"
              @update:modelValue="(val) => handleFieldInput('firstName', val)"
            />
            <Input
              v-model="formData.lastName"
              label="Last Name"
              placeholder="Doe"
              :maxlength="255"
              :error="
                touchedFields.lastName ? validationErrors.lastName : undefined
              "
              @blur="handleFieldBlur('lastName')"
              @update:modelValue="(val) => handleFieldInput('lastName', val)"
            />
          </div>
          <Input
            v-model="formData.email"
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            required
            :error="touchedFields.email ? validationErrors.email : undefined"
            @blur="handleFieldBlur('email')"
            @update:modelValue="(val) => handleFieldInput('email', val)"
          />
          <PhoneInput
            v-model="formData.phone"
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            required
            :error="touchedFields.phone ? validationErrors.phone : undefined"
            @blur="handleFieldBlur('phone')"
            @update:modelValue="(val) => handleFieldInput('phone', val)"
          />

          <div class="flex flex-col gap-3">
            <TextField textStyle="BodySmNormal" class="text-labelGray">
              What matters most to you in the new VIPCLUB experience?
            </TextField>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="(tag, index) in formTags"
                :key="index"
                type="button"
                :class="[
                  'px-4 py-2 rounded-full border transition-colors',
                  selectedTags === tag
                    ? 'bg-gold/20 border-gold text-lightBeige'
                    : 'bg-darkCharcoal border-darkSlate text-grayBlue hover:border-gold/50',
                ]"
                @click="toggleTag(tag)"
              >
                <TextField textStyle="BodySmNormal" class="text-current">
                  {{ tag }}
                </TextField>
              </button>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <input
              v-model="agreedToTerms"
              type="checkbox"
              id="terms-checkbox"
              class="checkbox-custom"
              required
            />
            <label for="terms-checkbox" class="flex-1 cursor-pointer">
              <TextField textStyle="BodySmNormal" class="text-white">
                I agree to receive platform-related emails from VIP Club,
                including early access updates and account notifications. I can
                unsubscribe at any time. I also accept the
                <a
                  href="https://vipaccesscenter.com/terms-of-service.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="terms-link"
                >
                  Terms of Service
                </a>
                and
                <a
                  href="https://vipaccesscenter.com/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="terms-link"
                >
                  Privacy Policy
                </a>
              </TextField>
            </label>
          </div>
          <Button
            type="submit"
            variant="gold"
            :class="[
              'flex items-center justify-center gap-x-4 transition-all duration-300 ease-in-out',
              !isFormValid || isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:shadow-gold-glow',
            ]"
            :disabled="!isFormValid || isSubmitting"
          >
            {{ isSubmitting ? "SUBMITTING..." : "REQUEST ACCESS" }}
            <img
              v-if="!isSubmitting"
              src="/icons/arrow-right.svg"
              alt="Arrow Icon"
              width="16"
              height="16"
            />
          </Button>
        </form>
      </div>
    </div>

    <div
      class="cv-auto w-full flex flex-col items-center justify-center px-5 py-20 gap-y-8 bg-black md:gap-y-16 mx-auto border-gradient-top"
    >
      <div class="flex flex-col items-center gap-y-4 text-center">
        <TextField
          textStyle="Body6xlNormal"
          class="w-full uppercase font-bebas"
        >
          <span class="text-white">What's </span>
          <span class="bg-gradient-gold bg-clip-text text-transparent"
            >Coming</span
          >
        </TextField>

        <TextField textStyle="BodyBaseNormal" class="text-grayBlue">
          Built for speed, simplicity, and better betting.</TextField
        >
      </div>

      <div class="flex flex-wrap gap-6 justify-center">
        <FeatureCard
          v-for="(feature, index) in featuresData"
          :key="index"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>

    <div
      class="cv-auto flex flex-col items-center justify-center gap-y-8 px-5 py-24 border-gradient-top bg-black relative"
    >
      <div class="flex flex-col items-center gap-y-6">
        <div class="p-4 bg-[#262117] rounded-full shadow-gold-glow">
          <img
            src="/icons/secure.svg"
            alt="Secure Icon"
            width="32"
            height="32"
          />
        </div>
        <TextField
          textStyle="Body6xlNormal"
          class="w-full uppercase text-center font-bebas leading-none tracking-title"
        >
          <span class="block text-white"> Early Access </span>
          <span class="block bg-gradient-gold bg-clip-text text-transparent">
            Won't stay open
          </span>
        </TextField>

        <div class="text-center">
          <TextField textStyle="BodylgNormal" class="text-grayBlue">
            Limited access. First come, first approved.</TextField
          >
          <TextField textStyle="BodylgNormal" class="text-grayBlue">
            Early access spots are limited and released in waves.</TextField
          >
        </div>
        <Button
          variant="gold"
          class="flex items-center gap-x-4 transition-shadow duration-300 ease-in-out hover:shadow-gold-glow"
          @click="scrollToForm"
        >
          Secure Your Spot
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Icon"
            width="16"
            height="16"
          />
        </Button>
        <div class="flex justify-center items-center flex-wrap gap-6">
          <div
            v-for="(item, index) in featureBullets"
            :key="item.id"
            class="flex items-center gap-2"
          >
            <div class="w-[6px] h-[6px] rounded-full bg-gold"></div>
            <TextField textStyle="BodyBaseNormal" class="text-grayBlue">
              {{ item.text }}
            </TextField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import Button from "~/components/button/Button.vue";
import FeatureCard from "~/components/card/FeatureCard.vue";
import InfoCard from "~/components/info-card/InfoCard.vue";
import Input from "~/components/input/Input.vue";
import Modal from "~/components/modal/Modal.vue";
import PhoneInput from "~/components/phone/PhoneInput.vue";
import TextField from "~/components/typography/TextField.vue";
import TierCard from "~/components/tier-card/TierCard.vue";
import {
  featureBullets,
  featuresData,
  formTags,
  statsCards,
  tierData,
} from "~/constants/data";
import { formSchema } from "~/validation/formSchema";

defineProps({
  theme: {
    type: String,
    default: "default",
  },
});

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const agreedToTerms = ref(false);
const selectedTags = ref<string | null>(null);
const progressWidth = ref(0);
const isSubmitting = ref(false);
const fieldErrors = ref<Record<string, string[]>>({});
const validationErrors = ref<Record<string, string>>({});
const touchedFields = ref<Record<string, boolean>>({});
const showModal = ref(false);
const modalType = ref<"success" | "error">("success");
const modalErrorMessage = ref("");

const getErrorMessage = (errors: Record<string, string[]>): string => {
  const errorMessages = Object.values(errors).flat();
  return errorMessages.length > 0 ? errorMessages[0] : "";
};

const config = useRuntimeConfig();
const API_URL = config.public.apiUrl;
const nuxtApp = useNuxtApp();
const $getFingerprint = nuxtApp.$getFingerprint as (() => Promise<string>) | undefined;
const getVisitorId = (): string => {
  if (typeof globalThis === "undefined") return "";
  const storage = (globalThis as any).localStorage;
  if (!storage) return "";

  const storedId = storage.getItem("visitorId");
  if (storedId) {
    return storedId;
  }

  const newId = `visitor_${Date.now()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  storage.setItem("visitorId", newId);
  return newId;
};

const getVisitCount = (): number => {
  if (typeof globalThis === "undefined") return 0;
  const storage = (globalThis as any).localStorage;
  if (!storage) return 0;

  const stored = storage.getItem("visitCount");
  return stored ? parseInt(stored, 10) : 0;
};

const incrementVisitCount = (): void => {
  if (typeof globalThis === "undefined") return;
  const storage = (globalThis as any).localStorage;
  if (!storage) return;

  const currentCount = getVisitCount();
  const newCount = currentCount + 1;
  storage.setItem("visitCount", newCount.toString());

  const currentProgress = progressWidth.value;
  const newProgress = Math.min(currentProgress + 2, 100);
  progressWidth.value = newProgress;
};

const checkAndIncrementProgress = (): void => {
  if (typeof globalThis === "undefined") return;
  const storage = (globalThis as any).localStorage;
  if (!storage) return;

  const visitorId = getVisitorId();
  const lastVisitTime = storage.getItem(`lastVisit_${visitorId}`);
  const now = Date.now();

  const visitThreshold = 5 * 60 * 1000;

  if (!lastVisitTime || now - parseInt(lastVisitTime, 10) > visitThreshold) {
    incrementVisitCount();
    storage.setItem(`lastVisit_${visitorId}`, now.toString());
  } else {
    const visitCount = getVisitCount();
    const calculatedProgress = Math.min(visitCount * 2, 100);
    progressWidth.value = calculatedProgress;
  }
};

const toggleTag = (tag: string) => {
  if (selectedTags.value === tag) {
    selectedTags.value = null;
  } else {
    selectedTags.value = tag;
  }
};

const getUTMFromUrl = (): Record<string, string | null> => {
  const utmMaxLengths: Record<string, number> = {
    utm_source: 100,
    utm_medium: 100,
    utm_campaign: 150,
    utm_term: 150,
    utm_content: 150,
  };

  const utm: Record<string, string | null> = {};
  Object.keys(utmMaxLengths).forEach((key) => {
    utm[key] = null;
  });

  if (typeof window === "undefined" || !window.location) {
    return utm;
  }

  const urlParams = new URLSearchParams(window.location.search);

  Object.keys(utmMaxLengths).forEach((key) => {
    const value = urlParams.get(key);
    if (value && value.trim()) {
      const trimmedValue = value.trim();
      const maxLength = utmMaxLengths[key];
      utm[key] =
        trimmedValue.length > maxLength
          ? trimmedValue.substring(0, maxLength)
          : trimmedValue;
    }
  });

  return utm;
};

const validateField = async (fieldName: string, value: string) => {
  try {
    await formSchema.validateAt(fieldName, { [fieldName]: value });
    if (validationErrors.value[fieldName]) {
      delete validationErrors.value[fieldName];
    }
  } catch (err: any) {
    validationErrors.value[fieldName] = err.message;
  }
};

const handleFieldBlur = (fieldName: string) => {
  touchedFields.value[fieldName] = true;
  const value = formData.value[
    fieldName as keyof typeof formData.value
  ] as string;
  const trimmedValue = value?.trim() || "";
  validateField(fieldName, trimmedValue);
};

const handleFieldInput = (fieldName: string, value: string) => {
  if (fieldName === "email") {
    if (!touchedFields.value[fieldName]) {
      touchedFields.value[fieldName] = true;
    }
    validateField(fieldName, value.trim());
  } else if (touchedFields.value[fieldName]) {
    validateField(fieldName, value.trim());
  }
};

const isFormValid = computed(() => {
  const hasErrors = Object.keys(validationErrors.value).length > 0;
  const phoneDigits = formData.value.phone.trim().replace(/\D/g, "");
  const phoneValid = phoneDigits.length >= 7 && phoneDigits.length <= 15;

  const allFieldsFilled =
    formData.value.firstName.trim() &&
    formData.value.email.trim() &&
    formData.value.phone.trim() &&
    phoneValid;

  return !hasErrors && allFieldsFilled && agreedToTerms.value;
});

const closeModal = () => {
  showModal.value = false;
  modalErrorMessage.value = "";
};

const handleTryAgain = () => {
  showModal.value = false;
  modalErrorMessage.value = "";
};

const handleSeePreview = () => {
  showModal.value = false;
};

const scrollToForm = () => {
  if (!import.meta.client) return;
  const element = document.getElementById("request-access-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const handleSubmit = async () => {
  validationErrors.value = {};
  touchedFields.value = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  };

  try {
    await formSchema.validate(
      {
        firstName: formData.value.firstName.trim(),
        lastName: formData.value.lastName.trim(),
        email: formData.value.email.trim(),
        phone: formData.value.phone.trim(),
      },
      { abortEarly: false },
    );
  } catch (err: any) {
    if (err.inner) {
      const errors: Record<string, string> = {};
      err.inner.forEach((error: any) => {
        if (error.path) {
          errors[error.path] = error.message;
        }
      });
      validationErrors.value = errors;
    }
    isSubmitting.value = false;
    return;
  }

  isSubmitting.value = true;

  try {
    const firstNameValue = formData.value.firstName.trim();
    const firstName =
      firstNameValue.length > 255
        ? firstNameValue.substring(0, 255)
        : firstNameValue;

    const lastNameValue = formData.value.lastName.trim();
    const lastName =
      lastNameValue.length > 255
        ? lastNameValue.substring(0, 255)
        : lastNameValue || null;

    const name = lastName ? `${firstName} ${lastName}`.trim() : firstName;
    const whatsImportantRaw = selectedTags.value || null;
    const whatsImportant =
      whatsImportantRaw && whatsImportantRaw.length > 255
        ? whatsImportantRaw.substring(0, 255)
        : whatsImportantRaw;

    const phoneValue = formData.value.phone.trim();

    const location =
      typeof globalThis !== "undefined" ? (globalThis as any).location : null;
    const landingUrlRaw = location?.href || "";
    const landingUrl =
      landingUrlRaw.length > 255
        ? landingUrlRaw.substring(0, 255)
        : landingUrlRaw;
    const emailValue = formData.value.email.trim();
    const email =
      emailValue.length > 255 ? emailValue.substring(0, 255) : emailValue;

    const utmParams = getUTMFromUrl();
    // Get fingerprint
    let fingerprint = "";
    if ($getFingerprint) {
      try {
        fingerprint = await $getFingerprint();
      } catch {}
    }
    const payload = {
      email: email,
      name: name,
      first_name: firstName,
      last_name: lastName,
      phone: phoneValue,
      whats_important: whatsImportant,
      landing_url: landingUrl,
      fingerprint,
      ...utmParams,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = {
        ok: false,
        errors: { server: ["Invalid JSON response."] },
        raw: text,
      };
    }

    if (response.ok && data && data.ok) {
      formData.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };
      selectedTags.value = null;
      agreedToTerms.value = false;
      validationErrors.value = {};
      touchedFields.value = {};
      incrementVisitCount();
      modalType.value = "success";
      showModal.value = true;
    } else {
      modalType.value = "error";
      if (data?.errors) {
        fieldErrors.value = data.errors;
        modalErrorMessage.value = getErrorMessage(data.errors);
      } else {
        modalErrorMessage.value = "An error occurred. Please try again.";
      }
      showModal.value = true;
    }
  } catch (err) {
    modalType.value = "error";
    modalErrorMessage.value =
      "Network error. Please check your connection and try again.";
    showModal.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

if (import.meta.client) {
  const checkAndScroll = async () => {
    if (route.hash === "#request-access-form") {
      await nextTick();

      setTimeout(() => {
        scrollToForm();
      }, 300);
    }
  };

  onMounted(() => {
    checkAndIncrementProgress();
    const finalProgress = progressWidth.value;
    progressWidth.value = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressWidth.value = finalProgress;
      });
    });

    checkAndScroll();
  });

  watch(
    () => route.hash,
    (newHash) => {
      if (newHash === "#request-access-form") {
        setTimeout(() => {
          scrollToForm();
        }, 300);
      }
    },
  );
} else {
  onMounted(() => {
    checkAndIncrementProgress();
    const finalProgress = progressWidth.value;
    progressWidth.value = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progressWidth.value = finalProgress;
      });
    });
  });
}
</script>

<style scoped>
.checkbox-custom {
  appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 2px solid #efac1f;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox-custom:hover {
  border-color: #efac1f;
  box-shadow: 0 0 0 2px rgba(239, 172, 31, 0.1);
}

.checkbox-custom:checked {
  background-color: #3f3c37;
  border-color: #efac1f;
}

.checkbox-custom:checked::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5px;
  height: 9px;
  border: solid #efac1f;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -55%) rotate(45deg);
}

.terms-link {
  color: #e0a239;
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.terms-link:hover {
  opacity: 0.8;
}

.company-hero-bg {
  background-image: url("/images/hurry-bg-mob.webp");
  contain: layout style;
}

@media (min-width: 768px) {
  .company-hero-bg {
    background-image: url("/images/hurry-bg.webp");
  }
}

.cv-auto {
  content-visibility: auto;
  contain-intrinsic-size: 1px 480px;
}

.company-bonus-bg {
  background-image: url("/images/bonus-mob-bg.webp");
}

@media (min-width: 640px) {
  .company-bonus-bg {
    background-image: url("/images/bonus-tablet-bg.webp");
  }
}

@media (min-width: 1280px) {
  .company-bonus-bg {
    background-image: url("/images/bonus-bg.webp");
  }
}
</style>
