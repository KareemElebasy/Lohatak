<template>
  <div class="w-full m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8">
        <nuxt-link class="pb-4" :to="localePath('/')">
          <img src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <h5 class="text-lg pb-4">مرحبا بك!</h5>
        <h6 class="text-lg pb-4">انشاء حساب</h6>
        <p class="text-lg text-text-gray pb-4">
          الرجاء ادخال البيانات المطلوبة لأنشاء حساب جديد
        </p>
        <h3 class="font-bold text-3xl pb-4">اجعل لوحتك تعبر عن شخصيتك</h3>

        <button class="main_btn px-2 py-1">
          {{ $t("BUTTONS.exploreMore") }}
        </button>
      </div>
      <div>
        <img src="~assets/images/bg-login.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped></style>
