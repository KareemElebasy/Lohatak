<template>
  <div
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
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <GeneralCard
            class="wow zoomIn"
            data-wow-delay="0.6s"
            v-for="item in 6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref("all");
</script>

<style lang="scss"></style>
