<template>
    <div class="tab-container">
        <nav class="u-tab">
            <li class="tabtitle" @click="active(0)">
                <div class="tabtxt" :class="[getcolor(0)]">
                    <span>推荐音乐</span>
                </div>
            </li>
            <li class="tabtitle" @click="active(1)">
                <div class="tabtxt" :class="[getcolor(1)]">
                    <span>热歌榜</span>
                </div>
            </li>
            <li class="tabtitle" @click="active(2)">
                <div class="tabtxt" :class="[getcolor(2)]">
                    <span>搜索</span>
                </div>
            </li>
        </nav>
        <div class="tab-show">
            <Recommend v-show="actived === 0"></Recommend>
            <Hot v-show="actived === 1"></Hot>
            <Search v-show="actived === 2"></Search>
        </div>

    </div>
</template>

<script>
import Hot from '../Hot/index.vue'
import Search  from '../Search/index.vue'
import Recommend  from '../Recommend/index.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            actived: 0
        }
    },
    computed: {
        ...mapGetters([
            'GET_THEME'
        ]),

    },
    components: {
        Hot,
        Search,
        Recommend
    },
    methods: {
        getcolor(index) {
            if(index === this.actived) return this.GET_THEME + '-color'
            return ''
        },
        active(index) {
            this.actived = index
            this.$emit('toggle', index)
        }
    },
    mounted() {
        this.$emit('toggle', 0)
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './style.styl';
</style>