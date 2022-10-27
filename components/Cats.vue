<template>
  <div
    id="promo_cats_id"
    class="pt-[64px] pb-[64px] px-[8px] min-h-[800px] max-w-[1200px] mx-auto"
  >
    <div class="text-[32px] font-bold text-amber-500">Cats</div>
    <div class="flex flex-col md:flex-row gap-x-[32px] mt-[40px]">
      <div class="flex flex-col w-full md:w-1/2">
        <div class="text-[24px] font-bold text-amber-500">
          Picture removal detract earnest is by
        </div>
        <div class="mt-[24px] text-[18px] text-sky-500">
          Esteems met joy attempt way clothes yet demesne tedious. Replying an
          marianne do it an entrance advanced. Two dare say play when hold.
          Required bringing me material stanhill jointure is as he. Mutual
          indeed yet her living result matter him bed whence.
        </div>
      </div>
      <div class="flex flex-col w-full md:w-1/2 mt-[32px] md:mt-0">
        <div class="flex">
          <div class="text-amber-500"><IconHive class="text-green-500" /></div>
          <div class="flex flex-col ml-[16px]">
            <div class="text-[20px] font-semibold text-amber-500">
              Instrument cultivated
            </div>
            <div class="mt-[12px] text-[16px] text-sky-500">
              Far stairs now coming bed oppose hunted become his. You zealously
              departure had procuring suspicion. Books whose front would purse
              if be do decay.
            </div>
          </div>
        </div>
        <div class="flex mt-[24px]">
          <div class="text-amber-500">
            <IconPedalBike class="text-green-500" />
          </div>
          <div class="flex flex-col ml-[16px]">
            <div class="text-[20px] font-semibold text-amber-500">
              Performed suspicion
            </div>
            <div class="mt-[12px] text-[16px] text-sky-500">
              Newspaper or in tolerably education enjoyment. Extremity excellent
              certainty discourse sincerity no he so resembled. Joy house worse
              arise total boy but.
            </div>
          </div>
        </div>
        <div class="flex mt-[24px]">
          <div class="text-amber-500">
            <IconHistoryEdu class="text-green-500" />
          </div>
          <div class="flex flex-col ml-[16px]">
            <div class="text-[20px] font-semibold text-amber-500">
              Prepared is me marianne
            </div>
            <div class="mt-[12px] text-[16px] text-sky-500">
              Wonder an unable except better stairs do ye admire. His and eat
              secure sex called esteem praise.
            </div>
          </div>
        </div>
        <div class="flex mt-[24px]">
          <div class="text-amber-500">
            <IconLocalFlorist class="text-green-500" />
          </div>
          <div class="flex flex-col ml-[16px]">
            <div class="text-[20px] font-semibold text-amber-500">
              But why smiling man
            </div>
            <div class="mt-[12px] text-[16px] text-sky-500">
              Chiefly can man her out believe manners cottage colonel unknown.
              Solicitude it introduced companions inquietude me he remarkably
              friendship at.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-[80px]">
      <ClientOnly>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="40"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          @swiper="onSwiperCats"
          class="flex justify-center w-[500px]"
        >
          <swiper-slide
            v-for="item in catsPhotos"
            :key="item.url"
            class="flex justify-center"
          >
            <div class="w-[600px] h-[400px]">
              <img :src="item.url" />
            </div>
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiperInstances = reactive({
  swiperCatsInstance: {} as typeof Swiper,
});

const catsPhotos = ref([
  {
    url: "cat-g5bc8efedb_640.jpg",
  },
  {
    url: "cat-g7c52ce6f8_640.jpg",
  },
  {
    url: "cat-g282a8832a_640.jpg",
  },
  {
    url: "cat-gb52e4c930_640.jpg",
  },
  {
    url: "kitten-g9c1fee90b_640.jpg",
  },
]);

const onSwiperCats = (swiper) => {
  swiperInstances.swiperCatsInstance = swiper;
};

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
</script>
