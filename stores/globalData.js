export const useGlobalDataStore = defineStore("globalData", () => {
  const userInformation = ref(null);
  const config = useRuntimeConfig();
  const fetchUserData = async () => {
    try {
      const res = await $fetch(
        `${config.public.baseURL}api/client_web/profile`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Accept-language": "ar",
            Authorization: `Bearer ${useCookie("token").value}`,
          },
        }
      );
      userInformation.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchUserData,
    userInformation,
  };
});
