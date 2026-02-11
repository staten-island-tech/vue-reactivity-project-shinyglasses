<template>
    <h1>Goal Tracker</h1>
    <button @click="<GoalCreation></GoalCreation>">Create Goal</button>
    <div>
        <!--put goals here-->
    </div>
</template>

<script setup>
import GoalCard from '../components/GoalCard.vue'
import { ref } from 'vue';
import GoalCreation from '../components/GoalCreation.vue';

const goals = ref([

]) //array of objs
</script>

<style scoped>

</style>