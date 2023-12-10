<template>
  <div class="ads-section p-3">
    <div class="container">
      <div class="text-white text-center my-8 wow fadeIn" data-wow-delay="0.4s">
        <h2 class="text-3xl font-bold pb-2">الإعلانات</h2>
        <p class="text-base">تابع افضل العروض والإعلانات</p>
      </div>
      <Swiper
        :modules="[SwiperEffectCoverflow, SwiperNavigation]"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :navigation="true"
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
        <swiper-slide
          ><img
            class="wow zoomIn"
            data-wow-delay=".6s"
            src="~assets/images/ads-small.svg" /></swiper-slide
        ><swiper-slide
          ><img
            class="wow zoomIn"
            data-wow-delay=".6s"
            src="~assets/images/ads-large.svg" /></swiper-slide
        ><swiper-slide
          ><img
            class="wow zoomIn"
            data-wow-delay=".6s"
            src="~assets/images/ads-large.svg" /></swiper-slide
        ><swiper-slide
          ><img
            class="wow zoomIn"
            data-wow-delay=".6s"
            src="~assets/images/ads-large.svg"
        /></swiper-slide>
        ><swiper-slide
          ><img
            class="wow zoomIn"
            data-wow-delay=".6s"
            src="~assets/images/ads-large.svg"
        /></swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  // padding-bottom: 100px;
  .swiper-slide {
    img {
      @apply block w-full my-auto;
    }
    .swiper-slide-active {
      img {
        @apply w-3/5;
      }
    }
    .swiper-slide-prev {
      img {
        @apply w-3/5 h-10;
      }
    }
    .swiper-slide-next {
      img {
        @apply w-3/5 h-10;
      }
    }
  }
}
.swiper-rtl {
  .swiper-button-prev {
    @apply text-white border-2 border-white rounded-2xl px-16 py-6 m-20;
  }
  .swiper-button-next {
    @apply text-white border-2 border-white rounded-2xl px-16 py-6 m-20;
  }
}
.ads-section {
  padding: 50px 0;
  background-image: url("../../assets/images/bg-ads.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
