<template>
  <div>
    <div
      class="flex flex-col pt-[64px] pb-[64px] px-[8px] max-w-[1200px] mx-auto"
    >
      <div class="flex flex-col">
        <div
          class="text-[40px] md:text-[56px] font-bold text-amber-500 uppercase"
        >
          karma
        </div>
        <div
          class="text-[40px] md:text-[56px] font-bold text-amber-500 uppercase"
        >
          cleaning
        </div>
        <div
          class="text-[40px] md:text-[56px] font-bold text-amber-500 uppercase"
        >
          service
        </div>
      </div>
      <div class="mt-[40px] text-[16px] md:text-[24px] text-sky-500">
        The door to karma cleaning service for yellow cats opens tomorrow
      </div>
      <div
        class="mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]"
      >
        <div
          class="flex flex-col p-[16px] items-center justify-center w-full h-full bg-zinc-900 rounded-[20px]"
        >
          <div class="text-[24px] font-bold text-amber-500">kitty-kitty</div>
          <div class="text-[18px] text-sky-500">meow-meow-meow</div>
        </div>
        <div
          class="flex flex-col p-[16px] items-center justify-center w-full h-full bg-zinc-900 rounded-[20px]"
        >
          <div class="text-[24px] font-bold text-amber-500">door</div>
          <div class="text-[18px] text-sky-500">open for you</div>
        </div>
        <div
          class="flex flex-col p-[16px] items-center justify-center w-full h-full bg-zinc-900 rounded-[20px]"
        >
          <div class="text-[24px] font-bold text-amber-500">yellow</div>
          <div class="text-[18px] text-sky-500">not blue</div>
        </div>
        <div
          class="flex flex-col p-[16px] items-center justify-center w-full h-full bg-zinc-900 rounded-[20px]"
        >
          <div class="text-[24px] font-bold text-amber-500">tomorrow</div>
          <div class="text-[18px] text-sky-500">yes please</div>
        </div>
      </div>
    </div>
    <Cats />
    <Door />
    <Yellow />
    <Tomorrow />
  </div>
</template>
