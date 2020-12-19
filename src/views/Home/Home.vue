<template>
  <div>
    <Header />
    <Sidebar />

    <main class="main-content secondary--bg"><router-view /></main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
.main-content {
  margin: 60px 0 0 300px;
  padding: 5%;
  min-height: calc(100vh - 60px);
  color: white;
  transition: 0.5s;
}

@media (max-width: 900px) {
  .main-content {
    margin: 60px 0 0 0px;
    transition: 0.5s;
  }
}
</style>