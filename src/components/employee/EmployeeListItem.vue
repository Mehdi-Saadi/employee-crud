<script setup lang="ts">
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import type { EmployeeBrief } from '@/types/employee';

defineProps<{
    employee: EmployeeBrief;
}>();
</script>

<template>
    <li class="flex items-center justify-between border h-14 px-5 cursor-pointer">
        <span>
            {{ employee.firstName }}
        </span>
        <ChevronDownIcon class="size-4" />
    </li>
</template>
