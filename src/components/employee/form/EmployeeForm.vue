<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import FamilyForm from '@/components/employee/form/FamilyForm.vue';
import FormField from '@/components/form/FormField.vue';
import useEmployeeStore from '@/stores/employee';
import type { EmployeeToAdd } from '@/types/employee';
import { Form } from 'vee-validate';
import { cloneDeep } from 'lodash';
import * as Yup from 'yup';
import { ref } from 'vue';
import {
    thisFieldIsRequiredMsg,
    thisFieldMustBeValidDateMsg,
    thisFieldMustBeValidEmailMsg,
} from '@/scripts/validation';

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

const submitForm = (values: any): void => {
    console.log(values);

    // emit('submit', values);
};

const schema = Yup.object({
    firstName: Yup.string().required(thisFieldIsRequiredMsg),
    lastName: Yup.string().required(thisFieldIsRequiredMsg),
    dateOfBirth: Yup.date()
        .max(new Date(), thisFieldMustBeValidDateMsg)
        .required(thisFieldIsRequiredMsg),
    email: Yup.string().email(thisFieldMustBeValidEmailMsg).required(thisFieldIsRequiredMsg),
    family: Yup.array().of(
        Yup.object({
            name: Yup.string().required(thisFieldIsRequiredMsg),
            dateOfBirth: Yup.date()
                .max(new Date(), thisFieldMustBeValidDateMsg)
                .required(thisFieldIsRequiredMsg),
            relation: Yup.string()
                .oneOf(['spouse', 'son', 'daughter'])
                .required(thisFieldIsRequiredMsg),
        })
    ),
});
</script>

<template>
    <Form
        :class="{ border: formType === 'add' }"
        :initial-values="employee"
        :validation-schema="schema"
        class="flex flex-col space-y-5 p-5 rounded mt-5"
        @submit="submitForm"
    >
        <!-- employee data -->
        <div class="grid grid-cols-2 gap-5">
            <FormField
                name="firstName"
                label="نام"
                type="text"
            />
            <FormField
                name="lastName"
                label="نام خانوادگی"
                type="text"
            />
            <FormField
                name="dateOfBirth"
                label="تاریخ تولد"
                type="date"
            />
            <FormField
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
