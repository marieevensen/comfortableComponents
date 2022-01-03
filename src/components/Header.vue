<template>
	<header class="header">
		<RouterLink class="header__link" :to="{ name: 'home' }">Home</RouterLink>
		<RouterLink class="header__link" :to="{ name: 'todo' }">ToDo</RouterLink>
		<RouterLink class="header__link" :to="{ name: 'table' }">Table</RouterLink>
		<RouterLink class="header__link" :to="{ name: 'quiz' }">Quiz</RouterLink>
		<RouterLink class="header__link" :to="{ name: 'form' }">Form</RouterLink>
		<RouterLink class="header__link" :to="{ name: 'slideshow' }">Slideshow</RouterLink>
	</header>
</template>

<script>
</script>

<style>
	.header {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.header {
			display: flex;
			border: 2px black solid;
			padding: 1em 0em 0.4em 0em;
			width: 100%;
			justify-content: center;
		}

		.header__link {
			text-decoration: none;
			color: var(--color);
			font-weight: bold;
			margin: 0 50px;
			font-size: 1em;
		}
	}
</style>