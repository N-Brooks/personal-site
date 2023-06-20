<template>
  <div class="main">
    <div class="main__content">
      <div class="main__content--router">
        <RouterView />
      </div>
      <div class="main__content--nav">
        <NavBar />
      </div>
      
    </div>
    <div class="main__top-left">
      <TopLeft />
    </div>
    <div class="main__bottom-right">
        <BottomRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopLeft from "./assets/topleft.svg?component"
import BottomRight from "./assets/bottomright.svg?component"
import NavBar from "./components/NavBar.vue"
import { ref } from "vue";


</script>

<style lang="scss">
.main {
  width: 53rem;
  max-height: 100dvh;
  display: grid;
  margin: auto;

  &__content {
      grid-area: 1 / 1;
      max-height: 65dvh;
      margin: 3rem 2rem;
      z-index: 5;
      display: flex;
      flex-direction: column;

      &--router {
        flex: 1;
        padding: 0 2rem;
        overflow: auto;
      }

      &--nav {
        flex: 0;
      }
  }

  &__top-left {
      grid-area: 1 / 1;
      width: auto;
      height: auto;
      justify-self: flex-start;
      align-self: flex-start;
  }

  &__bottom-right {
      grid-area: 1 / 1;
      width: auto;
      height: auto;
      justify-self: flex-end;
      align-self: flex-end;
  }

  svg {
      width: 15rem;
      height: 15rem;
  }
}

@media screen and (max-width: 880px) {
  .main {
    margin: 1rem;
    max-height: 100dvh;
    width: calc(100dvw - 2rem);

    &__content {
      max-height: calc(100dvh - 5.25rem);
      margin: 1.5rem 2rem;

      &--router {
        overflow: auto;
      }
    }

    svg {
      width: 10rem;
      height: 10rem;
    }
  }

  
}
</style>
