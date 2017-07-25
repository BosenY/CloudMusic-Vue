<template>
    <div class="hot">
        <div class="hotop">
            <div class="hotopct">
                <div class="u-hmsprt hoticon"></div>
                <div class="hottime">
                    <!-- react-text: 251 -->更新日期：
                    <!-- /react-text -->
                    <!-- react-text: 252 -->07月20日
                    <!-- /react-text -->
                </div>
            </div>
        </div>
        <div class="hotcont">
            <div class="m-sgitem" v-for="(item, index) in 20" :key="index">
                <div class="sgfl sgfl-cred" :class="[GET_THEME+'-color']">01</div>
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">
                            越过山丘
                            <span class="sgalia">
                                (致李宗盛)
                            </span>
                        </div>
                        <div class="f-thide sginfo">
                            <i class="u-hmsprt sghot"></i>
                            杨宗纬 - 越过山丘

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
import { mapGetters } from 'vuex'
export default {
    name: 'hot',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'GET_THEME'
        ]),

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './style.styl';
</style>