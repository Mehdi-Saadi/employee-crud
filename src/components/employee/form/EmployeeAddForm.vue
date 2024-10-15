<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import EmployeeFormField from '@/components/employee/form/EmployeeFormField.vue';
import useEmployeeStore from '@/stores/employee';
import type { EmployeeToAdd } from '@/types/employee';
import { cloneDeep } from 'lodash';
import { ref } from 'vue';

const { addEmployee } = useEmployeeStore();
const showFrom = ref<boolean>(false);

const defaultFormValue: EmployeeToAdd = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    family: [],
};

const form = ref<EmployeeToAdd>(cloneDeep(defaultFormValue));

const submit = (): void => {
    addEmployee(form.value);

    // reset form fields to default
    form.value = cloneDeep(defaultFormValue);
};
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
                    v-model="form.firstName"
                    id="name"
                    label="نام"
                    type="text"
                />
                <EmployeeFormField
                    v-model="form.lastName"
                    label="نام خانوادگی"
                    id="last-name"
                    type="text"
                />
                <EmployeeFormField
                    v-model="form.dateOfBirth"
                    label="تاریخ تولد"
                    id="date-of-birth"
                    type="date"
                />
                <EmployeeFormField
                    v-model="form.email"
                    label="ایمیل"
                    id="email"
                    type="email"
                />
            </div>
            <!-- buttons -->
            <div class="flex items-center justify-between">
                <ButtonComponent
                    @click="submit()"
                    class="text-white bg-green-700 hover:bg-green-800"
                    title="افزودن"
                />
                <ButtonComponent
                    @click="showFrom = false"
                    class="text-white bg-gray-500 hover:bg-gray-600"
                    title="انصراف"
                />
            </div>
        </div>
    </div>

    <!-- trigger -->
    <ButtonComponent
        v-else
        @click="showFrom = true"
        class="text-white bg-green-700 hover:bg-green-800 mx-auto mt-5"
        title="افزودن کارمند جدید"
    />
</template>
