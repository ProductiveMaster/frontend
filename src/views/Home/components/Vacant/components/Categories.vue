<template>
  <section class="Categories secondary--bg">
      <span>Categorias</span>
      <div class="item item1">
        <a href="#">Frontend</a>
      </div>
      <div class="item item2">
        <a href="#">Backend</a>
      </div>
      <div class="item item3">
        <a href="#">Full Stack</a>
      </div>
      <div class="item item4">
        <a href="#">DevOps</a>
      </div>
      <div class="item item5">
        <a href="#">Data Science</a>
      </div>
      <div class="item item6">
        <a href="#">UI/UX</a>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .Categories {
    /* background: #002b53; */
    color: white;
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 0 1em;
    border-radius: 5px;
  }

  .item {
    padding: 0.5em 0;
    border: 1px solid white;
    border-radius: 5px;
    font-weight: bold;
    & a{
      color: #000;
      text-decoration: none;
    }
  }
  
  .item1 {
    background: #aeda00;
  }
  .item2 {
    background: #2490fc;
  }
  .item3 {
    background: #e8c921;
  }
  .item4 {
    background: #f97308;
  }
  .item5 {
    background: #8fe160;
  }
  .item6 {
    background: #bba1ff;
  }
</style>