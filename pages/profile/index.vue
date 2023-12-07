<template>
  <div v-if="store" class="">
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
              :placeholder="store?.userInformation?.username"
            />
            <div class="flex gap-2 items-center">
              <InputsBase
                :label="$t('FORMS.Placeholders.phone')"
                :id="`phone`"
                :name="`phone`"
                :type="'text'"
                :placeholder="store?.userInformation?.phone"
              >
              </InputsBase>
              <InputsSelect
                class="w-fit"
                :id="`phone_code`"
                name="phone_code"
                :options="[
                  { name: 'Ksa', code: '966' },
                  { name: 'UAE', code: '965' },
                ]"
                :placeholder="$t('FORMS.Placeholders.city')"
              />
            </div>

            <div class="font-light border p-4 border-opacity-10 rounded-xl">
              <VeeField
                name="date_of_birth"
                v-model="date_of_birth"
                v-slot="{ field, meta }"
              >
                <div>
                  <Calendar
                    v-bind="field"
                    showIcon
                    dateFormat="dd-mm-yy"
                    inputId="date_of_birth"
                  />
                </div>
                <VeeErrorMessage
                  v-if="!meta.valid && meta.touched"
                  name="date_of_birth"
                  as="div"
                  class="error"
                />
              </VeeField>
            </div>

            <InputsBase
              :label="$t('FORMS.Placeholders.userId')"
              :id="`ID_number`"
              :name="`ID_number`"
              :type="'text'"
              :placeholder="store?.userInformation?.ID_number"
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


// Fetch User Data
import { useGlobalDataStore } from "../stores/globalData";

const store = useGlobalDataStore();

//Start Edit Profile
const schema = yup.object({
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  username: yup.string().required(i18n.t("FORMS.Validation.name")),
  date_of_birth: yup
    .string()
    .required(i18n.t("FORMS.Validation.date_of_birth")),
  phone_code: yup.mixed().required(i18n.t("FORMS.Validation.phone_code")),
  ID_number: yup.string().required(i18n.t("FORMS.Validation.ID_number")),
  gender: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
  city: yup.mixed().required(i18n.t("FORMS.Validation.gender")),
});

const birthdate = ref("");
const phone_code = ref(null);
const date_of_birth = ref(null);

const btnLoading = ref(false);
const password = ref(true);
function onSubmit(e, actions) {
  btnLoading.value = true;
  const SUBMITDATA = new FormData();
  const date_of_birth_formated = e.date_of_birth.toISOString().slice(0, 10);
  console.log(e);
  SUBMITDATA.append("username", e.username);
  SUBMITDATA.append("phone_code", e.phone_code.value);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append("gender", e.gender.value);
  SUBMITDATA.append("city_id", e.city.value);
  SUBMITDATA.append("ID_number", e.ID_number);
  SUBMITDATA.append("date_of_birth", date_of_birth_formated);
  SUBMITDATA.append("_method", "PUT");
  console.log(SUBMITDATA);
  $fetch("api/client_web/profile_edit", {
    body: SUBMITDATA,
    method:'PUT',
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
