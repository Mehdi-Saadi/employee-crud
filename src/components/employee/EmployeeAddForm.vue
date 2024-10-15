<script setup lang="ts">
import SuccessButton from '@/components/buttons/SuccessButton.vue';
import EmployeeFormField from '@/components/employee/EmployeeFormField.vue';
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
            <!-- buttons -->
            <div class="flex items-center justify-between">
                <SuccessButton title="افزودن" />
            </div>
        </div>
    </div>

    <!-- trigger -->
    <SuccessButton
        v-else
        @click="showFrom = true"
        class="mx-auto mt-5"
        title="افزودن کارمند جدید"
    />
</template>
