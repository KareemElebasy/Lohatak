<template>
  <div class="bg-gradient">
    <GeneralTitleHeader
      :title="'اللوحات'"
      :desc="`جميع المداونات التي علي المنصة`"
    />
    <div class="container py-8">
      <h2 class="font-bold text-2xl pb-6">{{ $t("NAV.blog") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogCard v-for="item in 9" class="wow animate bounceInUp" data-wow-delay=".6s" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
