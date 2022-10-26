import { defineStore } from "pinia";

export const useCommonStore = defineStore({
  id: "common-store",
  state: () => {
    return {
      currentPromoSectionId: "",
      sidebarRightShow: false,
      dialogRequestAuditShow: false,
      dialogTemplateExamplesShow: false,
      cookieConsent: true,
    };
  },
  actions: {
    checkCookieConsent() {
      try {
        const storedCookieConsent = localStorage.getItem("cookie_consent");
        if (storedCookieConsent && storedCookieConsent === "true") {
          this.cookieConsent = true;
        } else {
          this.cookieConsent = false;
        }
      } catch (error) {
        console.log(error);
        this.cookieConsent = true;
      }
    },
  },
  getters: {
    getCurrentPromoSectionId: (state) => state.currentPromoSectionId,
  },
});
