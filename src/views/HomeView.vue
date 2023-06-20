<template>
    <div class="home"> 
        <h1>Hello!</h1>
        <div class="home__text">
            My name's Nicole Brooks. Nice to meet you! I've been working in software development 
            since 2014 and have bounced between native Android development and web technologies 
            throughout my career. I'm currently working in a Vue frontend/NodeJS backend/PostgreSQL 
            database stack.
        </div>
        <div class="home__text-two">
            I love building responsive, flexible, accessible websites. Honestly, I just love coding. 
            Check out my portfolio to see some of my favorite projects, or my resume to see my work 
            experience. Or see my "about" to find out more about me and how to contact me!
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.home {
    display: flex;
    flex-direction: column;

    &__text {
        margin-top: 1rem;
        border-left: 2px solid #7a3e6c;
        max-width: 80%;
        padding-left: 0.75rem;
        line-height: 1.5rem;
        margin-bottom: 1.25rem;
    }

    &__text-two {
        border-right: 2px solid #7a3e6c;
        max-width: 80%;
        align-self: flex-end;
        padding-right: 0.75rem;
        line-height: 1.5rem;
        text-align: end;
    }
}

@media screen and (max-width: 880px) {
    .home__text {
        margin-bottom: 3rem;
    }
}
</style>