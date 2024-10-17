<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import FamilyForm from '@/components/employee/form/FamilyForm.vue';
import FormField from '@/components/form/FormField.vue';
import type { EmployeeToAdd } from '@/types/employee';
import { cloneDeep } from 'lodash';
import { ref } from 'vue';

const props = defineProps<{
    employee: EmployeeToAdd;
    formType: 'add' | 'update';
}>();
const emit = defineEmits(['close', 'submit']);

const getDefaultFormValues = (): EmployeeToAdd => cloneDeep(props.employee);

const form = ref<EmployeeToAdd>(getDefaultFormValues());

const addFamilyMember = (): void => {
    form.value.family.push({
        name: '',
        dateOfBirth: '',
        relation: 'spouse',
    });
};

const submit = (): void => {
    emit('submit', form.value);

    if (props.formType === 'add') {
        // reset form fields to default
        form.value = getDefaultFormValues();
    }
};
</script>

<template>
    <div
        :class="{ border: formType === 'add' }"
        class="flex flex-col space-y-5 p-5 rounded mt-5"
    >
        <!-- employee data -->
        <div class="grid grid-cols-2 gap-5">
            <FormField
                :autofocus="true"
                v-model="form.firstName"
                id="name"
                label="نام"
                type="text"
            />
            <FormField
                v-model="form.lastName"
                label="نام خانوادگی"
                id="last-name"
                type="text"
            />
            <FormField
                v-model="form.dateOfBirth"
                label="تاریخ تولد"
                id="date-of-birth"
                type="date"
            />
            <FormField
                v-model="form.email"
                label="ایمیل"
                id="email"
                type="email"
            />
        </div>
        <!-- family members -->
        <div class="flex flex-col border rounded p-5 space-y-5">
            <FamilyForm
                v-for="(member, index) of form.family"
                :key="member.name"
                v-model="form.family[index]"
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
                @click="submit()"
                class="text-white bg-green-700 hover:bg-green-800"
                :title="formType === 'add' ? 'افزودن' : 'بروزرسانی'"
            />
            <ButtonComponent
                v-if="formType === 'add'"
                @click="emit('close')"
                class="text-white bg-gray-500 hover:bg-gray-600"
                title="انصراف"
            />
        </div>
    </div>
</template>
