<template>
	<main class="home-todo">
		<input class="home-todo__input" type="text" placeholder="Add your task here" v-model="task"/>
			
		<button class="home-todo__add-button" @click="addTask">
			Add
		</button>
			
		
		<section class="home-todo__tasks" v-for="task in tasks">
			<button class="home-tasks__delete-button" @click="deleteTask(index)">
				X
			</button>

			<label class="home-tasks__text" name="task">{{ task.text }}</label>

			<input type="checkbox" for="task"/>
		</section>		
	</main>
</template>

<script>
	export default {
		data() {
			return {
				tasks: []
				}
			},

		methods: {
			addTask() {
				if (this.task.length === 0) return;

				this.tasks.push({
					text: this.task,
					done: false
				});
			},
			
			deleteTask(index) {
				this.tasks.splice(index, 1);
			}
		}
	};
</script>

<style>
    .home-todo {
		width: 30vw;
		margin: 10px;
	}

	.home-todo__input {
		margin-right: 55px;
	}

	.home-todo__add-button {
		justify-content: right;
		font-weight: bold;
	}

	.home-todo__tasks {
		display: flex;
		margin-top: 10px;
	}

	.home-tasks__delete-button {
		font-weight: bold;
	}

	.home-tasks__text {
		display: block;
		margin: 0px 10px 0px 10px;
	}
</style>