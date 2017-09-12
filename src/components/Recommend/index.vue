<template>
    <div class="recommend">
        <div class="recommend-title" :class="[GET_THEME+'-after']">推荐歌单</div>
        <Songs></Songs>
        <div class="recommend-title" :class="[GET_THEME+'-after']">最新音乐</div>
        <div class="hotcont">
            <div class="m-sgitem" v-for="(item, index) in tracks" :key="index" @click="Music(item.id)">
                <div class="sgfl sgfl-cred" :class="[GET_THEME+'-color']">{{index+1
                    <10? '0': ''}}{{index+1}}</div>
                        <div class="sgfr f-bd f-bd-btm">
                            <div class="sgchfl">
                                <div class="f-thide sgtl">
                                    {{item.name}}
                                    <span class="sgalia">
                                        {{item.alias.length>0?`(${item.alias[0]})`:''}}
                                    </span>
                                </div>
                                <div class="f-thide sginfo">
                                    <i class="u-hmsprt sghot"></i>
                                    {{artists(item)}} - {{item.name}}

                                </div>
                            </div>
                            <div class="sgchfr">
                                <span class="u-hmsprt sgchply"></span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</template>

<script>
import Songs from '../Songs/index.vue'
import { mapGetters } from 'vuex'
import { getNewList } from '@/api'
export default {
    name: 'hot',
    data() {
        return {
            result: {},
            tracks: []
        }
    },
    components: {
        Songs
    },
    computed: {
        ...mapGetters([
            'GET_THEME'
        ]),
    },
    methods: {
        artists(item) {
            let arr = []
            item.artists.map(childrenitem => {
                arr.push(childrenitem.name)
            })
            return arr.join('/')
        },
        //跳转听歌的链接
        Music(id) {
            window.location.href = `http://music.163.com/m/song?id=${id}`
        }
    },
    mounted() {
        getNewList().then(res => {
            this.result = res.result
            this.tracks = res.result.tracks
            console.log(this.result)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './style.styl';
</style>