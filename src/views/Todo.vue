<template>
	<main class="todo">
		<section class="todo__add-task">
			To do today:
			
			<input class="add-task__input" type="text" placeholder="Add your task here" v-model="task" v-on:keyup.enter="addTask"/>
			
			<button class="add-task__add-button" @click="addTask">
				Add
			</button>	
		</section>

		<section class="todo__tasks" v-for="(task, index) in tasks">
			<button class="tasks__delete-button" @click="deleteTask(index)">
				X
			</button>

			<label class="tasks__text" name="task">{{ task.text }}</label>

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
					text: this.task
				});
			},
				
			deleteTask(index) {
				this.tasks.splice(index, 1);
			}
		}
	};
</script>

<!--
	1 Starter med en tom array: tasks
	2 Lager en funkjson addTask
	3 If-setningen sier at hvis lengden er 0, så returneres ingenting
	4 Det som blir skrevet inn i inputen, blir pushet til listen som text og returnert på skjermen
	5 Lager funskjonen deleteTask og henter index
	6 Bruker splice for å slette tasken
-->

<style>
	.todo {
		width: 100vw;
		font-size: 1.2em;
	}

	.todo__add-task {
		display: flex;
		margin-top: 60px;
		justify-content: center;
	}

	.add-task__input {
		height: fit-content;
		margin-left: 20px;
	}

	.add-task__add-button {
		height: fit-content;
		margin-left: 10px;
		font-weight: bold;
	}

	.todo__tasks {
		display: flex;
		height: fit-content;
		margin-top: 20px;
		margin-left: 588px;
	}

	.tasks__delete-button {
		font-weight: bold;
	}

	.tasks__text {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>

