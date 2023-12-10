<template>
  <div class="w-full wow animate fadeInLeftBig" data-wow-delay=".2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="px-8 wow animate bounceIn" data-wow-delay=".2s">
        <nuxt-link class="block pb-4" :to="localePath('/')">
          <img class="w-fit" src="~assets/images/logo1.svg" alt="" />
        </nuxt-link>
        <div class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8">
          <h5 class="text-lg pb-4">التحقق من الرمز</h5>
          <p class="text-lg text-text-gray pb-4">
            لقد أرسلنا للتو رمز التحقق المكون من 4 أرقام إلى الرقم0000000 966+
            أدخل الرمز في المربع أدناه للمتابعة.
          </p>
          <VeeForm
            v-if="verify"
            @click.stop
            as="div"
            @submit="onVerify"
            class="w-full max-w-[600px] pt-6 pb-8 mb-4"
          >
            <form>
              <div
                class="input_wrapper otp_inputs justify-between"
                :class="!validation.valid && validation.touched ? 'error' : ''"
              >
                <v-otp-input
                  ref="otpInput"
                  input-classes="otp-input"
                  separator="-"
                  v-model="code"
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
                class="main_btn w-full mt-11 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {{ $t("BUTTONS.confirm") }}
              </button>
            </form>
          </VeeForm>
        </div>
      </div>

      <div class="m-auto">
        <img
          class="wow animate fadeInLeftBig"
          data-wow-delay=".5s"
          src="~assets/images/bg-login.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  middleware: "auth",
});
import VOtpInput from "vue3-otp-input";
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const localePath = useLocalePath();
const verify = ref(true);
const code = ref("");
const token = useCookie();
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const schema = yup.object({
  code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
});

const btnLoading = ref(false);

function onVerify(e, actions) {
  verify.value = false;
  const SUBMITDATA = new FormData();

  SUBMITDATA.append("phone_code", useCookie("phone_code").value);
  SUBMITDATA.append("phone", useCookie("phone").value);
  SUBMITDATA.append("code", code.value);
  SUBMITDATA.append("device_token", useCookie("device_token").value);
  SUBMITDATA.append("type", "ios");

  $fetch("api/client_web/verify_Phone", {
    method: "POST",
    body: SUBMITDATA,
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      console.log(res.data.token);
      btnLoading.value = false;
      actions.resetForm();
      toast.success(res.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
      useCookie("token").value = res.data.token;
      navigateTo("/");
    })
    .catch((err) => {
      btnLoading.value = false;
      verify.value = true;
      toast.error(err.response._data.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    });
}
const validation = reactive({
  valid: false,
  touched: false,
});

function handleOnComplete(event) {
  validation.touched = false;
  validation.valid = true;
  code.value = event;
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

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  input::placeholder {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
  }
}

/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
