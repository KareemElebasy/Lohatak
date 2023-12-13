<template>
  <div class="phone_wrapper flex gap-2 items-center">
    <VeeField
      id="phone_code"
      type="text"
      name="phone_code"
      v-slot="{ field, meta }"
    >
      <div>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="font-light border p-4 border-opacity-10 rounded-xl"
            >
              <div class="flex items-center justify-center gap-1">
                <p>+{{ country.phone_code }}</p>
                <img class="w-6" :src="country.image" alt="" />
              </div>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute z-10 right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem
                  v-bind="field"
                  v-slot="{ active }"
                  v-for="item in countries.data"
                  :key="item.id"
                  as="div"
                >
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                    @click="
                      country = item;
                      phone_code.setValue(item.phone_code);
                    "
                  >
                    <div class="flex items-center justify-center gap-1">
                      <img class="w-6" :src="item.image" alt="" />
                      <p>+{{ item.phone_code }}</p>
                    </div>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <VeeErrorMessage
          v-if="!meta.valid && meta.touched"
          name="phone_code"
          as="div"
          class="text-red-500 text-sm"
        />
      </div>
    </VeeField>
    <VeeField type="phone" name="phone" v-slot="{ field, meta }">
      <div
        class="input_wrapper flex-1 flex-col mb-0"
        :class="(!meta.valid && meta.touched ? 'error' : '', classes)"
      >
        <div>
          <input
            type="phone"
            id="phone"
            v-bind="field"
            :placeholder="placeholder"
            class="font-light border p-4 border-opacity-10 rounded-xl w-full"
            :class="
              !meta.valid &&
              meta.touched &&
              'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
            "
          />
          <VeeErrorMessage
            name="phone"
            as="div"
            class="text-red-500 text-sm mb-2"
          />
        </div>
      </div>
    </VeeField>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";

const disabled = ref(true);
defineProps({
  placeholder: {
    required: true,
  },
  label: {
    required: true,
  },
  classes: {
    required: false,
  },
  phoneColor: {
    required: false,
  },
  codeColor: {
    required: false,
    default: "text-white",
  },
});

const config = useRuntimeConfig();
const i18n = useI18n();

const phone_code = useField("phone_code");
const country = ref(null);
const { data: countries } = await useFetch(
  `${config.public.baseURL}api/general/countries`,
  {
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  }
);
console.log(countries);
watch(
  countries,
  (value) => {
    if (value) {
      country.value = value.data[0];
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style lang="scss">
.help.is-danger {
  @apply text-red-700 text-sm;
  font-size: 14px !important;
}
.phone_wrapper {
  @apply relative;

  .input_wrapper {
    // direction: ltr;
    @apply relative flex;
    input {
      @apply text-sm;
    }
  }
}

body[dir="rtl"] {
  .phone_wrapper {
    .input_wrapper {
      > div {
        @apply order-2;
      }
      input {
        @apply order-1;
        // direction: rtl;
      }
    }
  }
}
</style>
