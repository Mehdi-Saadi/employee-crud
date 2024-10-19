<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import FamilyForm from '@/components/employee/form/FamilyForm.vue';
import FormField from '@/components/form/FormField.vue';
import useEmployeeStore from '@/stores/employee';
import { employeeValidationSchema } from '@/scripts/validation';
import type { EmployeeToAdd } from '@/types/employee';
import { FieldArray, Form } from 'vee-validate';

defineProps<{
    employee: EmployeeToAdd;
    formType: 'add' | 'update';
}>();
const emit = defineEmits(['close', 'submit']);

const employeeStore = useEmployeeStore();

const initialFamilyMemberValue = {
    name: '',
    dateOfBirth: '',
    relation: '',
};

const handleSubmit = (values: any, { resetForm }: { resetForm: any}) => {
    emit('submit', {
        values,
        resetForm,
    });
};
</script>

<template>
    <Form
        :class="{ border: formType === 'add' }"
        :initial-values="employee"
        :validation-schema="employeeValidationSchema"
        class="flex flex-col space-y-5 p-5 rounded mt-5"
        @submit="handleSubmit"
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
            <FieldArray
                name="family"
                v-slot="{ fields, push, remove }"
            >
                <FamilyForm
                    v-for="(member, index) of fields"
                    :key="member.key"
                    :member="member.value as any"
                    :index
                    @delete="remove(index)"
                />
                <ButtonComponent
                    @click="push(initialFamilyMemberValue)"
                    class="text-white bg-blue-500 hover:bg-blue-600"
                    title="افزودن عضو"
                />
            </FieldArray>
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
