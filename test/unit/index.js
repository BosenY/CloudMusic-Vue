import Vue from 'vue'

Vue.config.productionTip = false

// testContext 匹配的是specs目录，里面存放了所有的测试用例
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
//匹配除了mainjs以外的其他文件
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
