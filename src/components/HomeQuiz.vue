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
					<button @click="nextQuestion" v-if="index < 3">
						<svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M40.9997 25.094L9.00024 24.9059" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26.9176 39.0115L40.9997 25.094L27.0822 11.012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
					
					<button class="home-quiz__options__start-over" @click="startOver" v-else>
						<svg width="40" height="40" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69C47.2886 69 58.4424 62.0365 64.4012 51.6995L52.2554 44.7127C48.715 50.8533 42.0973 54.997 34.5 54.997C23.1798 54.997 14.003 45.8202 14.003 34.5C14.003 23.1798 23.1798 14.003 34.5 14.003C39.3523 14.003 43.7996 15.7004 47.3069 18.5218L38.2482 24.9654L69 35.2201V3.08275L58.9852 10.2085C52.7346 3.90724 44.0768 0 34.5 0Z" fill="black"/>
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
					{
						query: "Do you want to start over?"
					}
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
			},
			
			startOver() {
				this.index = 0;
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
		height: 30vh;
		margin-top: 30px;
		width: 10vw;
		grid-gap: 10px;
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

	.home-quiz__options__start-over {
		margin-top: 50px;
	}

	.home-quiz__options__start-over:hover {
		transform: rotate(360deg);
		transition-duration: 1.3s;
	}
</style>