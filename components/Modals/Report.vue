<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[100] flex justify-center items-center bg-[#0007]"
  >
    <div class="bg-white w-[24rem] p-6 rounded-md">
      <div class="flex items-center justify-between pb-2">
        <h3 class="text-lg font-bold pb-4">الإبلاغ عن اللوحة</h3>
        <button @click="$emit('close')" class="bg-light-gray px-1 rounded-lg">
          <i class="fa-solid fa-xmark text-blue"></i>
        </button>
      </div>
      <VeeForm
        @click.stop
        as="div"
        @submit="onSubmit"
        :validation-schema="schema"
      >
        <form>
          <p class="text-base pb-2">المشكلة</p>
          <InputsBase
            :label="$t('FORMS.Placeholders.reportDesc')"
            :id="`reportDesc`"
            :name="`reportDesc`"
            :type="'text'"
            :placeholder="$t('FORMS.Placeholders.reportDesc')"
          >
          </InputsBase>
          <button class="main_btn px-4 py-1 mt-2 w-3/4">
            {{ $t("BUTTONS.sendMessage") }}
          </button>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const schema = yup.object({
  reportDesc: yup.string().required(i18n.t("FORMS.Validation.reportDesc")),
});

const btnLoading = ref(false);

function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("reportDesc", e.reportDesc);

  $fetch("", {
    method: "POST",
    body: SUBMITDATA,
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      btnLoading.value = false;
      actions.resetForm();
      toast.success(res.message),
        {
          timeout: 2000,
          position:
            i18n.locale.value == "en"
              ? POSITION.BOTTOM_RIGHT
              : POSITION.BOTTOM_LEFT,
        };
    })
    .catch((err) => {
      btnLoading.value = false;
      toast.error(err.response._data.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    });
}
</script>

<style></style>
