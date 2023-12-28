<template>
    <div class="main--section">
        <div class="main--section--news--header">
            <p class="main--section--news--header--title">Новости</p>
            <div class="main--section--news--header--show-all">
                <p class="main--section--news--header--show-all--label">Показать все</p>
                <img class="main--section--news--header--show-all--icon" src="@/assets/icons/chevron.svg" alt="show all" width="8px" />
            </div>
        </div>
        <div class="main--section--news--body">
            <div
                v-for="(item, index) in 5"
                :key="index"
                class="main--section--news--body--item">
                <div class="main--section--news--body--item--img" />
                <p class="main--section--news--body--item--date">13.11.2023</p>
                <p class="main--section--news--body--item--title">Название</p>
                <p class="main--section--news--body--item--subtitle">Принимая во внимание показатели успешности, курс на социально-ориентированный национальный проект способствует повышению качества поставленных обществом задач.</p>
                <button class="btn btn--outlined">Читать дальше</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>
