<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[100] flex justify-center items-center bg-[#0007]"
  >
    <div class="bg-white w-[28rem] p-6 rounded-md">
      <div class="m-2">
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
          <div class="flex flex-col gap-2">
            <InputsInputPhone
              :label="$t('FORMS.Placeholders.phoneNumber')"
              :placeholder="$t('FORMS.Placeholders.phoneNumber')"
              code-color="text-text"
              class="mb-2"
            >
            </InputsInputPhone>
          </div>
          <div class="mt-5">
            <button
              :disabled="btnLoading"
              class="main_btn w-full py-3 mb-4"
              type="submit"
            >
              {{ $t("BUTTONS.edit") }}
            </button>
          </div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close", "openVerifyModal"]);
// Remove After Get From API
const countriess = ref([
  {
    id: 1,
    name: "Saudi Arabia",
    image:
      "https://phpv8.aait-d.com/leak_detection/public/storage/images/countries/CUcLmKYWTzsEbBQg8Ha7l7i3QiKBPy5HROu7gzWV.png",
    phone_number_limit: 9,
    phone_code: "966",
  },
]);

import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
});

const btnLoading = ref(false);
const phone_code = ref(null);

function onSubmit(e, actions) {
  //   console.log("llslslsl",phone_code);
  //   btnLoading.value = true;
  console.log(e);
  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("_method", "PUT");
  SUBMITDATA.append("phone_code", e.phone_code);

  $fetch("api/client_web/edit_phone", {
    method: "POST",
    body: SUBMITDATA,
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${useCookie("token").value}`,
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
      useCookie("phone").value = e.phone;
      useCookie("phone_code").value = e.phone_code;
      emits("close");
      emits("openVerifyModal");
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
