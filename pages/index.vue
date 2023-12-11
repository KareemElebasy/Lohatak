<template>
  <div v-if="!slider">
    <Loading />
  </div>
  <div>
    <HomeHeader :slider="slider" />
    <HomePlatesTypes
      :categories="categories"
      :ads="ads"
      @filteredItems="
        (e) => {
          console.log(e.catId);
          category_ids = e.catId;
          console.log(category_ids);
          refresh();
        }
      "
    />
    <HomeAdvertisements />
    <HomeExpressionOfPersonality />
    <HomeBlogsSection />
    <HomeAppDownload />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const i18n = useI18n();
let category_ids = ref(8);

const slider = ref(null);
const categories = ref(null);
const ads = ref(null);
const homeData = ref(null);

const { data, refresh } = await useAsyncData("homeData", () =>
  $fetch(`${config.public.baseURL}api/client_web/home`, {
    headers: {
      "Accept-Language": i18n.locale.value,
    },
    params: {
      "category_ids[0]": category_ids.value,
    },
  }).then((res) => {
    const data = res.data;
    homeData.value = res.data;
    slider.value = res.data.slider;
    categories.value = res.data.categories;
    ads.value = res.data.ads;
  })
);
</script>

<style lang="scss" scoped></style>
