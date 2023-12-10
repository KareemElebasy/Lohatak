<template>
  <div
    class="container grid gap-8 my-12 grid-cols-1 md:grid-cols-2 items-center wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div>
      <h2 class="text-4xl font-bold pb-4 wow zoomIn" data-wow-delay="0.2s">
        تطبيق <span class="text-primary">لوحتك</span>
      </h2>
      <p class="text-3xl font-bold pb-4 wow zoomIn" data-wow-delay="0.3s">
        قم بتجربة مميزات تطبيق لوحتي
      </p>
      <p class="text-sm text-text-gray pb-6 wow zoomIn" data-wow-delay="0.4s">
        قم بزيارة المتجر وحمّل التطبيق الأول لتداول اللوحات في السعودية
      </p>
      <div
        class="flex gap-4 items-center w-fit wow fadeIn"
        data-wow-delay="0.6s"
      >
        <nuxt-link to="/"
          ><img src="~assets/images/applestore.svg" alt=""
        /></nuxt-link>
        <nuxt-link to="/"
          ><img src="~assets/images/googlestore.svg" alt=""
        /></nuxt-link>
      </div>
    </div>

    <div>
      <img
        class="wow zoomIn"
        data-wow-delay="0.9s"
        src="~assets/images/app-download.svg"
        alt=""
      />
    </div>
    
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
