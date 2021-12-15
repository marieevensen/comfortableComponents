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
		border: 2px black solid;
		width: 100vw;
		text-align: center;
		padding: 5px 0;
	}

	.header__link {
		text-decoration: none;
		color: var(--color);
		font-weight: bold;
		font-size: 0.5em;
		margin: 0 10px;
	}

	@media screen and (min-width: 768px) {
		.header {
			border: 2px black solid;
			padding: 1em 0em 0.4em 0em;
			width: 100%;
			text-align: center;
			justify-content: none;
		}

		.header__link {
			text-decoration: none;
			color: var(--color);
			font-weight: bold;
			margin: 0em 2em;
			font-size: 1em;
		}
	}
</style>