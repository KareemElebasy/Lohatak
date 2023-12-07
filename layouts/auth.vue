<template>
  <Html :lang="$i18n.locale">
    <div class="flex flex-col min-h-[100vh] bg-auth">
      <div class="m-auto">
        <slot />
      </div>
    </div>
  </Html>
</template>

<script setup>
const i18n = useI18n();
const config = useRuntimeConfig();
useHead({
  titleTemplate: `%s - ${i18n.t("NAV.name")}`,
});
</script>

<style></style>
