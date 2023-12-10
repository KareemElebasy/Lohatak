<template>
  <nuxt-link
    :to="localePath(`/plate/1`)"
    class="plateCard p-4 bg-white flex flex-col rounded-lg min-w-[230px]"
  >
    <div class="flex items-center justify-between pb-4">
      <button class="text-primary">تم البيع</button>
      <button>
        <i class="fa-regular fa-comment-dots text-primary mx-1"></i>
        <span class="text-sm">15</span>
      </button>
    </div>
    <div class="mx-auto pb-2">
      <img class="h-full w-full" src="~assets/images/plateCard.svg" alt="" />
    </div>

    <h3 class="font-bold text-lg pb-2">لوحة مميزة للبيع</h3>

    <h4 class="font-bold text-lg mx-auto pb-4">
      <span class="text-text-gray text-base">السعر</span> : 10,000
    </h4>

    <div class="flex items-center justify-between text-text-gray pb-4">
      <button>
        <i class="fa-solid fa-location-dot text-primary mx-1"></i>
        <span class="text-sm">الرياض</span>
      </button>
      <button>
        <i class="fa-regular fa-calendar-days text-primary mx-1"></i>
        <span class="text-sm"> منذ 3 ايام </span>
      </button>
    </div>
    <div class="flex items-center justify-between gap-4">
      <button
        class="text-red-700 border-2 w-full border-red-700 px-2 py-1 rounded-[.5rem]"
      >
        {{ $t("BUTTONS.delete") }}
      </button>
      <button class="main_btn px-2 py-1 w-full">
        {{ $t("BUTTONS.edit") }}
      </button>
    </div>
  </nuxt-link>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped></style>
