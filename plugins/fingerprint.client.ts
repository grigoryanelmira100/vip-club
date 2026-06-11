import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default defineNuxtPlugin(async () => {
  const fp = await FingerprintJS.load();

  const getFingerprint = async (): Promise<string> => {
    try {
      const result = await fp.get();
      return result.visitorId;
    } catch {
      return "";
    }
  };

  return {
    provide: {
      getFingerprint,
    },
  };
});
