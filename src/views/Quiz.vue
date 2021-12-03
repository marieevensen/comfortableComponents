<template>
  	<div class="quiz">
		<section class="quiz__questions">
			<div class="quiz__question">
				<div class="quiz__question__title">Quiz</div>
				<div class="quiz__question__query">
					{{ currentQuestion.query }}
				</div>
			</div>

			<div class="quiz__options">
				<button class="quiz__options-option">
					{{ currentQuestion.options.a }}
				</button>
				
				<button class="quiz__options-option">
					{{ currentQuestion.options.b }}
				</button>

				<button class="quiz__options-option">
					{{ currentQuestion.options.c }}
				</button>

				<button class="quiz__options-option">
					{{ currentQuestion.options.d }}
				</button>
				
				<div class="quiz__options__buttons">
					<button @click="prevQuestion()">
						<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.01808 24.006L40.0181 24.0301" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M22.0286 10.0165L8.01809 24.006L22.0075 38.0165" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
					
					<button @click="nextQuestion();score();">
						<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M40.9997 25.094L9.00024 24.9059" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26.9176 39.0115L40.9997 25.094L27.0822 11.012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</section>

		<section class="quiz__score">
			<div class="quiz__score__title">Score</div>
			<div class="quiz__score__points">
				Your score is {{ score }}/3
			</div>
      			<!--HER SKAL SCOREN STÅ^
                	<div class="todo__finished-task" v-for="(task, index) in tasks" :value="task">
                	Your score is{{ task.finished }}/10
            	</div> -->
		</section>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				score: 0,
				questions: [
					{
						query: "What is the capital of Madagaskar?",
						options: { a: "Mugadishu", b: "Marrakesh", c: "Dodoma", d: "Antananarivo" },
						correctAnswer: "d",
					},
					{
						query: "What is the capital of Norway?",
						options: { a: "Oslo", b: "Skien", c: "Tomter", d: "Tøyen" },
						correctAnswer: "a",
					},
					{
						query: "What is the capital of Greenland?",
						options: { a: "Stockholm", b: "Berlin", c: "Nuuk", d: "Virenze" },
						correctAnswer: "c",
					},
				],
			};
		},

		computed: {
			currentQuestion() {
				return this.questions[this.index];
			},
		},

		methods: {
			nextQuestion() {
				this.index = this.index === this.questions.length - 1 ? 0 : this.index + 1;
			},
			prevQuestion() {
				this.index = this.index === 0 ? this.questions.length - 1 : this.index - 1;
			},
			score() {
				if(options === correctAnswer)
					score += 1
			}
		}
	};
</script>

<style>
	.quiz {
 		display: flex;
  		margin-top: 20px;
	}

	.quiz__questions {
  		width: 60%;
  		padding: 20px;
  		display: flex;
		padding-left: 100px;
	}

	.quiz__question {
		width: 30vw;
	}

	.quiz__question__title {
		font-size: 3em;
		font-weight: bold;
	}

	.quiz__question__query {
		font-size: 1.3em;
		margin-top: 20px;
	}

	.quiz__options {
		display: grid;
		height: 50vh;
		margin: 200px 0px 0px 0px;
		grid-gap: 30px;
		width: 15vw;
	}

	.quiz__options-option {
		background-color: beige;
		border: 1px solid beige;
	}

	.quiz__options-option:hover {
		border: black 1px solid;
	}

	.quiz__options-option:focus {
		background-color: black;
		color: white;
	}

	.quiz__options__buttons {
		display: flex;
		justify-content: space-between;
	}

	.quiz__score {
		width: 40%;
		border-left: 2px solid black;
		height: 85vh;
		padding: 20px;
		padding-left: 40px;
	}

	.quiz__score__title {
		font-size: 3em;
		font-weight: bold;
	}

	.quiz__score__points {
		font-size: 1.3em;
		margin-top: 20px;
	}
</style>