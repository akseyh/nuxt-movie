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
</style>