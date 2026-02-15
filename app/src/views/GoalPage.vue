<template>
    
    <h1 class="text-3xl bold mt-5 underline text-center">Goal Tracker</h1>
    <button class='m-auto text-xl text-white font-bold hover:bg-blue-700 bg-blue-400 rounded-lg block mt-5 h-10 w-30 px-3 '@click="displayGoalsForm">Create Goal</button>
    <GoalCreation @goals-array='getGoalsArrayEmit' v-if="showGoalsForm" @close="showGoalsForm = false" />
    <div class="flex flex-wrap justify-center">
        <GoalCard @delete-goal='deleteGoal' v-for="goal in goalsArray" :key="goal.id" :goal="goal" /> 
    </div>
</template>

<script setup>
import GoalCard from '../components/GoalCard.vue'
import { ref} from 'vue';
import GoalCreation from '../components/GoalCreation.vue';

let goalsArray = ref([])

const showGoalsForm = ref(false)
function displayGoalsForm() {
    showGoalsForm.value = true;
}
function deleteGoal(goalToDelete) {
    goalsArray.value.splice(goalsArray.value.indexOf(goalToDelete), 1)
}

function getGoalsArrayEmit(obj) {
    //never called
    goalsArray.value.push({...obj})
    console.log(goalsArray.value)
}
</script>

<style scoped>

</style>