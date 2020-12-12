<template>
    <div class="flex flex-col items-center justify-center h-screen text-5xl">
        <b>404 - Page Not Found</b>
        <button @click="$router.push({name: 'index'})">Back To Home</button>
    </div>
</template>

<script>
export default {
    layout: 'full_page'
}
</script>