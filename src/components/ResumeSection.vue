<template>
<div class="resume-block">
    <h3>{{ props.jobTitle }}</h3>
    <h4>{{ props.companyTitle }} • {{ props.dates }}</h4>
    <div class="resume-block__row-two">
        <div class="resume-block__desc">
            <div class="resume-block__subtitle">Description</div>
            <div class="resume-block__subcontent">
                <slot name="description" />
            </div>
            
        </div>
        <div class="resume-block__projects">
            <div class="resume-block__subtitle">Projects</div>
            <div class="resume-block__subcontent">
                <slot name="projects" />
            </div>
            
        </div>
    </div>
    
</div>
</template>
<script setup lang="ts">
const props = defineProps({
    jobTitle: String,
    companyTitle: String,
    dates: String
})
</script>
<style lang="scss">
.resume-block {
    border-top: 1px solid #575757;
    padding: 1.5rem 0;
    margin-right: 1rem;

    &__row-two {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    &__desc {
        flex: 1;
        padding: 0 0.5rem 0 0;
        border-right: 1px solid #575757;
    }

    &__projects {
        flex: 1;
        padding: 0 0 0 0.5rem;
    }

    &__subtitle {
        font-family: "Fira Sans";
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    &__subcontent {
        font-size: 0.875rem;
        line-height: 1.2rem;
    }
}

@media screen and (max-width: 700px) {

    .resume-block {

        &__row-two {
            flex-direction: column;
            gap: 1rem;
            margin-left: 1rem;
        }

        &__desc {
            border: none;
        }

        &__projects {
            padding: 0;
        }
    }

}
</style>