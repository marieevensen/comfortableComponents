<template>
	<main>
		<div class="todo">
			<div class="todo__title">To do today:</div>
				<input class="todo__input-field" type="text" placeholder="Add your task here" v-model="task"/>
				<button class="todo__submit-button" @click="addTask">Add</button>
				<div class="todo__tasks">
					<div class="todo__tasks__pending" v-for="task in pendingTasks" :value="task">
						<button class="todo__delete-button" @click="deleteTask(index)">
							X
						</button>
						<div class="todo__task-text">  {{ task.text }}</div> 
						<button class="todo__check-button" @click="checkTask">
							<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.4999 21.9166C17.2529 21.9166 21.9166 17.2529 21.9166 11.5C21.9166 5.74701 17.2529 1.08331 11.4999 1.08331C5.74695 1.08331 1.08325 5.74701 1.08325 11.5C1.08325 17.2529 5.74695 21.9166 11.4999 21.9166Z" stroke="black" stroke-width="2.08333"/>
							</svg>
						</button>
					</div>
				</div>
		</div>
		<div class="finished-tasks">
		Finished Tasks:
		<div class="finished-tasks__done" v-for="task in doneTasks" :value="task">
			{{ task.checked }}
		</div>
		</div>
	
	</main>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      tasks: [ ],
    };
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
    checkTask() {
      this.tasks.push({
        checked: this.task,
        done: true
      })
    }
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

