<template>
    <div class="flex items-center justify-center gap-[137px] h-screen">
        <div>
            <p class="page404--title text-[#378A6F] text-[80px] font-medium mb-[14px]">Ошибка 404</p>
            <p class="page404--subtitle mb-[30px]">Ой, кажется все зайцы разбежались</p>
            <button class="btn btn--minimized w-[225px] h-[54px] flex justify-center items-center whitespace-nowrap" @click="$router.push('/')">На главную</button>
        </div>
        <div>
            <div class="w-[525.77px] h-[525.96px] bg-[#6CC4A7] absolute z-[-1] translate-y-[38px] rotate-[15deg]" />
            <img width="548px" height="667px" src="@/assets/img/404.png" alt="404">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.page404--title {
    font-family: 'Book antiqua';
    font-weight: 700;
}
.page404--subtitle {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
}
</style>