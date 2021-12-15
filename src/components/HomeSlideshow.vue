<template>
	<main class="home-slideshow">
		<button @click="previousImage">
			<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.01808 24.006L40.0181 24.0301" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M22.0286 10.0165L8.01809 24.006L22.0075 38.0165" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		
		<figure>
			<img class="home-slideshow__img" :src="currentSlide.file" :alt="currentSlide.alt"/>
		</figure>
		
		<button @click="nextImage">
			<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M40.9997 25.094L9.00024 24.9059" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M26.9176 39.0115L40.9997 25.094L27.0822 11.012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
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
				caption:
					" Dette er bilde 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				file: "public/img1.jpg",
				alt: "picture of orange-drink"
				},
				{
				title: "img2",
				caption:
					"Dette er bilde 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				file: "public/img2.jpg",
				alt: "picture of orange apartement building"
				},
				{
				title: "img3",
				caption:
					"Dette er bilde 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				file: "public/img3.jpg",
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

<style>
	.home-slideshow {
		display: flex;
		justify-content: space-evenly;
		padding-top: 10px;
	}

	.home-slideshow__img {
		height: 240px;
	}
</style>
