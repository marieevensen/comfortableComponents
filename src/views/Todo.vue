<template>
	<main class="todo">
		<div class="todo__add-task">
			To do today:
			
			<input class="add-task__input" type="text" placeholder="Add your task here" v-model="task" v-on:keyup.enter="addTask"/>
			
			<button class="add-task__add-button" @click="addTask">
				Add
			</button>	
		</div>
		<div class="todo__tasks" v-for="(task, index) in tasks">
			<button class="tasks__delete-button" @click="deleteTask(index)">
				X
			</button>

			<label class="tasks__text" name="task">{{ task.text }}</label>

			<input type="checkbox" for="task"/>
		</div>
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
	1 Starter med et tomt array
	2 Lager en addTask() funkjson
	3 If settningen gjør at hvis lengden er 0 så returneres ingenting
	4 Det mann skriver inn blir pushet til listen som text og returnert på skjermen
	5 Lager funskjonen deleteTask()
	6 Bruker splice for å slette oppgaven med riktig index
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

