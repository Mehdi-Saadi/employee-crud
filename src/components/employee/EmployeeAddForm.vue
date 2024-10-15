<script setup lang="ts">
import EmployeeFormField from './EmployeeFormField.vue';
import { ref } from 'vue';

const showFrom = ref<boolean>(false);
</script>

<template>
    <!-- form -->
    <div 
        v-if="showFrom"
        class="relative mt-5"
    >
        <div class="flex flex-col space-y-5 p-5 border rounded">
            <!-- employee data -->
            <div class="grid grid-cols-2 gap-5">
                <EmployeeFormField 
                    :autofocus="true"
                    id="name"
                    label="نام"
                    type="text"
                />
                <EmployeeFormField 
                    label="نام خانوادگی"
                    id="last-name"
                    type="text"
                />
                <EmployeeFormField 
                    label="تاریخ تولد"
                    id="date-of-birth"
                    type="date"
                />
                <EmployeeFormField 
                    label="ایمیل"
                    id="email"
                    type="email"
                />
            </div>
        </div>
    </div>

    <!-- trigger -->
    <button
        v-else
        @click="showFrom = true"
        class="text-white bg-green-700 rounded max-w-max px-5 py-2 mx-auto mt-5 hover:bg-green-800 transition duration-200" 
        type="button"
    >
        افزودن کارمند جدید
    </button>
</template>
