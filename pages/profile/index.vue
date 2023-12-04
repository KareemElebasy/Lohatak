<template>
  <div class="">
    <div class="bg-white rounded-lg">
      <VeeForm
        @click.stop
        as="div"
        @submit="onSubmit"
        :validation-schema="schema"
        class="w-full max-w-[600px] rounded-[25px] px-8 pt-6 pb-8 relative"
      >
        <form>
          <div class="flex flex-col gap-2">
            <div>
              <img src="~assets/images/profileheader.svg" alt="" />
              <img
                src="~assets/images/profilepict.svg"
                alt=""
                class="-mt-12 mx-4"
              />
            </div>
            <InputsBase
              :label="$t('FORMS.Placeholders.name')"
              id="name"
              name="name"
              :placeholder="$t('FORMS.Placeholders.name')"
            />
            <InputsPhone
              :label="$t('FORMS.Placeholders.phoneNumber')"
              :placeholder="$t('FORMS.Placeholders.phoneNumber')"
              code-color="text-text"
              class="mb-2"
            />

            <div
              class="card flex justify-content-center font-light border p-4 border-opacity-10 rounded-xl"
            >
              <Calendar v-model="birthdate" showIcon iconDisplay="input" />
            </div>
            <InputsBase
              :label="$t('FORMS.Placeholders.userId')"
              id="userId"
              name="userId"
              :placeholder="$t('FORMS.Placeholders.userId')"
            />
            <div class="flex items-center justify-between">
              <InputsSelect
                class="w-fit"
                id="nationality"
                name="nationality"
                :options="[
                  { name: 'Egy', code: 'egy' },
                  { name: 'KSA', code: 'ksa' },
                ]"
                :placeholder="$t('FORMS.Placeholders.nationality')"
              />
              <InputsSelect
                class="w-fit"
                id="gender"
                name="gender"
                :options="[
                  { name: 'Male', code: 'male' },
                  { name: 'Female', code: 'female' },
                ]"
                :placeholder="$t('FORMS.Placeholders.gender')"
              />
            </div>
          </div>

          <div class="mt-5">
            <button
              :disabled="btnLoading"
              class="main_btn w-full py-2 mb-2"
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
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const localePath = useLocalePath();
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  name: yup.string().required(i18n.t("FORMS.Validation.name")),
  phone_code: yup.mixed().required(),
});

const birthdate = ref("");
const phone_code = ref(null);
const btnLoading = ref(false);
const password = ref(true);
function onSubmit(e, actions) {
  btnLoading.value = true;

  const SUBMITDATA = new FormData();
  SUBMITDATA.append("phone", e.phone);
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
