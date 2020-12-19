<template>
  <div class="CategoriesContainer">
    <section class="Categories card">
      <div class="item item1">
        <a href="#">Frontend</a>
      </div>
      <div class="item item2">
        <a href="#">Backend</a>
      </div>
      <div class="item item4">
        <a href="#">DevOps</a>
      </div>
      <div class="item item3">
        <a href="#">Full Stack</a>
      </div>
      <div class="item item5">
        <a href="#">Data Science</a>
      </div>
      <div class="item item6">
        <a href="#">UI/UX</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.CategoriesContainer {
  margin-bottom: 1em;
  &--title {
    font-size: 1.5em;
  }
}
.Categories {
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  // justify-content: space-around;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
  margin-top: 0.5em;
}

.item {
  padding: 0.5em 1em;
  border: 1px solid white;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  a {
    color: #000;
    text-decoration: none;
  }

  cursor: pointer;
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
// 1084

// @media (max-width: 750px){
@media (max-width: 1063px) {
  .Categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>