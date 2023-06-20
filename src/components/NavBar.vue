<template>
<div class="nav">
    <RouterLink to="/resume" class="nav__link">Resume</RouterLink>
    <RouterLink to="/portfolio" class="nav__link">Portfolio</RouterLink>
    <RouterLink to="/about" class="nav__link">About</RouterLink>
</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.nav {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: "Fira Sans";
    font-weight: 200;

    .router-link-active {
        color: #B5509C;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #B5509C;
    }
}

@media screen and (max-width: 400px) {
    .nav {
        flex-direction: column;
        align-items: flex-end;
        justify-content: baseline;
    }
}
</style>