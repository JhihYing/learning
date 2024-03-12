<!-- 工作報表 -->
<script setup>
import { useAuthStore } from "@/stores/Auth";
const authStore = useAuthStore();
const token = authStore.accessToken;

// onMounted(async () => {
//   const getBasicPointAPI = await useFetch("/api/dept-option");
//   console.log("getBasicPointAPI", getBasicPointAPI);
// });
const getBasicPointAPI = await useFetch("/api/option", {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
console.log("getBasicPointAPI", getBasicPointAPI.data.value);
</script>

<template>
  <section>
    <h2 class="text-[24px] mb-[20px]">
      工作報表{{ getBasicPointAPI.data.value }}
    </h2>
  </section>
</template>

<style scoped></style>
