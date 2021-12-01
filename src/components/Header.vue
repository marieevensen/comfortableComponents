<template>
  <header class="header">
    <RouterLink class="header__link" :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'todo' }">ToDo</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'table' }">Table</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'quiz' }">Quiz</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'form' }">Form</RouterLink>
    <RouterLink class="header__link" :to="{ name: 'slideshow' }">Slideshow</RouterLink>
    

    <!-- <RouterLink :to="{ name: 'Form' }">Form</RouterLink>
        <RouterLink :to="{ name: 'Slideshow' }">Slideshow</RouterLink> -->
  </header>
</template>

<script>
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
</style>