<template>
  <div>
    <GeneralTitleHeader :title="'تواصل معنا'" :desc="`تواصل معنا `" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const i18n = useI18n();

const { data: terms } = await useFetch(
  `${config.public.baseURL}api/general/contacts`,
  {
    headers: {
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${useCookie("token").value}`,
    },
    params: {
      type: "terms-conditions",
    },
  }
);
</script>

<style lang="scss" scoped></style>
