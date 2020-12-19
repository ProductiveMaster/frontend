<template>
  <div class="card application">
    {{ application }}
  </div>
</template>

<script>
export default {
  props: {
    application: Object,
  },
};
</script>

<style>
.application {
  margin-top: 10px !important;
}
</style>