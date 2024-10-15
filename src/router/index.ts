import { createRouter, createWebHistory } from 'vue-router';
import EmployeeListView from '@/views/EmployeeListView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/employees',
            name: 'employee.list',
            component: EmployeeListView,
        },
    ],
});

export default router;
