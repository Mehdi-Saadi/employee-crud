<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import FamilyForm from '@/components/employee/form/FamilyForm.vue';
import FormField from '@/components/form/FormField.vue';
import useEmployeeStore from '@/stores/employee';
import { validateEmail, validateString } from '@/scripts/validation';
import type { EmployeeToAdd } from '@/types/employee';
import { Form } from 'vee-validate';
import { cloneDeep } from 'lodash';
import { ref } from 'vue';

const props = defineProps<{
    employee: EmployeeToAdd;
    formType: 'add' | 'update';
}>();
const emit = defineEmits(['close', 'submit']);

const employeeStore = useEmployeeStore();
const getDefaultFormValues = (): EmployeeToAdd => cloneDeep(props.employee);

const form = ref<EmployeeToAdd>(getDefaultFormValues());

const addFamilyMember = (): void => {
    form.value.family.push({
        name: '',
        dateOfBirth: '',
        relation: 'spouse',
    });
};

const deleteFamilyMember = (index: number): void => {
    form.value.family.splice(index, 1);
};

const resetForm = (): void => {
    form.value = getDefaultFormValues();
};

defineExpose({ resetForm });
</script>

<template>
    <Form
        :class="{ border: formType === 'add' }"
        class="flex flex-col space-y-5 p-5 rounded mt-5"
        @submit="values => console.log(values)"
    >
        <!-- employee data -->
        <div class="grid grid-cols-2 gap-5">
            <FormField
                :rules="validateString"
                name="firstName"
                label="نام"
                type="text"
            />
            <FormField
                :rules="validateString"
                name="lastName"
                label="نام خانوادگی"
                type="text"
            />
            <FormField
                :rules="validateString"
                name="dateOfBirth"
                label="تاریخ تولد"
                type="date"
            />
            <FormField
                :rules="validateEmail"
                name="email"
                label="ایمیل"
                type="email"
            />
        </div>
        <!-- family members -->
        <div class="flex flex-col border rounded p-5 space-y-5">
            <FamilyForm
                v-for="(member, index) of form.family"
                :index
                :key="member.name"
                @delete="deleteFamilyMember"
            />
            <ButtonComponent
                @click="addFamilyMember()"
                class="text-white bg-blue-500 hover:bg-blue-600"
                title="افزودن عضو"
            />
        </div>
        <!-- buttons -->
        <div
            :class="[formType === 'add' ? 'justify-between' : 'justify-center']"
            class="flex items-center"
        >
            <ButtonComponent
                :disabled="
                    formType === 'add'
                        ? employeeStore.isLoading.addEmployee
                        : employeeStore.isLoading.updateEmployee
                "
                :title="formType === 'add' ? 'افزودن' : 'بروزرسانی'"
                class="text-white bg-green-700 hover:bg-green-800 disabled:hover:bg-green-700"
                type="submit"
            />
            <ButtonComponent
                v-if="formType === 'add'"
                @click="emit('close')"
                class="text-white bg-gray-500 hover:bg-gray-600"
                title="انصراف"
            />
        </div>
    </Form>
</template>
