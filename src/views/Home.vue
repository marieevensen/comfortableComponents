<template>
    <main class="main">
        <div class="main__grid">
            <div class="grid__box">
                <HomeTodo />
            </div>

            <div class="grid__box">
                <HomeTable />
            </div>
            
            <div class="grid__box">
                <HomeQuiz />
            </div>
        </div>

        <div class="main__grid">
            <div class="grid__box">
                <HomeForm />
            </div>
        
            <div class="grid__box">
                <HomeSlideshow />
            </div>
        
            <div class="grid__box--black">
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

<style>
    .main {
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100vw;
        margin-top: 35px;
    }

    .grid__box {
        border: 1px black solid;
        width: 90vw;
        height: 38vh;
        margin: 10px;
        overflow: hidden;
    }

    .grid__box--black {
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 38vh;
        margin: 10px;
        background-color: black;
        color: white;
        text-align: center;
        padding-top: 110px;
    }

@media screen and (min-width: 768px) {
    .main {
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100vw;
        margin-top: 35px;
        background: chartreuse;
    }

    .main__grid {
        display: flex;
    }

    .grid__box {
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 38vh;
        margin: 10px;
        overflow: hidden;
    }

    .grid__box--black {
        border: 1px black solid;
        justify-content: space-between;
        width: 30vw;
        height: 38vh;
        margin: 10px;
        background-color: black;
        color: white;
        text-align: center;
        padding-top: 110px;
    }
}
</style>