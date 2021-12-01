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
  padding: 1em 0em 0.4em 0em;
  width: 100vw;
  text-align: center;
}

.header__link {
  text-decoration: none;
  color: var(--color);
  font-weight: bold;
  width: 100%;
  margin: 0em 2em;
}
</style>