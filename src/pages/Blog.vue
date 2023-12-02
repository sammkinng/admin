<!-- MyComponent.vue -->

<template>
    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">

        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Edit Blog</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="$router.push('/blog/edit/' + id)">
                    <div class="col-span-full">
                        <label for="pid" class="block text-sm font-medium leading-6 text-gray-900">
                            Enter Blog Id</label>
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
                <h2 class="font-medium text-gray-700">Delete Blog</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="deleteBlog(id1)">
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
                <h2 class="font-medium text-gray-700">Change logo</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="changeLogo()">
                    <div class="col-span-full">
                        <label for="logo" class="block text-sm font-medium leading-6 text-gray-900">
                            Choose logo</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input ref="logo" accept="image/*" @change="uploadLogo" type="file" name="logo" id="logo"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class=" bg-white rounded-lg shadow-md shadow-gray-200 lg:row-span-2">
            <div class="px-6 py-5 border-b border-gray-100">
                <h2 class="font-medium text-gray-700">Change FavIcon</h2>
            </div>

            <div class="p-8 col-span-full">
                <form @submit.prevent="changeIcon()">
                    <div class="col-span-full">
                        <label for="logo" class="block text-sm font-medium leading-6 text-gray-900">
                            Choose FavIcon</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input ref="icon" accept="image/*" @change="uploadIcon" type="file" name="icon" id="icon"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div
            class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="font-medium text-gray-700">Create Blog</h2>
            </div>
            <InsertPoll></InsertPoll>
        </div>
    </section>
</template>
 
<script>

import { deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import InsertPoll from '../components/InsertPoll.vue';

import { db, storage } from '../main';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default {
    components: {
        InsertPoll
    },
    data() {
        return {
            id: '',
            id1: '',
            icon: '',
            logo: ''
        }
    },

    created() {

    },

    mounted() {

    },



    methods: {
        deleteBlog(id) {
            let r = confirm('Do you really want to delete blog with Id: ' + id + "?")
            if (r) {
                deleteDoc(doc(db, 'blogs', id))
                    .then(() => {
                        this.id1 = ''
                        alert('Blog deleted Successfully!')
                    })
                    .catch(e => { console.log(e) })
            }
        },
        changeLogo() {
            setDoc(doc(db, 'logo', 'logo'), {
                url: this.logo
            })
                .then(() => {
                    alert('Logo change Success')
                    this.$refs.logo.value = null
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        changeIcon() {
            setDoc(doc(db, 'favIcon', 'icon'), {
                url: this.icon
            })
            .then(()=>{
                alert('FavIcon changed!')
                this.$refs.icon.value=null
            })
            .catch(e=>{
                console.log(e)
            })
        },
        async uploadIcon(event) {
            const file = event.target.files[0];

            if (file) {
                try {
                    // Create a reference to the storage location
                    const storageRef = ref(storage, 'favIcons/' + file.name);

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
        async uploadLogo(event) {
            const file = event.target.files[0];

            if (file) {
                try {
                    // Create a reference to the storage location
                    const storageRef = ref(storage, 'logos/' + file.name);

                    // Upload the file
                    await uploadBytes(storageRef, file)

                    // Get the download URL
                    const url = await getDownloadURL(storageRef);

                    // Update the image URL in the component
                    this.logo = url
                } catch (error) {
                    console.error('Error uploading image:', error.message);
                }
            }
        },
    },

}
</script>
 
<style scoped>
/* Your component-specific styles go here */
</style>
 