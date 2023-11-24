<template>
    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">


        <div
            class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="font-medium text-gray-700">Edit</h2>
            </div>
            <InsertPoll poll="polls" edit="true"></InsertPoll></div>
    </section>
    <!-- <InsertPoll poll="polls" edit="true"></InsertPoll> -->
</template>


<script>

import InsertPoll from '../components/InsertPoll.vue';

export default {
    components: {
        InsertPoll
    },
    data() {
        return {
            id: ''
        }
    },

    created() {

    },

    mounted() {

    },



    methods: {

    },

}
</script>
  
<style scoped>
/* Your component-specific styles go here */
</style>
  