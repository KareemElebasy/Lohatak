<template>
  <div class="w-full m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8">
        <nuxt-link class="block pb-4" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8">
          <h5 class="text-lg pb-4">التحقق من الرمز</h5>
          <p class="text-lg text-text-gray pb-4">
            لقد أرسلنا للتو رمز التحقق المكون من 4 أرقام إلى الرقم0000000 966+
            أدخل الرمز في المربع أدناه للمتابعة.
            <VeeForm
              @click.stop
              as="div"
              @submit="onVerify"
              class="w-full max-w-[600px] px-8 pt-6 pb-8 mb-4 relative"
            >
              <form>
                <div
                  class="input_wrapper otp_inputs justify-between w-full mx-auto"
                  :class="
                    !validation.valid && validation.touched ? 'error' : ''
                  "
                >
                  <v-otp-input
                    ref="otpInput"
                    input-classes="otp-input"
                    separator=" "
                    v-model="verify_code"
                    :num-inputs="4"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                  />
                  <p class="text-red-500 text-sm mb-0"></p>
                </div>

                <button
                  type="submit"
                  :disabled="!validation.valid || btnLoading"
                  class="main_btn w-full mt-11 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {{ $t("BUTTONS.confirm") }}
                </button>
              </form>
            </VeeForm>
          </p>
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
import VOtpInput from "vue3-otp-input";
import { useField } from "vee-validate";
const verify = ref(true);
const changePass = ref(false);

const verify_code = ref("");
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  verify_code: yup.mixed().required(i18n.t("FORMS.Validation.verify")),
});

const btnLoading = ref(false);

function onVerify() {
  // btnLoading.value = true;
  verify.value = false;
  changePass.value = true;
  // emit("change-password");
  // changePass.value = true;

  // const SUBMITDATA = new FormData();
  // SUBMITDATA.append("verify_code", e.verify_code);

  // $fetch("contact", {
  //   method: "POST",
  //   body: SUBMITDATA,
  //   baseURL: config.public.baseURL,
  //   headers: {
  //     "Accept-Language": i18n.locale.value,
  //   },
  // })
  //   .then((res) => {
  //     btnLoading.value = false;

  //     actions.resetForm();
  //     toast.success(res.message, {
  //       timeout: 2000,
  //       position:
  //         i18n.locale.value == "en"
  //           ? POSITION.BOTTOM_RIGHT
  //           : POSITION.BOTTOM_LEFT,
  //     });
  //     emit("close");
  //   })
  //   .catch((err) => {
  //     btnLoading.value = false;
  //     toast.error(err.response._data.message, {
  //       timeout: 2000,
  //       position:
  //         i18n.locale.value == "en"
  //           ? POSITION.BOTTOM_RIGHT
  //           : POSITION.BOTTOM_LEFT,
  //     });
  //   });
}
const schema2 = yup.object({
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
});

const validation = reactive({
  valid: false,
  touched: false,
});

function handleOnComplete(event) {
  validation.touched = false;
  validation.valid = true;
  verify_code.value = event;
}
function handleOnChange() {
  validation.touched = true;
  validation.valid = false;
}
</script>
<style lang="scss">
.inset-xe-3 {
  inset-inline-end: 1rem;
}
.otp_inputs {
  & > div {
    @apply justify-start gap-1;
    & > div {
      @apply me-3 last:me-0;
      input {
        @apply text-center border-black font-bold text-xl;
      }
    }
  }
}
</style>
