<template>
  <header class="header">
    <RouterLink class="header__link" :to="{ name: 'todo' }">ToDo</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'table' }">Table</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'quiz' }">Quiz</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'form' }">Form</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'slideshow' }"
      >Slideshow</RouterLink
    >

    <!-- <RouterLink :to="{ name: 'Form' }">Form</RouterLink>
        <RouterLink :to="{ name: 'Slideshow' }">Slideshow</RouterLink> -->
  </header>
  <!-- <main class="main">
        <div class="main__grid">
            <div class="main__grid-box">
            
            </div>
            <div class="main__grid-box">
                hei
            </div>
            <div class="main__grid-box">
                hei
            </div>
        </div>
        <div class="main__grid">
            <div class="main__grid-box">
                d
            </div>
            <div class="main__grid-box">
                d
            </div>
            <div class="main__grid-box">
                d
            </div>
        </div>
    </main> -->
</template>

<script>
// import Todo from '../views/Todo.vue'

// export default {
//     components: {
//         Todo,
//     }
// }
</script>

<style>
.header {
  border: 2px black solid;
  display: flex;
  padding: 1em 0.5em 0.5em 0.5em;
  width: 100vw;
}

.header__link {
  justify-content: space-between;
  text-align: center;
  text-decoration: none;
  color: var(--color);
  font-weight: bold;
  width: 100%;
}

.main {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 35px;
}

.main__grid {
  display: flex;
}

.main__grid-box {
  border: 1px black solid;
  justify-content: space-between;
  width: 30vw;
  height: 35vh;
  margin: 10px;
}
</style>