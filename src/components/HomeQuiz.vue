<template>
  	<div class="home-quiz">
		<section class="home-quiz__questions">
			<div class="home-quiz__question">
				<div class="home-quiz__question__query">
					{{ currentQuestion.query }}
				</div>
			</div>

			<div class="home-quiz__options">
				<button class="home-quiz__options-option" v-for="option in currentQuestion.options" @click="optionClicked(option)">
					{{ option }}
				</button>
				
				<div class="home-quiz__options__buttons">
					<button @click="nextQuestion">
						<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M40.9997 25.094L9.00024 24.9059" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26.9176 39.0115L40.9997 25.094L27.0822 11.012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				score: 0,
				lastOption: null,
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

			correctAnswer() {
				return this.currentQuestion.options[this.currentQuestion.correctAnswer]
			}
		},

		methods: {
			optionClicked(option) {
				this.lastOption = option;
			},

			nextQuestion() {
				this.increaseIndex();
			},

			increaseIndex() {
				this.index = this.index === this.questions.length - 1 ? 0 : this.index + 1;
			}
		}
	};
</script>

<style>
	.home-quiz {
 		display: flex;
        padding: 10px;
	}

	.home-quiz__questions {
  		display: flex;
        margin-left: 10px;
	}

	.home-quiz__question {
		width: 17vw;
	}

	.home-quiz__question__query {
		font-size: 1em;
    }

	.home-quiz__options {
        font-size: 0.7em;
		display: grid;
		height: 20vh;
		margin: 60px 0px 0px 0px;
		grid-gap: 10px;
		width: 10vw;
	}

	.home-quiz__options-option {
		background-color: beige;
		border: 1px solid beige;
	}

	.home-quiz__options-option:hover {
		border: black 1px solid;
	}

	.home-quiz__options-option:focus {
		background-color: black;
		color: white;
	}

	.home-quiz__options__buttons {
		display: flex;
		justify-content: space-between;
	}
</style>