<template>
    <div id="container">
        <div class="info">
            <span class="title">Status</span>
            <span>{{status}}</span>
        </div>
        <div class="info">
            <span class="title">Original Language</span>
            <span>{{original_language}}</span>
        </div>
        <div class="info">
            <span class="title">Budget</span>
            <span>${{parseFloat(budget).toLocaleString('en-US')}}</span>
        </div>
        <div class="info">
            <span class="title">Revenue</span>
            <span>${{parseFloat(revenue).toLocaleString('en-US')}}</span>
        </div>
        <div class="info">
            <span class="title">Keywords</span>
            <span>jiu-jitsu</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-info',
    props: {
        status: {
            type: String
        },
        original_language: {
            type: String
        },
        budget: {
            type: Number,
            default: 0
        },
        revenue: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="sass" scoped>
#container
    display: flex
    flex-direction: column
    margin-top: 80px
    .info
        display: flex
        flex-direction: column
        .title
            font-weight: 600
</style>