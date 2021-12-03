<template>
	<main>
		<div class="todo">
			<div class="todo__title">To do today:</div>
				<input class="todo__input-field" type="text" placeholder="Add your task here" v-model="task"/>
				<button class="todo__submit-button" @click="addTask">Add</button>
				<div class="todo__tasks">
					<div class="todo__tasks__pending" v-for="task in pendingTasks" :value="task">
						<button class="todo__delete-button" @click="deleteTask(index)">
							<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_104_4)">
								<path d="M1 14.4998C1 14.8976 1.15804 15.2792 1.43934 15.5605C1.72064 15.8418 2.10218 15.9998 2.5 15.9998H11.5C11.8978 15.9998 12.2794 15.8418 12.5607 15.5605C12.842 15.2792 13 14.8976 13 14.4998V3.99982H1V14.4998ZM9.5 6.49982C9.5 6.36721 9.55268 6.24004 9.64645 6.14627C9.74021 6.0525 9.86739 5.99982 10 5.99982C10.1326 5.99982 10.2598 6.0525 10.3536 6.14627C10.4473 6.24004 10.5 6.36721 10.5 6.49982V13.4998C10.5 13.6324 10.4473 13.7596 10.3536 13.8534C10.2598 13.9471 10.1326 13.9998 10 13.9998C9.86739 13.9998 9.74021 13.9471 9.64645 13.8534C9.55268 13.7596 9.5 13.6324 9.5 13.4998V6.49982ZM6.5 6.49982C6.5 6.36721 6.55268 6.24004 6.64645 6.14627C6.74021 6.0525 6.86739 5.99982 7 5.99982C7.13261 5.99982 7.25979 6.0525 7.35355 6.14627C7.44732 6.24004 7.5 6.36721 7.5 6.49982V13.4998C7.5 13.6324 7.44732 13.7596 7.35355 13.8534C7.25979 13.9471 7.13261 13.9998 7 13.9998C6.86739 13.9998 6.74021 13.9471 6.64645 13.8534C6.55268 13.7596 6.5 13.6324 6.5 13.4998V6.49982ZM3.5 6.49982C3.5 6.36721 3.55268 6.24004 3.64645 6.14627C3.74021 6.0525 3.86739 5.99982 4 5.99982C4.13261 5.99982 4.25979 6.0525 4.35355 6.14627C4.44732 6.24004 4.5 6.36721 4.5 6.49982V13.4998C4.5 13.6324 4.44732 13.7596 4.35355 13.8534C4.25979 13.9471 4.13261 13.9998 4 13.9998C3.86739 13.9998 3.74021 13.9471 3.64645 13.8534C3.55268 13.7596 3.5 13.6324 3.5 13.4998V6.49982ZM13.5 0.999822H9.75L9.45625 0.415447C9.39402 0.290514 9.29817 0.185423 9.17947 0.111997C9.06078 0.0385706 8.92395 -0.000277729 8.78438 -0.000177626H5.2125C5.07324 -0.000712956 4.93665 0.0379905 4.81838 0.111498C4.7001 0.185006 4.60492 0.290346 4.54375 0.415447L4.25 0.999822H0.5C0.367392 0.999822 0.240215 1.0525 0.146447 1.14627C0.0526784 1.24004 0 1.36721 0 1.49982L0 2.49982C0 2.63243 0.0526784 2.75961 0.146447 2.85338C0.240215 2.94714 0.367392 2.99982 0.5 2.99982H13.5C13.6326 2.99982 13.7598 2.94714 13.8536 2.85338C13.9473 2.75961 14 2.63243 14 2.49982V1.49982C14 1.36721 13.9473 1.24004 13.8536 1.14627C13.7598 1.0525 13.6326 0.999822 13.5 0.999822V0.999822Z" fill="black"/>
								</g>
								<defs>
								<clipPath id="clip0_104_4">
								<rect width="14" height="16" fill="white"/>
								</clipPath>
								</defs>
							</svg>	
						</button>
						<div class="todo__task-text">  {{ task.text }}</div> 
						<button class="todo__check-box" @click="checkTask">ss</button>
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

