<!-- MyComponent.vue -->

<template>
   
    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">

        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Edit Poll</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="$router.push('/poll/edit/'+id)">
                    <div class="col-span-full">
                        <label for="pid" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Poll Id</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input v-model="id" type="text" name="pid" required id="pid"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                                    placeholder="1234" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Delete Poll</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="deletePoll(id1)">
                    <div class="col-span-full">
                        <label for="pid1" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Poll Id</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input v-model="id1" type="text" name="pid1" required id="pid1"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                                    placeholder="1234" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
                    </div>
                </form>
            </div>
        </div>
        
        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Delete Poll</h2>
            </div>

            <div class="p-8 col-span-full">
                <form>
                    <div class="col-span-full">
                        <label for="pid" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Poll Id</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input v-model="id" type="text" name="pid" required id="pid"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                                    placeholder="1234" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
                    </div>
                </form>
            </div>
        </div>
        <div
            class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="font-medium text-gray-700">Create Poll</h2>
            </div>
            <InsertPoll ></InsertPoll>
        </div>
        
    </section>
</template>
  
<script>

import { deleteDoc, doc } from 'firebase/firestore/lite';
import InsertPoll from '../components/InsertPoll.vue';
import { db } from '../main';

export default {
    components: {
        InsertPoll
    },
    data() {
        return {
            id: '',
            id1:''
        }
    },

    created() {

    },

    mounted() {

    },
    methods: {
        deletePoll(id){
            let res=window.confirm("Do you really want to delete the poll with id:"+id)
            if(res){
            deleteDoc(doc(db,'polls',id))
            .then((r)=>{
                alert('Poll deleted successfully!')
                this.id1=''
            })
            .catch((e)=>console.log(e))
            }
            else{

            }
        }

    },

}
</script>
  
<style scoped>
/* Your component-specific styles go here */
</style>
  