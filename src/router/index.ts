import { createRouter, createWebHistory } from 'vue-router';
import EmployeeListView from '@/views/EmployeeListView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/employees',
            name: 'employee.list',
            meta: { title: 'کارمندان' },
            component: EmployeeListView,
        },
    ],
});

// set title for each page
router.afterEach(to => (document.title = String(to.meta.title || 'Employee-CRUD')));

export default router;
