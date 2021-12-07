<template>
	<main>
		<div class="todo">
			<div class="todo__title">
				To do today:
			</div>
			<input class="todo__input-field" type="text" placeholder="Add your task here" v-model="task" v-on:keyup.enter="addTask"/>
			<button class="todo__submit-button" @click="addTask">
				Add
			</button>
			<div class="todo__tasks">
				<div class="todo__tasks__pending" v-for="task in pendingTasks">
					<button class="todo__delete-button" @click="deleteTask(index)">
						X
					</button>
					<div class="todo__task-text">
						{{ task.text }}
					</div> 
					<button class="todo__check-button" @click="checkTask(index)"></button>
				</div>
			</div>
		</div>
		<div class="finished-tasks">
			Finished Tasks:
			<div class="finished-tasks__done" v-for="task in doneTasks">
				{{ task.text }}
			</div>
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

	computed: {
		pendingTasks() {
			return this.tasks.filter(task => task.done === false)
		},
		doneTasks() {
			return this.tasks.filter(task => task.done === true)
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
		},
		// checkTask(index) {
		// 	this.tasks.push({
		// 		checked: this.task,
		// 		done: true
		// 	});
		// }
	}
};
</script>

<style>
	main {
		width: 100vw;
		display: flex;
	}

	.todo {
		display: flex;
		width: 60%;
		padding: 10px;
	}

	.todo__input-field {
		height: fit-content;
		margin-left: 10px;
	}

	.todo__submit-button {
		height: fit-content;
		margin-left: 10px;
	}

	.todo__delete-button {
		font-weight: bold;
	}

	.todo__check-button {
		font-weight: bold;
		border: 1px solid black;
		background-color: white;
		width: 22px;
		height: 22px;
		border-radius: 30px;
	}

	.todo__check-button:focus {
		background-color: black;
	}

	.todo__tasks {
		margin-top: 10vh;
		height: fit-content;
	}

	.todo__tasks__pending {
		display: flex;
		margin-top: 20px;
	}

	.todo__task-text {
		display: block;
		margin: 0px 10px 0px 10px;
	}
	
	.finished-tasks {
		width: 40%;
		height: 85vh;
		padding: 10px;
		border-left: solid 2px black;
	}


</style>

