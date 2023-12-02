<template>
  <div>
    <GeneralTitleHeader
      :title="'لوحاتي'"
      :desc="`اللوحات الخاصة بك التي قمت بإضافتها من قبل `"
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
          <div class="hidden md:block md:col-span-1">1</div>
          <div class="md:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <MyPlatesCard v-for="item in 8" />
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

<style lang="scss" scoped></style>
