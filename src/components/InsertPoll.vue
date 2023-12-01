<!-- MyComponent.vue -->

<template>
    <form @submit.prevent="insertData">
        <div class="space-y-12">
            <div class="pb-12">

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4" v-if="polll">
                        <label for="audience" class="block text-sm font-medium leading-6 text-gray-900">Audience</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input required v-model="insertDataArr.audience" type="text" name="audience" id="audience"
                                    autocomplete="audience"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="India" />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="genre" class="block text-sm font-medium leading-6 text-gray-900">
                            Genre</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input v-model="insertDataArr.genre" type="text" name="genre" required id="genre"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Cricket" />
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <img :src="insertDataArr.bg" v-if="edit" />
                    </div>

                    <div class="sm:col-span-4">
                        <label for="bg" class="block text-sm font-medium leading-6 text-gray-900">
                            Banner</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input ref="bg" accept="image/*" @change="uploadBanner" type="file" name="bg"
                                    :required="!edit" id="bg"
                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title (Home Screen)
                        </label>
                        <div class="mt-2">
                            <input v-model="insertDataArr.name" type="text" name="title" id="title" required
                                placeholder="Will india win this world cup?"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="col-span-full">
                        <label for="ques" class="block text-sm font-medium leading-6 text-gray-900">Title (Poll Page)
                        </label>
                        <div class="mt-2">
                            <input v-model="insertDataArr.ques" type="text" name="ques" id="ques" required
                                placeholder="Will india win this world cup?"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-4 sm:col-start-1" v-if="polll">
                        <label for="task" class="block text-sm font-medium leading-6 text-gray-900">Options</label>
                        <div class="flex mt-2">
                            <input placeholder="Add a new option" v-model="newTask" @keyup.enter="addTask" type="text"
                                name="task" id="task"
                                class="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <button @click.prevent="addTask" class="bg-blue-500 text-white px-4 py-2">Add</button>
                        </div>
                    </div>
                    <ul class="sm:col-span-3" v-if="polll">
                        <li v-for="(task, index) in tasks" :key="index"
                            class="flex justify-between items-center border-b border-gray-300 p-2 w-full">
                            {{ task.name }}

                            <input type="file" :ref="'op' + index" accept="image/*" @change="uploadOptionImage"
                                :id="'op' + index">



                            <button class="text-red-500 cursor-pointer" @click="deleteTask(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                                </svg>
                            </button>

                        </li>
                    </ul>
                    <div class="col-span-full">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">
                            Content</label>
                        <div id="editor"></div>
                    </div>
                    <br>
                    <div class="col-span-full"> </div>
                    <div class="sm:col-span-2" v-if="polll">
                        <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Time of
                            Ending
                            the Poll
                        </label>
                        <div class="mt-2">
                            <input v-model="insertDataArr.timeLeft" type="datetime-local" name="time" id="postal-code"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-red-500" v-if="err">
            {{ err }}</div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>

    </form>
</template>
  
<script>
import { setDoc, doc, getDoc } from 'firebase/firestore/lite';
import { db, storage } from '../main'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import 'quill/dist/quill.snow.css';

import Quill from 'quill';

let quill

export default {
    props: {
        edit: {
            type: String,
            required: true
        }
    },
    mounted() {
        
        this.prefetchData(this.$route.path.startsWith('/poll')?'polls':'blogs', this.$route.params.id)
        quill = new Quill('#editor', {
            theme: 'snow',
        });
    },

    data() {
        return {
            polll: this.$route.path.startsWith('/poll'),
            id:this.$route.params.id,
            newTask: '',
            err: '',
            tasks: [],
            insertDataArr: {
                name: '',
                bg: '',
                content: '',
                ques: '',
                genre: '',
                audience: '',
                timeLeft: null,
                closed: false
            },
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    name: this.newTask.trim(),
                    img: ''
                });
                this.newTask = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },

        insertData() {
            let pid
            let currDate
            if (this.edit) {
                pid = this.id
                currDate = new Date(parseInt(this.id))
            }
            else {
                currDate = new Date()
                pid = currDate.getTime().toString()
            }
            if (this.polll) {

                this.insertPoll(pid, currDate)
            }
            else {
                this.insertBlog(pid, currDate)
            }
        },

        insertPoll(pid, currDate) {

            const data = {
                ...this.insertDataArr
            };

            if (this.tasks.length < 2) {
                this.err = 'Please add at least 2 options!'
                setTimeout(() => this.err = '', 3000)
                return
            }

            data.options = this.tasks

            if (quill.root.innerHTML === '<p><br></p>') {
                this.err = 'Please enter something inside Content!'
                setTimeout(() => this.err = '', 3000)
                return
            }
            data.content = quill.root.innerHTML

            this.addAudience(data.audience)
                .catch((e) => {
                    this.err = e.code
                })

            this.addGenre(data.genre)
                .catch((e) => {
                    this.err = e.code
                })


            this.addVotesArr(pid, data.options)

            let timeleftDate = new Date(data.timeLeft)

            let deactivationTime = timeleftDate.getTime() - currDate.getTime()
            data.date = currDate.toString()
            data.timeLeft = timeleftDate.toString()
            data.id = pid

            setDoc(doc(db, 'polls',pid), data)
                .then(r => {
                    alert(`Poll ${this.edit ? 'edited' : 'created'} successfully!!`)
                    if (this.edit) {
                        this.$router.back()
                      
                    }
                    else {
                        this.clearform()
                    }
                })
                .catch(e => {
                    alert(e.code)
                    console.log(e)
                })

            setTimeout(() => this.deactivatePoll(pid, data), deactivationTime)
        },
        insertBlog(pid, currDate) {

            const data = {
                ...this.insertDataArr
            };

            data.section = ''

            if (quill.root.innerHTML === '<p><br></p>') {
                this.err = 'Please enter something inside Content!'
                setTimeout(() => this.err = '', 3000)
                return
            }
            data.content = quill.root.innerHTML

            this.addGenre(data.genre)
                .catch((e) => {
                    this.err = e.code
                })

            data.date = currDate.toString()
            data.id = pid

            setDoc(doc(db, 'blogs',pid), data)
                .then(r => {
                    alert(`Blog ${this.edit ? 'edited' : 'created'} successfully!!`)
                    if (this.edit) {
                        this.$router.back()
                    }
                    this.clearform()
                })
                .catch(e => {
                    alert(e.code)
                    console.log(e)
                })
        },

        clearform() {
            this.newTask = '',
                this.err = '',
                this.tasks = [],
                this.$refs.bg.value = null;
            this.insertDataArr = {
                bg: '',
                name: '',
                content: '',
                ques: '',
                genre: '',
                audience: '',
                timeLeft: null,
                closed: false
            }
            quill.root.innerHTML = ''
        },

        async addAudience(name) {
            let r = await getDoc(doc(db, 'audiences', name))
            if (r.exists()) {
                setDoc(doc(db, 'audiences', name), {
                    country: name,
                    value: r.data().value + 1
                })
            }
            else {
                setDoc(doc(db, 'audiences', name), {
                    country: name,
                    value: 1
                })
            }
        },

        async addGenre(name) {
            let r = await getDoc(doc(db, 'genres', name))
            if (r.exists()) {
                setDoc(doc(db, 'genres', name), {
                    name,
                    value: r.data().value + 1
                })
            }
            else {
                setDoc(doc(db, 'genres', name), {
                    name,
                    value: 1
                })
            }
        },
        async uploadBanner(event) {
            const file = event.target.files[0];

            if (file) {
                try {
                    // Create a reference to the storage location
                    const storageRef = ref(storage, 'banners/' + file.name);

                    // Upload the file
                    await uploadBytes(storageRef, file)

                    // Get the download URL
                    const url = await getDownloadURL(storageRef);

                    // Update the image URL in the component
                    this.insertDataArr.bg = url
                } catch (error) {
                    this.err = error.code
                    setTimeout(() => this.err = '', 1500)
                    console.error('Error uploading image:', error.message);
                }
            }
        },

        async uploadOptionImage(event) {
            const file = event.target.files[0];

            if (file) {
                try {
                    // // Create a reference to the storage location
                    const storageRef = ref(storage, 'options/' + file.name);

                    // // Upload the file
                    await uploadBytes(storageRef, file)

                    // // Get the download URL
                    const url = await getDownloadURL(storageRef);

                    // // Update the image URL in the component
                    this.tasks[event.target.id.split('op')[1]]['img'] = url
                } catch (error) {
                    this.err = error.code
                    setTimeout(() => this.err = '', 1500)
                    console.error('Error uploading image:', error.message);
                }
            }


        },

        async addVotesArr(pid, options) {
            let o = {}
            options.forEach(element => {
                o[element.name] = 0
            });
            setDoc(doc(db, 'votes', pid), {})
            setDoc(doc(db, 'results', pid), o)
        },

        deactivatePoll(pid, poll) {
            poll.closed = true
            setDoc(doc(db, 'polls', pid), poll)
        },

        prefetchData(name, id) {
            if (this.edit) {
                getDoc(doc(db, name, id))
                    .then(d => {
                        if (d.exists()) {
                            this.insertDataArr = { ...d.data() }
                            if(name==='polls'){
                            this.tasks = [...this.insertDataArr.options]
                            let yourDate = new Date(this.insertDataArr.timeLeft)
                            let formattedDate = yourDate.getFullYear() + '-' +
                                String(yourDate.getMonth() + 1).padStart(2, '0') + '-' +
                                String(yourDate.getDate()).padStart(2, '0') + 'T' +
                                String(yourDate.getHours()).padStart(2, '0') + ':' +
                                String(yourDate.getMinutes()).padStart(2, '0');
                            this.insertDataArr.timeLeft = formattedDate
                            }
                            quill.root.innerHTML = this.insertDataArr.content
                        }
                        else{
                            alert(name+" with this id does not exist")
                            this.$router.back()
                        }
                    })
            }
        }
    }
};
</script>
  
<style scoped></style>
  