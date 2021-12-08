<template>
	<main class="home-main-todo">
		<div class="home-todo">
			<input class="home-todo__input-field" type="text" placeholder="Add your task here" v-model="task"/>
			
			<button class="home-todo__submit-button" @click="addTask">
				Add
			</button>
			
			<div class="home-todo__tasks">
				<div class="home-todo__tasks__pending" v-for="task in tasks">
					<button class="home-todo__delete-button" @click="deleteTask(index)">
						X
					</button>
			
					<div class="home-todo__task-text">
						{{ task.text }}
					</div> 
			
					<button class="home-todo__check-button">
						<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.4999 21.9166C17.2529 21.9166 21.9166 17.2529 21.9166 11.5C21.9166 5.74701 17.2529 1.08331 11.4999 1.08331C5.74695 1.08331 1.08325 5.74701 1.08325 11.5C1.08325 17.2529 5.74695 21.9166 11.4999 21.9166Z" stroke="black" stroke-width="2.08333"/>
						</svg>
					</button>
				</div>
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
    .home-main-todo {
		width: 30vw;
		margin: 10px;
	}

	.home-todo__input-field {
		margin-right: 55px;
	}

	.home-todo__submit-button {
		justify-content: right;
		font-weight: bold;
	}

	.home-todo__tasks__pending {
		display: flex;
		margin-top: 10px;
	}

	.home-todo__delete-button {
		font-weight: bold;
	}

	.home-todo__task-text {
		display: block;
		margin: 0px 10px 0px 10px;
	}


</style>