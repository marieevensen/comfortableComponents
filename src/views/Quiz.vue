<template>
  <div class="quiz">
    <div class="quiz__left">
      <div class="quiz__questions">
        <div class="quiz__title">Quiz</div>
        <button class="quiz__start" @click="startQuiz">Start</button><br />
        <div
          class="quiz__que"
          v-for="(question, index) in questions"
          :value="question"
        >
          {{ questions.hei }}
        </div>
      </div>
      <div class="quiz__right">
        <div class="quiz__options">
          <label for="a" class="quiz__options-option">
            <input type="radio" class="hidden" />
            Option 1 </label
          ><br />
          <label for="a" class="quiz__options-option">
            <input type="radio" class="hidden" />
            Option 2 </label
          ><br />
          <label for="a" class="quiz__options-option">
            <input type="radio" class="hidden" />
            Option 3 </label
          ><br />
          <label for="a" class="quiz__options-option">
            <input type="radio" class="hidden" />
            Option 4
          </label>
        </div>
      </div>
    </div>
    <div class="quiz__score">
      Score:
      <!--HER SKAL SCOREN STÅ^
                <div class="todo__finished-task" v-for="(task, index) in tasks" :value="task">
                Your score is{{ task.finished }}/10
            </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      questions: [
        {
          hei: "Are you a boy?",
          answers: { a: "yes", b: "no", c: "maybe", d: "not sure" },
          correctAnswer: "b",
        },
      ],
    };
  },
  methods: {
    startQuiz() {
      this.questions.push({
        hei: this.question,
      });
    },
  },
};
</script>

<style>
.quiz {
  display: flex;
  margin-top: 30px;
}

.quiz__left {
  border-right: 2px black solid;
  margin: 20px 100px;
  display: flex;
}

.quiz__title {
  font-size: 2em;
  font-weight: bold;
}

.quiz__start {
  background-color: blanchedalmond;
}

.quiz__que {
  font-size: 1em;
  margin-top: 20px;
  color: black;
}

.quiz__options {
  margin: 150px 50px 0px 200px;
}

.quiz__score {
  margin: 20px 0px 20px 50px;
  font-size: 2em;
  font-weight: bold;
}
</style>