export default defineNuxtRouteMiddleware((to, from) => {
  const nuxt = useNuxtApp();
  console.log(to);
  const token = useCookie("token");
  if (!token.value && to.fullPath === nuxt.$localePath("/profile")) {
    return navigateTo(nuxt.$localePath("/auth/login"));
  }
  if (!token.value && to.fullPath === nuxt.$localePath("/add-advertisement")) {
    return navigateTo(nuxt.$localePath("/"));
  }
  if (!token.value && to.fullPath === nuxt.$localePath("//auth/verify")) {
    return navigateTo(nuxt.$localePath("/"));
  }
});
