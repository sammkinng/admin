<!-- MyComponent.vue -->

<template>
    <section class="flex flex-col w-full px-6 md:justify-between md:items-center md:flex-row">
        <div>
            <h2 class="text-3xl font-medium text-gray-800">Admin Panel</h2>
            <p class="mt-2 text-sm text-gray-500"></p>
        </div>


    </section>

    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">

        <div
            class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="font-medium text-gray-700">Create Poll</h2>
            </div>


            <InsertPoll poll="poll"></InsertPoll>

        </div>


        

       
    </section>
</template>
  
<script>
import {  deleteDoc,doc  } from 'firebase/firestore/lite';

import InsertPoll from '../components/InsertPoll.vue';
import { db } from '../main';


export default {
    components: {
        InsertPoll
    },
    data() {
        return {
            audience: ''
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
  