<template>
<!-- fikk det til!! :D -->
    <main class="main">
        <div class="main__grid">
            <div class="main__grid-box">
                <HomeTodo />
            </div>
            <div class="main__grid-box">
                <HomeTable />
            </div>
            <div class="main__grid-box">
                <HomeQuiz />
            </div>
        </div>
        <div class="main__grid">
            <div class="main__grid-box">
                <HomeForm />
            </div>
            <div class="main__grid-box">
                <HomeSlideshow />
            </div>
            <div class="main__grid-box--black">
                Made by Sigurd og Marie
            </div>
        </div>
    </main>
</template>

<script>
import HomeTodo from '../components/HomeTodo.vue';
import HomeTable from '../components/HomeTable.vue';
import HomeQuiz from '../components/HomeQuiz.vue';
import HomeForm from '../components/HomeForm.vue';
import HomeSlideshow from '../components/HomeSlideshow.vue';


export default {
    components: {
        HomeTodo,
        HomeTable,
        HomeQuiz,
        HomeForm,
        HomeSlideshow
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
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 35vh;
        margin: 10px;
        overflow: hidden;
    }

    .main__grid-box--black {
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 35vh;
        margin: 10px;
        background-color: black;
        color: white;
        text-align: center;
        padding-top: 100px;
    }

</style>