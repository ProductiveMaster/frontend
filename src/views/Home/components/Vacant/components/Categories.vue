<template>
  <div class="CategoriesContainer">
    <section class="Categories card">
      <a @click="$emit('updateCategory', 'Frontend')">
        <div class="item item1">Frontend</div>
      </a>
      <a @click="$emit('updateCategory', 'Backend')">
        <div class="item item2">Backend</div>
      </a>
      <a @click="$emit('updateCategory', 'Full Stack')">
        <div class="item item3">Full Stack</div>
      </a>
      <a @click="$emit('updateCategory', 'DevOps')">
        <div class="item item4">DevOps</div>
      </a>
      <a @click="$emit('updateCategory', 'Data Science')">
        <div class="item item5">Data Science</div>
      </a>
      <a @click="$emit('updateCategory', 'UI/UX')">
        <div class="item item6">UI/UX</div>
      </a>
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
  color: #000;
  a {
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
  background: #ff6363;
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