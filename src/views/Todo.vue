<template>
  <div class="todo">
    <div class="todo__title">To do today</div>
    <div class="todo__text">
      <input class="todo__text-write" type="text" placeholder="Add your task here" v-model="task"/>
      <button class="todo__text-submit" @click="addTask">ss</button><br />
      <div class="todo__text-task" v-for="task in pendingTasks" :value="task">
        <button class="todo__text--btn" @click="deleteTask(index)"><img src="assets/trash.png " alt=""></button>
        {{ task.text }}
        <input class="todo__text-box" @click="checkTask" type="checkbox"/>
      </div>
    </div>
    <div class="todo__finished">
      Finished Tasks:
      <div class="todo__finished-task" v-for="task in doneTasks" :value="task">
        {{ task.checked }}
      </div>
    </div>
  </div>
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
  .todo {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }

  .todo__title {
    margin: 20px 0px;
    margin-left: 60px;
  }

  .todo__text {
    border-right: 2px black solid;
  }

  .todo__text-write {
    margin: 20px 6px 30px 20px;
    border: none;
    padding-left: 4px;
  }

  .todo__text-submit {
    background-color: grey;
    border-radius: 10px;
    color: grey;
    margin-right: 50px;
  }

  .todo__text-submit:hover {
    color: black;
    background-color: black;
  }

  .todo__text-task {
    margin: 0px 20px;
    padding-left: 4px;
    font-size: 0.8em;
  }

  .todo__text--btn img {
    width: 30px;
  }

  .todo__text-box:focus {
    background-color: black;
  }

  .todo__finished {
    margin: 20px 0px 20px 50px;
  }

  .todo__finished-task:first-child {
    margin: 30px 0px 0px 0px;
  }
</style>