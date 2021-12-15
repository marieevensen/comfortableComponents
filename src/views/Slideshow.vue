<template>
	<main class="slideshow">
		<section class="slideshow__slides">
			<button @click="previousImage">
				<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.01808 24.006L40.0181 24.0301" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M22.0286 10.0165L8.01809 24.006L22.0075 38.0165" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>

			<figure>
				<img class="slides__img" :src="currentSlide.file" :alt="currentSlide.alt"/>
			</figure>
			
			<button @click="nextImage">
				<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M40.9997 25.094L9.00024 24.9059" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M26.9176 39.0115L40.9997 25.094L27.0822 11.012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</section>

		<figcaption class="slideshow__caption">
			<h1>{{ currentSlide.title }}</h1>

			{{ currentSlide.caption }}
		</figcaption>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				slides: [
					{
						title: "img1",
						caption: "Dette er bilde 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						file: "global/img1.jpg",
						alt: "picture of orange-drink"
					},
					{
						title: "img2",
						caption: "Dette er bilde 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						file: "global/img2.jpg",
						alt: "picture of orange apartement building"
					},
					{
						title: "img3",
						caption: "Dette er bilde 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
						file: "global/img3.jpg",
						alt: "picture of windows"
					},
				],
			};
		},

		computed: {
			currentSlide() {
				return this.slides[this.index];
			},
		},

		methods: {
			previousImage() {
				this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
			},

			nextImage() {
				this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
			},
		},
	};
</script>

<!--
	1 Lager en computed funksjon
		1.1 CurrentSlide, returnerer riktig index
	2 Lager to methods funksjoner
		2.1 PreviousImage, hvis this.index er samme som 0, så blar den til siste bildet i array,
			hvis ikke this.index - 1
		2.2 NextImage, hvis this.index er samme som slides.length - 1, så this.index + 1,
			hvis ikke 0.
-->

<style>
	.slideshow {
		width: 100vw;
		display: flex;
	}

	.slideshow__slides {
		width: 60%;
		padding: 20px;
		display: flex;
		padding-top: 100px;
		justify-content: space-evenly;
	}

	.slides__img {
		max-width: 450px;
	}

	.slideshow__caption {
		margin-top: 20px;
		padding: 20px;
		border-left: solid 2px black;
		width: 40%;
		height: 85vh;
	}
</style>
