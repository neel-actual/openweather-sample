<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.glass {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  background-color: rgba(255, 255, 255, 0.75) !important;
  border-radius: 12px !important;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
