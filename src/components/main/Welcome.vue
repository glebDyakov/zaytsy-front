<template>
    <div class="main--section main--section--welcome">
        <div class="main--section main--section--welcome--content flex-col md:flex-row w-screen">
            <div class="main--section--welcome--aside w-[100%] md:max-w-[680px]">
                <p class="main--section--title main--section--welcome--aside--title whitespace-break-spaces md:whitespace-nowrap md:max-h-[92px] mx-[16px] lg:mx-0">Мазайские зайцы</p>
                <div class="main--section--welcome--aside--intro mx-[16px] lg:mx-0 border-solid border-1 border border-[#BBBBBB]">
                    <div class="main--section--welcome--aside--intro--block">
                        <p class="main--section--welcome--aside--intro--block--title">Вводный текст о проекте</p>
                        <p class="main--section--welcome--aside--intro--block--subtitle">Мы начинаем новую историю Мазайских зайцев!<br />Как они спасённые Мазаем, в губернском городе оказались, да в люди вышли. Найдите зайцев в городе, а они расскажут истории Костромы на рубеже ушедших веков</p>
                    </div>
                </div>
            </div>
            <div class="main--section--welcome--main w-[100%] md:max-w-[480px] mx-[16px] lg:mx-0">
                <div
                    ref="slider"
                    class="main--section--welcome--main--items max-h-[280px] md:max-h-[580px] overflow-x-scroll md:overflow-x-hidden">
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--official" @click="selectHare('OFFICIAL')">
                        <p class="main--section--welcome--main--item--title">Чиновник</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Ботниковский сквер, напротив прохода в Администрацию города.</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--fireman" @click="selectHare('FIREMAN')">
                        <p class="main--section--welcome--main--item--title">Пожарный</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Сусанинская площадь, напротив Пожарной каланчи</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--merchant" @click="selectHare('MERCHANT')">
                        <p class="main--section--welcome--main--item--title">Купчиха</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Молочная гора, 1 Парапет у Гостиного двора корпус Б</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--innkeeper" @click="selectHare('INNKEEPER')">
                        <p class="main--section--welcome--main--item--title">Трактирщик</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Чайковского, угол Масляных рядов, у кафе «Избушка»</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--official" @click="selectHare('OFFICIAL')">
                        <p class="main--section--welcome--main--item--title">Чиновник</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Ботниковский сквер, напротив прохода в Администрацию города.</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--fireman" @click="selectHare('FIREMAN')">
                        <p class="main--section--welcome--main--item--title">Пожарный</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Сусанинская площадь, напротив Пожарной каланчи</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--merchant" @click="selectHare('MERCHANT')">
                        <p class="main--section--welcome--main--item--title">Купчиха</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Молочная гора, 1 Парапет у Гостиного двора корпус Б</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--innkeeper" @click="selectHare('INNKEEPER')">
                        <p class="main--section--welcome--main--item--title">Трактирщик</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Чайковского, угол Масляных рядов, у кафе «Избушка»</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--official" @click="selectHare('OFFICIAL')">
                        <p class="main--section--welcome--main--item--title">Чиновник</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Ботниковский сквер, напротив прохода в Администрацию города.</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--fireman" @click="selectHare('FIREMAN')">
                        <p class="main--section--welcome--main--item--title">Пожарный</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">Сусанинская площадь, напротив Пожарной каланчи</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--merchant" @click="selectHare('MERCHANT')">
                        <p class="main--section--welcome--main--item--title">Купчиха</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Молочная гора, 1 Парапет у Гостиного двора корпус Б</p>
                        </div>
                    </div>
                    <div class="main--section--welcome--main--item main--section--welcome--main--item--innkeeper" @click="selectHare('INNKEEPER')">
                        <p class="main--section--welcome--main--item--title">Трактирщик</p>
                        <div class="main--section--welcome--main--item--desc">
                            <img class="main--section--welcome--main--item--desc--icon" src="@/assets/icons/gps.svg" alt="location" />
                            <p class="main--section--welcome--main--item--desc--label">ул. Чайковского, угол Масляных рядов, у кафе «Избушка»</p>
                        </div>
                    </div>
                </div>
                <div class="main--section--welcome--main--controls">
                    <img
                        class="main--section--characters--body--arrow hidden md:inline-block"
                        src="@/assets/icons/chevron-left.svg"
                        alt="chevron"
                        width="10px"
                        @click="scrollToPrevCharacter" />
                    <img
                        class="main--section--characters--body--arrow hidden md:inline-block"
                        src="@/assets/icons/chevron-right.svg"
                        alt="chevron"
                        width="10px"
                        @click="scrollToNextCharacter" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
const slider  = ref(null);
const router = useRouter();
const selectHare = (hare) => {
    router.push({name: 'HareDetail', query: {id: hare}});
}
const scrollToPrevCharacter = () => {
    slider.value.scroll({
        left: slider.value.scrollLeft - 500,
        behavior: "smooth",
    });
}
const scrollToNextCharacter = () => {
    slider.value.scroll({
        left: slider.value.scrollLeft + 500,
        behavior: "smooth",
    });
}
</script>

<style>

</style>
