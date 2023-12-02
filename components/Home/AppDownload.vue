<template>
  <div
    class="container grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 items-center"
  >
    <div>
      <h2 class="text-4xl font-bold pb-4">
        تطبيق <span class="text-primary">لوحتك</span>
      </h2>
      <p class="text-3xl font-bold pb-4">قم بتجربة مميزات تطبيق لوحتي</p>
      <p class="text-sm text-text-gray pb-6">
        قم بزيارة المتجر وحمّل التطبيق الأول لتداول اللوحات في السعودية
      </p>
      <div class="flex gap-4 items-center w-fit">
        <nuxt-link to="/"
          ><img src="~assets/images/applestore.svg" alt=""
        /></nuxt-link>
        <nuxt-link to="/"
          ><img src="~assets/images/googlestore.svg" alt=""
        /></nuxt-link>
      </div>
    </div>

    <div>
      <img src="~assets/images/app-download.svg" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
