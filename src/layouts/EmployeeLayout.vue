<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="w-full max-w-screen-md mx-auto pt-20 flex flex-col">
        <h1 class="text-2xl px-5">
            {{ route.meta.title }}
        </h1>
        <slot />
    </div>
</template>
