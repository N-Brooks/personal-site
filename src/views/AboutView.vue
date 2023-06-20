<template>
<div class="about">
    <div class="about__image">
        <img src="https://dummyimage.com/300/575757/ffffff&text=Image+Here" />
    </div>
    <div class="about__text">
        <h3>About Nicole</h3>
        <p>
            Nicole is based out of the Cleveland, Ohio area. When she's not programming, 
            you can find her drawing, exploring the local parks, or trying out local 
            breweries for the latest sour or pastry stout.
        </p>
        <p>You can reach her at the email (email here).</p>
    </div>
</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.about {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    &__image {
        flex: 0;
    }

    &__text {
        flex: 1;
    }

    h3 {
        border-bottom: 1px solid #575757;
        margin-bottom: 1rem;
    }
}

@media screen and (max-width: 880px) {
    .about {
        flex-direction: column;
        align-items: center;

        &__image {
            padding: 0 10%;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>