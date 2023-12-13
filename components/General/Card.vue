<template>
  <nuxt-link
    :to="localePath(`/plate/${item.id}`)"
    class="plateCard p-4 bg-white flex flex-col rounded-lg min-w-[230px]"
  >
    <div class="flex items-center justify-between pb-4">
      <button>
        <i
          class="text-primary mx-1"
          :class="item.is_fave ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
        ></i>
        <span class="text-sm">{{ item.fave_count }}</span>
      </button>
      <button>
        <i class="fa-regular fa-comment-dots text-primary mx-1"></i>
        <span class="text-sm">15</span>
      </button>
    </div>

    <div class="mx-auto pb-2">
      <img
        class="h-full w-full"
        :src="item.images[0]"
        @error="setErrorImg($event)"
        alt=""
      />
    </div>
    <h3 class="font-bold text-lg pb-2">{{ item.title }}</h3>
    <h4 class="font-bold text-lg mx-auto pb-4">
      <span class="text-text-gray text-base">السعر</span> : {{ item.price }}
    </h4>
    <div class="flex items-center justify-between text-text-gray">
      <button>
        <i class="fa-solid fa-location-dot text-primary mx-1"></i>
        <span class="text-sm">{{ item?.user?.city?.name }}</span>
      </button>
      <button>
        <i class="fa-regular fa-calendar-days text-primary mx-1"></i>
        <span class="text-sm"> {{ item.created_at }}</span>
      </button>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { item } = props;

console.log(item);

function setErrorImg(e) {
  // e.target.src = "/plateCard.svg";
  e.target.src = new URL(`~/assets/images/plateCard.svg`, import.meta.url).href;
}

const localePath = useLocalePath();
</script>

<style lang="scss" scoped></style>
