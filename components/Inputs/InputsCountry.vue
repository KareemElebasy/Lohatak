<template>
  <div>
    <VeeField :id="id" :type="type" :name="name" v-slot="{ meta }">
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
            class="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem
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
    </VeeField>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useField } from "vee-validate";
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

<style lang="scss" scoped></style>
