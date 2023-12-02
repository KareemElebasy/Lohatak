<template>
  <div class="bg-gradient-to-l from-gray-100 to-gray-50">
    <div class="container pt-12 pb-12">
      <div class="text-center md:w-1/2 mx-auto">
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
          <Card v-for="item in 6" />
        </div>
      </div>
    </div>
    <button @click="openToast" class="main_btn px-2 py-1">toast</button>
  </div>

  <div class="container">
    <button @click="openModal" class="main_btn px-2 py-1">OpenConfirm</button>

    <div v-if="showModal">
      <ModalConfirm @close="closeModal"></ModalConfirm>
    </div>
  </div>
</template>

<script setup>
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const i18n = useI18n();
const isActive = ref("all");

const showModal = ref(false);

const openToast = () => {
  toast.success("Added", {
    timeout: 2000,
    position:
      i18n.locale.value == "en" ? POSITION.BOTTOM_RIGHT : POSITION.BOTTOM_LEFT,
  });
};
const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};
</script>

<style lang="scss"></style>
