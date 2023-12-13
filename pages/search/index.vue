<template>
  <div>
    <GeneralTitleHeader
      :title="'اللوحات'"
      :desc="`
        تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و تمتع
        بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك مميزات مثيرة .
      `"
    />

    <div class="bg-gradient-to-l from-gray-100 to-gray-50" v-if="advertisement">
      <div class="container">
        <!-- <div class="flex flex-wrap gap-2 items-center justify-center py-6">
          <button
            @click="isActive = 'all'"
            :class="isActive == 'all' ? 'active' : 'not_active'"
          >
            الكل
          </button>
          <button
            @click="isActive = 'special'"
            :class="isActive == 'special' ? 'active' : 'not_active'"
          >
             خصوصي
          </button>
          <button
            @click="isActive = 'private'"
            :class="isActive == 'private' ? 'active' : 'not_active'"
          >
             نقل خاص
          </button>
          <button
            @click="isActive = 'motocycle'"
            :class="isActive == 'motocycle' ? 'active' : 'not_active'"
          >
             دراجات نارية
          </button>
        </div> -->
        <div class="flex flex-wrap gap-2 items-center justify-center py-3">
          <button
            @click="isActive = `all`"
            class="min-h-[64px]"
            :class="isActive == `all` ? 'active_btn' : 'not_active_btn'"
          >
            الكل
          </button>
          <div
            v-for="item in categories.data"
            :key="item.id"
            @click="
              () => {
                isActive = `${item.type}`;
                handleSubBar(item.sub_categories);
              }
            "
            class="flex items-center justify-center gap-1 cursor-pointer"
            :class="
              isActive == `${item.type}` ? 'active_btn' : 'not_active_btn'
            "
          >
            <p>
              {{ item.title }}
            </p>
            <img class="w-8" :src="item.ads_image" alt="" />
          </div>
        </div>
        <div
          v-if="sub_categories"
          class="flex flex-wrap gap-2 items-center justify-center py-1"
        >
          <button
            v-for="item in sub_categories"
            :key="item.id"
            @click="isActiveSub = item.type"
            class="min-h-[64px]"
            :class="
              isActiveSub == `${item.type}` ? 'active_btn' : 'not_active_btn'
            "
          >
            {{ item.title }}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 py-6">
          <div
            class="hidden md:block md:col-span-1 wow zoomIn"
            data-wow-delay=".5s"
          >
            <GeneralFiltersCard  />
          </div>
          <div class="md:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <GeneralCard
                v-for="item in advertisement"
                :key="item.id"
                :item="item"
                class="wow zoomIn"
                data-wow-delay="0.6s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref("all");
const isActiveSub = ref(null);

const config = useRuntimeConfig();
const i18n = useI18n();
const advertisement = ref(null);
const { data, refresh } = await useAsyncData("adsData", () =>
  $fetch(`${config.public.baseURL}api/client_web/advertisement`, {
    headers: {
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${useCookie("token").value}`,
    },
    params: {
      sorted_by: "old_new",
      "category_ids[0]": 9,
      "sub_category_ids[0]": 13,
    },
  }).then((res) => {
    console.log(res);
    advertisement.value = res.data;
    console.log(advertisement);
  })
);

const { data: categories } = await useAsyncData("categories", () =>
  $fetch(`${config.public.baseURL}api/client_web/category`, {
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
);
console.log(categories.value.data);

const sub_categories = ref(null);
const handleSubBar = (categories) => {
  console.log(categories);
  sub_categories.value = categories;
};
</script>

<style lang="scss">
.not_active {
  @apply bg-white text-text-gray rounded-2xl px-6 py-4;
}
.active {
  @apply text-white bg-primary opacity-30 rounded-2xl px-6 py-4 border-2 border-primary;
}
</style>
