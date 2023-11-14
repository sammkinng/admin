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


                <div class="px-8 md:col-span-2 md:row-span-2 bg-white rounded-lg shadow-md shadow-gray-200">
                    <div class="py-5 border-b border-gray-100 sm:flex sm:items-center sm:justify-between">
                        <h2 class="font-medium text-gray-700">Create Blog</h2>
                    </div>

                   

                </div>

                <div
                    class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-1 md:row-span-2 gap-y-4 gap-x-8 ">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <h2 class="font-medium text-gray-700">Update Score by Name</h2>
                    </div>


                   

                </div>

                <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
                    <div class="px-6 py-5 border-b border-gray-100">
                        <h2 class="font-medium text-gray-700">Get Rank by Student Name</h2>
                    </div>

                    <div class="flex items-center p-8">
                        <div class="w-full">
                            
                        </div>

                    </div>
                </div>

                <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
                    <div class="px-6 py-5 border-b border-gray-100">
                        <h2 class="font-medium text-gray-700">Delete Student</h2>
                    </div>

                    <div class="flex items-center p-8">
                        <div class="w-full">
                            
                        </div>

                    </div>
                </div>
            </section>
  </template>
  
  <script>
import axios from 'axios';
import InsertPoll from '../components/InsertPoll.vue';
const apiUrl = 'http://localhost:8080';

export default {
    components:{
        InsertPoll
    },
    data() {
        return {
            updateArr: {
                name: '',
                satScore: ''
            },
            tableItems: [],
            deleteData: '',
            rank: '',
            rName: ''
        }
    },

    created() {
        this.getAllData()
    },

    mounted() {

    },



    methods: {
        getAllData() {
            try {
                axios.get(`${apiUrl}/api/sat-results/view-all`)
                    .then((response) => {
                        console.log(response.data);
                        this.tableItems = response.data
                    });
            } catch (error) {

            }
        },
        updateData() {
            try {
                console.log(this.updateArr)

                axios.put(`${apiUrl}/api/sat-results/update-score/${encodeURIComponent(this.updateArr.name)}?newScore=${this.updateArr.satScore}`)
                    .then((response) => {
                        console.log(response.data);
                        alert('Updated')
                        this.updateArr = {
                            name: '',
                            satScore: ''
                        }
                        this.getAllData()
                    });
            } catch (error) {

            }
        },
        getRank() {
            try {
                axios.get(`${apiUrl}/api/sat-results/get-rank/${encodeURIComponent(this.rName)}`)
                    .then((response) => {
                        console.log(response.data)
                        this.rank = response.data
                        this.rName = ''
                    });
            } catch (error) {

            }
        },
        deleteD() {
            try {
                console.log('here')
                axios.delete(`${apiUrl}/api/sat-results/delete/${this.deleteData}`)
                    .then((r) => {
                        console.log(r.data)
                        alert('deleted')
                        this.deleteData = ''
                        this.getAllData()
                    });
            } catch (error) {
                console.log('there')
            }
        }
    },

}
</script>
  
  <style scoped>
  /* Your component-specific styles go here */
  </style>
  