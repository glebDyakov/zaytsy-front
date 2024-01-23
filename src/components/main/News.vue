<template>
    <div class="main--section px-[16px] md:px-0">
        <div class="main--section--news--header">
            <p class="main--section--news--header--title text-[24px] sm:text-[36px] md:text-[44px]">Новости</p>
            <div v-if="isShowAll" class="main--section--news--header--show-all" @click="showAll">
                <p class="main--section--news--header--show-all--label">Показать все</p>
                <img class="main--section--news--header--show-all--icon" src="../../assets/icons/chevron-left.svg" alt="show all" width="8px" />
            </div>
        </div>
        <div class="main--section--news--body justify-between md:justify-start">
            <div
                v-for="(item, index) in 5"
                :key="index"
                class="main--section--news--body--item">
                <div class="main--section--news--body--item--img" />
                <p class="main--section--news--body--item--date">13.11.2023</p>
                <p class="main--section--news--body--item--title">Название</p>
                <p class="main--section--news--body--item--subtitle">Принимая во внимание показатели успешности, курс на социально-ориентированный национальный проект способствует повышению качества поставленных обществом задач.</p>
                <button class="btn btn--outlined px-[110px] py-[14px]" @click="openNews">{{btnNextContent}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
defineProps({
    isShowAll: {
        type: Boolean,
        default: true
    },
    btnNextContent: {
        type: String,
        default: 'Читать дальше'
    }
});
const router = useRouter();
const showAll = () => {
    router.push({name: 'News'});
};
const openNews = () => {
    router.push({name: 'NewsDetail', params: {id: '1'}});
};
</script>

<style>

</style>
