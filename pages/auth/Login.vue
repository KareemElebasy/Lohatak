<template>
  <div class="w-full m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8">
        <nuxt-link class="block pb-4" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div
          class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8"
        >
          <h5 class="text-lg pb-4">مرحبا مجددا!</h5>
          <h6 class="text-lg pb-4">مرحبًا بعودتك</h6>
          <p class="text-lg text-text-gray pb-4">
            الرجاء إدخال عنوان البريد الإلكتروني الصحيح وكلمة المرور الخاصة بك
          </p>
          <VeeForm
            @click.stop
            as="div"
            @submit="onSubmit"
            :validation-schema="schema"
            class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8 relative"
          >
            <form>
              <div class="flex flex-col gap-2">
                <InputsPhone
                  :label="$t('FORMS.Placeholders.phoneNumber')"
                  :placeholder="$t('FORMS.Placeholders.phoneNumber')"
                  code-color="text-text"
                  class="mb-2"
                />
              </div>

              <div class="mt-5">
                <button
                  :disabled="btnLoading"
                  class="main_btn w-full py-2 mb-2"
                  type="submit"
                >
                  {{ $t("login") }}
                </button>

                <div class="text-center">
                  {{ $t("dontHaveAccount") }}

                  <nuxt-link
                    :to="localePath('/auth/register')"
                    class="text-start text-primary font-medium mt-4"
                  >
                    {{ $t("createAccount") }}
                  </nuxt-link>
                </div>
              </div>
            </form>
          </VeeForm>
        </div>
      </div>

      <div class="m-auto">
        <img src="~assets/images/bg-login.svg" alt="" />
      </div>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: "auth",
});

const localePath = useLocalePath();
const birthdate = ref("");
// const emit = defineEmits(["close", "forget", "new-account"]);
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const schema = yup.object({
  password: yup.string().required(i18n.t("FORMS.Validation.password")),
  cPassword: yup
    .string()
    .when("password", (password, field) =>
      password
        ? field
            .required(i18n.t("FORMS.Validation.confirmPassword"))
            .oneOf(
              [yup.ref("password")],
              i18n.t("FORMS.Validation.notEqualPasswords")
            )
        : field
    ),

  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  name: yup.string().required(i18n.t("FORMS.Validation.name")),
  phone_code: yup.mixed().required(),
});

const phone_code = ref(null);
const btnLoading = ref(false);
const password = ref(true);
function onSubmit(e, actions) {
  btnLoading.value = true;

  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("password", e.password);
  SUBMITDATA.append("phone_code", e.phone_code);
  $fetch("contact", {
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
      toast.success(res.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
      emit("close");
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
<style scoped>
.inset-xe-3 {
  inset-inline-end: 1rem;
}
</style>
