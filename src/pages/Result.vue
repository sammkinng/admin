<template>
    <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 ">


        <div
            class="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <h2 class="font-medium text-gray-700">Add/Edit Result ( live )</h2>
            </div>
            <form @submit.prevent="addResult">
                <div class="space-y-12">
                    <div class="pb-12">

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

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


                            <div class="col-span-full">
                                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">
                                    Content</label>
                                <div id="editor"></div>
                            </div>
                            <br>
                            <!-- <div class="col-span-full"> </div>
                     -->
                        </div>
                    </div>
                </div>


                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>

            </form>
        </div>
    </section>
</template>

<script>
import 'quill/dist/quill.snow.css';

import Quill from 'quill';
import { setDoc, doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../main';

let quill
export default {
    props: {
        edit: {
            type: String,
            required: true
        }
    },
    mounted() {

        quill = new Quill('#editor', {
            theme: 'snow',
        });
    },

    data() {
        return {
            id: ''
        };
    },

    methods: {
        addResult() {
            getDoc(doc(db, 'results', this.id))
                .then(d => {
                    if (d.exists()) {
                        setDoc(doc(db, 'results', this.id), {
                            ...d.data(),
                            'content-live-poll': quill.root.innerHTML
                        })
                            .then(() => {
                                alert('Poll live Content Added Successfully!')
                                this.id=''
                                quill.root.innerHTML=''
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

};
</script>
  
<style scoped></style>
  