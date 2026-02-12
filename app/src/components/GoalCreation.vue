<template>
    <div>
        <h1>Goal Creation</h1>
        <!-- <form action="submit" @submit.prevent="addGoal(goal)">
            <input type="text" placeholder="Goal Title" v-model="goal.name"/>
            <h2>Status:</h2>
            <select v-model="goal.status">
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <h2>Timeline:</h2>
            <select v-model="goal.timeline">
                <option value="long-term">Long Term</option>
                <option value="medium-term">Medium Term</option>
                <option value="short-term">Short Term</option>
            </select>
            <button type="submit">Create Goal</button>
        </form> --> 
        <!--broken bc the goal stuff isnt made yet-->
    </div>
</template>

<script>
    import GoalCard from './GoalCard.vue';
    import { ref } from 'vue';
    const goals = ref([

    ]);
    function addGoal(goal) {
        goals.value.push(goal);
    }
    export default {
        components: {
            GoalCard
        }
    }
</script>

<style scoped>

</style>