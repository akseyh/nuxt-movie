<template>
    <div class="card">
        <a href="#">
            <img :src="imageLink">
        </a>
        <p class="cast">{{castName}}</p>
        <p class="character">{{characterName}}</p>
    </div>
</template>

<script>
export default {
    props: {
        imageLink: {
            type: String,
            default: '',
            required: true
        },
        castName: {
            type: String,
            default: '',
            required: true
        },
        characterName: {
            type: String,
            default: '',
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
.card
    margin-top: 10px
    margin-bottom: 10px
    margin-left: 10px
    margin-right: 4px
    border: 1px solid #CDD0D1
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    padding-bottom: 10px
    border-radius: 9px
    overflow: hidden
    min-width: 140px
    width: 140px
    background-color: #fff
    a
        min-width: 138px
        width: 138px
        height: 175px
        display: block
        img
            width: 100%
            height: 100%
            outline: none
    .cast
        font-weight: bold
        color: #000
        padding-top: 10p
        padding: 0 10px
        font-size: 1em
        margin: 0
        overflow: hidden
        text-overflow: ellipsis
    .character
        padding: 0 10px

</style>