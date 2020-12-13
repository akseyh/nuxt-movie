<template>
    <div class="filter_panel card">
        <div 
            class="name cursor-pointer" 
            @click="isClosed = !isClosed">
            <h2>{{title}}</h2>
            <ChevronRightIcon v-if="isClosed"/>
            <ChevronDownIcon v-else/>
        </div>
        <transition name="filter">
            <div v-if="!isClosed" class="filter">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
import ChevronRightIcon from '@/assets/ChevronRightIcon'
import ChevronDownIcon from '@/assets/ChevronDownIcon'
export default {
    name: 'MovieSort',
    transition: 'filter',
    components: {
        ChevronRightIcon,
        ChevronDownIcon
    },
    props: {
        title: {
            type: String,
            required: true,
            default: 'Title'
        },
        closed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isClosed: this.closed
        }
    }
}
</script>

<style lang="sass" scoped>
.filter_panel
    min-width: 260px
    width: 100%
    border: 1px solid #e3e3e3
    border-radius: 8px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    overflow: hidden

.card
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    background-color: #fff

.filter
    width: 100%
    border-top: 1px solid #eee
    padding: 14px 16px 16px 16px

.name
    width: 100%
    height: 50px
    display: flex
    justify-content: space-between
    flex-wrap: nowrap
    align-items: center
    padding: 14px 16px
    h2
        font-size: 1.1em
        font-weight: 600

.filter-enter-active, .filter-leave-active 
    transition: opacity .2s

.filter-enter, .filter-leave-active
    opacity: 0
</style>