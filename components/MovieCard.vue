<template>
    <div id="container" v-if="!mobileView">
        <div class="image">
            <div class="wrapper">
                <img loading="lazy" :src="`https://image.tmdb.org/t/p/w500${image}`" />
            </div>
            <div class="options">
                <MoreHorizantalIcon class="icon"/>
            </div>
        </div>
        <div class="content">
            <div class="point">
                <div class="user_score">
                    <p>{{parseInt(userScore)}}<span>%</span></p>
                </div>
            </div>
            <h2>{{movieName}}</h2>
            <p>{{dateFormat(releaseDate)}}</p>
        </div>
    </div> 
    <div v-else id="container-mobile">
        <div class="wrapper">
            <div class="image">
                <img loading="lazy" :src="`https://image.tmdb.org/t/p/w500${image}`" />
            </div>
            <div class="details">
                <div class="wrapper">
                    <div class="title">
                        <h2>{{movieName}}</h2>
                        <span class="release_date">
                            {{dateFormat(releaseDate)}}
                        </span>
                    </div>
                    <div class="overview">
                        <p>{{description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoreHorizantalIcon from '@/assets/MoreHorizontalIcon'
export default {
    name: 'MovieCard',
    components: {MoreHorizantalIcon},
    props: {
        movieName: {
            type: String,
            required: true,
            default: 'Movie Name'
        },
        userScore: {
            type: Number,
            default: -1
        },
        releaseDate: {
            type: String,
            default: new Date()
        },
        image: {
            type: String,
            required: true,
            default: ''
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet'
        }
    },
    computed: {
        mobileView() { return this.$store.getters.mobileView }
    },
    data() {
        return {
            monthName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
        }
    },
    methods: {
        dateFormat(date) {
            const [year, month, day] = date.split('-')
            return `${this.monthName[month - 1]} ${day}, ${year}`
        }
    }
}
</script>

<style lang="sass" scoped>
#container
    width: calc(((100vw - 80px - 260px - 128px) / 4))
    max-width: 208px
    margin-left: 30px
    margin-bottom: 30px
    position: relative
    top: 0
    left: 0
    display: flex
    flex-wrap: wrap
    align-content: flex-start
    border: 1px solid #e3e3e3
    border-radius: 8px
    overflow: hidden
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    .image
        width: calc(((100vw - 80px - 260px - 128px) / 4))
        height: calc((((100vw - 80px - 260px - 128px) / 4)) * 1.5)
        max-width: 208px
        max-height: calc(208px * 1.5)
        .options
            width: 26px
            height: 26px
            position: absolute
            display: flex
            align-items: center
            justify-content: center
            top: 8px
            right: 8px
            z-index: 4
            opacity: 0.6
            background: white
            border-radius: 100%
            cursor: pointer
            transition: all .2s
            .icon
                color: #000
                font-family: 'Source Sans Pro', Arial, sans-serif
                font-size: 1.6em 
                -webkit-font-smoothing: antialiased
        .options:hover
            background: var(--color-secondary)
    .content
        width: 100%
        padding: 26px 10px 12px 10px
        position: relative
        white-space: normal
        display: flex
        align-content: flex-start
        flex-wrap: wrap
        .point
            width: 38px
            height: 38px
            box-sizing: border-box
            position: absolute
            top: -19px
            left: 10px
            background-color: #081c22
            border-radius: 100%
            .user_score
                width: 100%
                height: 100%
                display: flex
                align-items: center
                justify-content: center
                p
                    color: white
                    font-size: .8em
                    font-weight: 600
                    display: flex
                    align-items: flex-start
                    span
                        margin-top: 4px
                        font-size: .5em
                
        h2
            color: #000
            font-size: 1em
            margin: 0
            width: 100%
            overflow-wrap: break-word
            font-weight: 600
        p
            font-size: 1em
            margin: 0
            padding: 0
            color: rgba(0,0,0,0.6)

#container-mobile
    width: calc(100vw - 42px)
    max-width: calc(100vw - 42px)
    height: auto
    margin-top: 20px
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    border: 1px solid #DEE1E3
    border-radius: 8px
    overflow: hidden
    .image
        width: 94px
        height: 141px
    .details
        max-width: calc(1300px - 82px - 94px)
        padding: 14px
        width: calc(100vw - 42px - 94px)
        display: flex
        align-content: center
        align-items: center
        flex-wrap: wrap
        .wrapper
            display: flex
            flex-direction: column
            .title
                display: flex
                flex-direction: column
                align-items: baseline
                overflow: hidden
                h2
                    display: block
                    font-size: 1em
                    margin: 0
                    white-space: normal
                    overflow: visible
                    text-overflow: clip
                .release_date
                    white-space: nowrap
                    color: #999
            .overview
                max-height: 3.2em
                height: auto
                font-family: 'Source Sans Pro', Arial, sans-serif
                text-overflow: ellipsis
                overflow:hidden
                margin-top: 20px
                p
                    color: #000
                    white-space:nowrap
                    font-size: 0.9em
                    line-height: 1.2em
                    display: -webkit-box
                    -webkit-line-clamp: 2
                    -webkit-box-orient: vertical
                    text-overflow: ellipsis
                    overflow: hidden
                    margin: 0
    .wrapper
        display: flex
</style>