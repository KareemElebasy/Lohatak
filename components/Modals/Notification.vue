<template>
  <div
    class="fixed bg-[#00000048] top-0 left-0 w-screen h-screen z-[100]"
    @click="emit('close')"
  >
    <div class="container flex justify-end">
      <div
        class="py-6 px-4 bg-white rounded-2xl max-h-[450px] w-full max-w-[400px] top-24 relative"
      >
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-xl font-bold">
            {{ $t("notifications") }}
          </h2>
          <button type="button">
            <i class="fa-solid text-red-500 fa-trash"></i>
          </button>
        </div>
        <div class="py-2 space-y-7 max-h-[350px] overflow-y-auto mt-3">
          <div v-for="item in 4" class="flex gap-3 items-center">
            <div
              class="w-10 h-10 bg-primary rounded-lg flex justify-center items-center"
            >
              <img
                width="13"
                height="20"
                src="~/assets/media/icons/window.png"
                alt="window"
              />
            </div>
            <div>
              <h3 class="text-text text-lg font-bold">
                لقد تمت الخدمة قم بالدفع الان!
              </h3>
              <p class="text-text-light">تم تحديد تكلفة الخدمة قم بالدفع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
</script>
