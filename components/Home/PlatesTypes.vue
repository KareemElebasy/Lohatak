<template>
  <div
    v-if="categories"
    class="bg-gradient-to-l from-gray-100 to-gray-50 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div class="container pt-12 pb-12">
      <div
        class="text-center md:w-1/2 mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h2 class="text-black font-bold text-2xl pb-2">اللوحات</h2>
        <p class="text-text-gray">
          تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و تمتع
          بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك مميزات مثيرة .
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-2 items-center justify-center py-6">
          <button
            @click="isActive = `all`"
            class="min-h-[64px]"
            :class="isActive == `all` ? 'active_btn' : 'not_active_btn'"
          >
            الكل
          </button>
          <div
            v-for="item in categories"
            :key="item.id"
            @click="
              () => {
                isActive = `${item.type}`;
                catId = item.id;
                getParamsId();
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
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <GeneralCard
            v-for="item in ads"
            :key="item.id"
            :item="item"
            class="wow zoomIn"
            data-wow-delay="0.6s"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["categories", "ads"]);
const emits = defineEmits(["filteredItems"]);

const route = useRoute();

const isActive = ref("all");

let catId = ref(null);

function getParamsId() {
  emits("filteredItems", { catId });
}
</script>

<style lang="scss"></style>
