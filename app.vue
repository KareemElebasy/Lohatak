<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
if (process.client) {
  const wow = await new window.WOW();
  await wow.init();
}
</script>
