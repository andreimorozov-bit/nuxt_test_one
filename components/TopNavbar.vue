<template>
  <div
    class="flex sticky top-0 z-20 w-full px-[12px] sm:px-3 md:px-2 h-[64px] justify-center md:justify-center items-center bg-black text-neutral-200"
  >
    <div class="flex w-[1200px] pb-[2px] justify-between items-center">
      <div
        class="cursor-pointer text-bold text-fuchsia-500 font-bold text-[22px] uppercase hover:text-fuchsia-400 transition"
        @click="handleLogoClick"
      >
        fancy logo
      </div>
      <div class="flex justify-between w-fit md:w-[440px] 2lg:w-[440px]">
        <div
          class="xl:mx-0 hidden md:block cursor-pointer text-teal-500 hover:text-teal-400 transition"
          @click="handleCatsClick"
        >
          Cats
        </div>
        <div
          class="hidden md:block cursor-pointer text-teal-500 hover:text-teal-400 transition"
          @click="handleDoorClick"
        >
          Door
        </div>
        <div
          class="hidden md:block cursor-pointer text-teal-500 hover:text-teal-400 transition"
          @click="handleYellowClick"
        >
          Yellow
        </div>
        <div
          class="hidden md:block cursor-pointer text-teal-500 hover:text-teal-400 transition"
          @click="handleTomorrowClick"
        >
          Tomorrow
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "~/stores/common";
const commonStore = useCommonStore();
const router = useRouter();

const scrollToSection = () => {
  setTimeout(() => {
    if (commonStore.currentPromoSectionId.length > 0) {
      const currentPromoSectionOffsetTop = document.getElementById(
        commonStore.currentPromoSectionId
      ).offsetTop;

      window.scroll({
        top: currentPromoSectionOffsetTop,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  }, 100);
};

const handleLogoClick = () => {
  commonStore.currentPromoSectionId = "";
  if (router.currentRoute.value.path === "/") {
    scrollToSection();
  } else {
    router.push("/");
    scrollToSection();
  }
};

const handleCatsClick = () => {
  commonStore.currentPromoSectionId = "promo_cats_id";
  if (router.currentRoute.value.path === "/") {
    scrollToSection();
  } else {
    router.push("/");
    scrollToSection();
  }
};

const handleDoorClick = () => {
  commonStore.currentPromoSectionId = "promo_door_id";
  if (router.currentRoute.value.path === "/") {
    scrollToSection();
  } else {
    router.push("/");
    scrollToSection();
  }
};

const handleYellowClick = () => {
  commonStore.currentPromoSectionId = "promo_yellow_id";
  if (router.currentRoute.value.path === "/") {
    scrollToSection();
  } else {
    router.push("/");
    scrollToSection();
  }
};

const handleTomorrowClick = () => {
  commonStore.currentPromoSectionId = "promo_tomorrow_id";
  if (router.currentRoute.value.path === "/") {
    scrollToSection();
  } else {
    router.push("/");
    scrollToSection();
  }
};

const handleMenuClick = () => {
  commonStore.sidebarRightShow = true;
};
</script>
