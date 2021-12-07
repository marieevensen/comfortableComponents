<template>
	<div class="todo">
		<div class="todo__add">
			<div class="todo__title">
				To do today:
			</div>
			<input class="todo__input-field" type="text" placeholder="Add your task here" v-model="task" v-on:keyup.enter="addTask"/>
			<button class="todo__submit-button" @click="addTask">
				Add
			</button>	
		</div>
		<div class="todo__tasks">
			<div class="todo__tasks__list" v-for="(task, index) in tasks">
				<button class="todo__delete-button" @click="deleteTask(index)">
					X
				</button>
				<div class="todo__task-text">
					{{ task.text }}
				</div>
				<input class="todo__checkbox" type="checkbox">
			</div>
		</div>
	</div>
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
	.todo {
		width: 100vw;
		font-size: 1.2em;
	}

	.todo__add {
		display: flex;
		margin-top: 60px;
		justify-content: center;
	}

	.todo__input-field {
		height: fit-content;
		margin-left: 10px;
	}

	.todo__submit-button {
		height: fit-content;
		margin-left: 10px;
		font-weight: bold;
	}

	.todo__tasks {
		height: fit-content;
		margin-top: 20px;
		margin-left: 620px;
	}

	.todo__delete-button {
		font-weight: bold;
	}

	.todo__checkbox {
		font-weight: bold;
		border: 1px solid black;
		background-color: white;
		width: 22px;
		height: 22px;
		border-radius: 50%;
	}

	.todo__tasks__list {
		display: flex;
		margin-top: 10px;
	}

	.todo__task-text {
		display: block;
		margin: 0px 20px 0px 20px;
	}
</style>

