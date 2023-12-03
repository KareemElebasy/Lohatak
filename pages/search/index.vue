<template>
  <div>
    <GeneralTitleHeader
      :title="'اللوحات'"
      :desc="`
        تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و تمتع
        بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك مميزات مثيرة .
      `"
    />

    <div class="bg-gradient-to-l from-gray-100 to-gray-50">
      <div class="container">
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

        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 py-6">
          <div class="hidden md:block md:col-span-1">
            <GeneralFiltersCard />
          </div>
          <div class="md:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Card v-for="item in 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref("all");
</script>

<style lang="scss">
.not_active {
  @apply bg-white text-text-gray rounded-2xl px-6 py-4;
}
.active {
  @apply text-white bg-primary opacity-30 rounded-2xl px-6 py-4 border-2 border-primary;
}
</style>
