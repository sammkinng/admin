<!-- MyComponent.vue -->

<template>
    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">

        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Edit Poll</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="$router.push('/poll/edit/' + id)">
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
                <h2 class="font-medium text-gray-700">Add Notification</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="addNotifs()">
                    <div class="col-span-full">
                        <label for="ntf" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Notification </label>

                        <div
                            class="mt-2 mb-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input v-model="ntf" type="text" name="ntf" required id="ntf"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                                placeholder="Hello Notification!" />
                        </div>

                        <label for="link" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Link </label>

                        <div
                            class="mt-2 mb-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input v-model="link" type="text" name="link" required id="link"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                                placeholder="/blog/home" />
                        </div>

                        <label for="ic" class="block text-sm font-medium leading-6 text-gray-900">
                            Insert Image </label>

                        <div
                            class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input ref="ic" accept="image/*" @change="uploadIcon" type="file" name="ic" id="ic"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />

                        </div>



                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
                    </div>
                </form>
            </div>
        </div>

        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Delete Notification</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="delteteNotifs()">
                    <div class="col-span-full">
                        <label for="ntf" class="block text-sm font-medium leading-6 text-gray-900">
                            Select Notification </label>

                        <div class="mt-2 ">
                            <select id="del" name="del" v-model="del" required
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option value="">Select Notif</option>
                                                <option v-for="(item, idx) in notifs" :key="idx" :value="item.id">
                                                    {{ item.text }}</option>
                                            </select>
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
            <InsertPoll></InsertPoll>
        </div>
    </section>
</template>
  
<script>

import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import InsertPoll from '../components/InsertPoll.vue';
import { db,storage } from '../main';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    components: {
        InsertPoll
    },
    data() {
        return {
            id: '',
            id1: '',
            ntf: '',
            icon: '',
            notifs:[],
            del:'',
            link:''
        }
    },

    created() {

    },

    mounted() {
        this.getAllnotifs()
    },
    methods: {
        deletePoll(id) {
            let res = window.confirm("Do you really want to delete the poll with id:" + id)
            if (res) {
                deleteDoc(doc(db, 'polls', id))
                    .then((r) => {
                        alert('Poll deleted successfully!')
                        this.id1 = ''
                    })
                    .catch((e) => console.log(e))
            }
            else {

            }
        },

        addNotifs() {
            let id=new Date().getTime().toString()

            setDoc(doc(db,'notifications',id),{
                text:this.ntf,
                img:this.icon,
                id,
                link
            })
            .then(()=>{
                alert('Notification added successfully!')
                this.ntf='',
                this.$refs.ic.value = null;
            })
            .catch(()=>console.log(e))

        },

        async uploadIcon(event) {
            const file = event.target.files[0];

            if (file) {
                try {
                    // Create a reference to the storage location
                    const storageRef = ref(storage, 'notifIcons/' + file.name);

                    // Upload the file
                    await uploadBytes(storageRef, file)

                    // Get the download URL
                    const url = await getDownloadURL(storageRef);

                    // Update the image URL in the component
                    this.icon = url
                } catch (error) {
                    console.error('Error uploading image:', error.message);
                }
            }
        },

        delteteNotifs() { 
            let r=confirm('Delete notification?')
            if(r && this.del){
                deleteDoc(doc(db,'notifications',this.del))
                .then(()=>{
                    alert("Notification delete success!")
                    this.del=''
                })
                .catch(e=>console.log(e))
            }
        },

        getAllnotifs() { 
            getDocs(collection(db,'notifications'))
            .then(qs=>{
                let x=[]
                qs.forEach(d=>{
                    x.push(d.data())
                })
                this.notifs=x
            })
            .catch(e=>console.log(e))
        }

    },

}
</script>
  
<style scoped>
/* Your component-specific styles go here */
</style>
  