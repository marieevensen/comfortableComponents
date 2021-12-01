<template>
    <main class="main">
        <div class="main__grid">
            <div class="main__grid-box">
                <Todo />
            </div>
            <div class="main__grid-box">
                hei
            </div>
            <div class="main__grid-box">
                hei
            </div>
        </div>
        <div class="main__grid">
            <div class="main__grid-box">
                d
            </div>
            <div class="main__grid-box">
                d
            </div>
            <div class="main__grid-box">
                d
            </div>
        </div>
    </main>
</template>

<script>
import Todo from '../views/Todo.vue'

export default {
    components: {
        Todo
    }
}
</script>

<style scoped>

    .main {
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 35px;
    }

    .main__grid {
        display: flex;
    }

    .main__grid-box {
        position: relative;
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 35vh;
        margin: 10px;
    }

</style>