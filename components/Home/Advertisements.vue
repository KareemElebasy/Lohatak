<template>
  <div class="ads-section p-3">
    <div class="container">
      <div class="text-white text-center">
        <h2 class="text-3xl font-bold pb-2">الإعلانات</h2>
        <p class="text-base">تابع افضل العروض والإعلانات</p>
      </div>
      <Swiper
        :modules="[SwiperEffectCoverflow, SwiperPagination]"
        :grabCursor="true"
        :center="true"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
        :pagination="true"
      >
        <swiper-slide><img src="~assets/images/ads-small.svg" /></swiper-slide
        ><swiper-slide><img src="~assets/images/ads-large.svg" /></swiper-slide
        ><swiper-slide><img src="~assets/images/ads-large.svg" /></swiper-slide
        ><swiper-slide><img src="~assets/images/ads-large.svg" /></swiper-slide>
        ><swiper-slide><img src="~assets/images/ads-large.svg" /></swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.swiper {
  //   width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  @apply w-3/5 h-[300px];
}
.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-slide .swiper-slide-next {
  @apply min-h-[250px];
}
.swiper-slide .swiper-slide-prev {
  @apply w-1/5  h-[150px];
}
.ads-section {
  background-image: url("../../assets/images/bg-ads.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
