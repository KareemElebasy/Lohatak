<template>
  <div class="" dir=" rtl" v-if="slider">
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :navigation="false"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="item in slider" :key="item.id">
        <div
          class="swiper-wraper bg-cover bg-no-repeat bg-center bg-fixed"
          :style="`background-image: url(${item.image});`"
        >
          <div
            class="container h-[60vh] md:h-[100vh] flex flex-col justify-center"
          >
            <div class="md:w-2/5 mt-6 md:mt-2">
              <h2
                class="text-primary md:text-start text-center font-bold text-5xl mb-6 animated zoomIn"
                data-wow-delay=".3s"
              >
                حاضر متميز <br />
                مستقبل <span class="text-white">استثماري</span>
              </h2>
              <p
                class="text-white text-base md:text-start text-center font-medium md:mb-6 mb-9 animated zoomIn"
                data-wow-delay=".6s"
              >
                تمتع بأفضل لوحات السيارات المتميزة التي تجعلك متميز امام الناس و
                تمتع بالاستثمار و البيع و الشراء من خلال لوحتك التي تقدم لك
                مميزات مثيرة .
              </p>
              <nuxt-link
                :to="localePath('/search')"
                class="main_btn py-2 px-4 block m-auto md:m-0 w-fit animated zoomIn"
                data-wow-delay=".6s"
              >
                {{ $t("BUTTONS.discoverMore") }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps(["slider"]);
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
// .header .swiper-wraper {
//   background-image: url("../../assets/images/bg-header.svg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: center;
// }
</style>
