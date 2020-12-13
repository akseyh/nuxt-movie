<template>
    <div id="container">
        <FilterPanelCard title="Sort" :closed="false">
            <div>
                <h3>Sort Results By</h3>
            </div>
        </FilterPanelCard>
        <FilterPanelCard title="Filters" style="margin-top: 12px;">

        </FilterPanelCard>
        <FilterPanelCard title="Where To Watch" style="margin-top: 12px;">

        </FilterPanelCard>
        
        <div class="search_field">
            <p>Search</p>
        </div>
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
    data() {
        return {
            isFilterSortClosed: true
        }
    }
}
</script>

<style lang="sass" scoped>
#container
    width: 260px
    display: flex
    justify-content: flex-start
    align-items: flex-start
    h3
        display: inline-flex
        align-items: center
        width: 100%
        font-size: 1em
        font-weight: 300
        margin-bottom: 10px
    .search_field
        width: 100%
        background-color: rgba(228,228,228, 0.7)
        backdrop-filter: blur(10px)
        cursor: default
        margin-top: 20px
        display: flex
        justify-content: center
        align-items: center
        align-content: center
        border-radius: 20px
        height: 44px
        p
            font-weight: 600
            color: rgba(0,0,0,0.5)

        
</style>