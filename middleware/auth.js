export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  if (!token.value && to.fullPath === "/profile") {
    return navigateTo("/auth/login");
  }


  // if (token.value) {
  //   if (
  //     to.fullPath === "/auth/login" ||
  //     to.fullPath === "/auth/verify" ||
  //     to.fullPath === "/auth/register"
  //   ) {
  //     navigateTo("/");
  //   }
  // }

  
  if (token.value && to.fullPath === "/auth/login") {
    return navigateTo("/");
  }

  if (token.value && to.fullPath === "/auth/verify") {
    return navigateTo("/");
  }
  if (token.value && to.fullPath === "/auth/register") {
    return navigateTo("/");
  }
});
