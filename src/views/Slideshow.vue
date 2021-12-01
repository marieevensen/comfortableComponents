<template>
  <section class="component-container">
    <div class="slideshow">
      <button @click="previousImage" class="slideshow__button--left">
        &lt;
      </button>
      <figure>
        <img
          class="slideshow__img"
          :src="currentSlide.file"
          :alt="currentSlide.title"
        />
      </figure>
      <button @click="nextImage" class="slideshow__button--right">&gt;</button>
    </div>

    <figcaption class="caption">
      <h1>{{ currentSlide.title }}</h1>
      <div class="caption__description">{{ currentSlide.caption }}</div>
    </figcaption>
  </section>
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
          file: "assets/img1.jpg",
        },
        {
          title: "img2",
          caption:
            "Dette er bilde 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          file: "assets/img2.jpg",
        },
        {
          title: "img3",
          caption:
            "Dette er bilde 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          file: "assets/img3.jpg",
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
.component-container {
  display: flex;
  width: 100vw;
}

.slideshow {
  width: 60%;
  padding: 20px;
  display: flex;
  padding-top: 100px;
  justify-content: space-evenly;
}

.slideshow__img {
  max-width: 450px;
}

.caption {
  margin-top: 10px;
  padding: 20px;
  border-left: solid 2px black;
  width: 40%;
  height: 80vh;
}

.caption__description {
  margin-top: 10px;
}
</style>
