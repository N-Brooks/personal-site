<template>
    <div class="resume">
        <h2>Resume</h2>
        <ResumeSection v-bind="roll20">
            <template #description>
                Worked on both native mobile and web technologies to create something something something character sheets for bad games something something something apps with bad character sheets.
            </template>
            <template #projects>
                <ul>
                    <li>Roll20 Android App</li>
                    <li>Coyote & Crow Character Sheet</li>
                    <li>Roll20Connect</li>
                </ul>
            </template>
        </ResumeSection>
        <ResumeSection v-bind="rsm">
            <template #description>
                Created internal and client-facing web tools using Angular and Nodejs with an AWS-based backend. Participated in estimation, architecture, development, and maintenance of client tools and relationships.
            </template>
            <template #projects>
                <ul>
                    <li>Vendor Risk Management Questionnaire - a nested, branching questionnaire app with multiple back-and-forth client/vendor states.</li>
                </ul>
            </template>
        </ResumeSection>
        <ResumeSection v-bind="att">
            <template #description>
                Developed Android applications for AT&T customerbase. I was the project owner of YesOkay Android, AT&T's emergency broadcast system. I also worked on AT&T Smart Wi-Fi and Cricket Wi-Fi, as well as an unpublished mobile VPN application.
            </template>
            <template #projects>
                <ul>
                    <li>AT&T Smart WiFi</li>
                    <li>YesOkay</li>
                </ul>
            </template>
        </ResumeSection>
        <ResumeSection v-bind="oneParish">
            <template #description>
                Worked as the sole Android developer on version 1.0 of the OneParish application. The application includes a radio, a dynamic mass finder, a server-side database of families and parishes, and new Bible readings every day.
            </template>
            <template #projects>
                <ul>
                    <li>OneParish Android App</li>
                </ul>
            </template>
        </ResumeSection>
    </div>
</template>
<script setup lang="ts">
import ResumeSection from '../components/ResumeSection.vue';

const roll20 = {
    jobTitle: "Mobile/Web Developer",
    companyTitle: "Roll20",
    dates: "May 2021 - Present"
}

const rsm = {
    jobTitle: "Web Developer",
    companyTitle: "RSM",
    dates: "April 2017 - May 2021"
}

const att = {
    jobTitle: "Specialist Applications Developer",
    companyTitle: "AT&T",
    dates: "June 2014 - April 2017"
}

const oneParish = {
    jobTitle: "Android Development Intern",
    companyTitle: "OneParish",
    dates: "December 2013 - June 2014"
}
</script>
<style lang="scss">

@media screen and (max-width: 880px) {
}
</style>