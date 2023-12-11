<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
if (process.client) {
  const wow =  new window.WOW();
   wow.init();
}
</script>
