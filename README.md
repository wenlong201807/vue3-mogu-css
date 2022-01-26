# vue3-mogu-css

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 本地测试运行打包后的dist代码项目
```
yarn run dist
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 基本配置
- Vue CLI4 node>=8.9
- vue3全家桶 vue3 vuex vue-router axios
- 本地mockjs: http://rap2.taobao.org/repository/joined
- [mockjs.com示例](http://mockjs.com/examples.html)
- [模拟线上数据：点击地址查看完整接口数据](http://rap2api.taobao.org/app/mock/297723/api/user)
- [本地使用mockjs](https://github.com/nuysoft/Mock/wiki/Getting-Started)
- [Swagger Petstore](https://petstore.swagger.io/)
- [Sassmagic - v1.0.0样式库](http://w3cplus.github.io/SassMagic/)
- [效果举例： @include box-center($justify: center, $align: center);](http://w3cplus.github.io/SassMagic/#undefined-mixin-box-center)
- [制作SvgIcon 的平台 IconPark](https://iconpark.oceanengine.com/official)
- [github官网--指南 SvgIcon](https://github.com/bytedance/IconPark/tree/master/packages/vue-next)

### 小问题&解决方案vs前因后果
- [解决git push代码到github上一直提示输入用户名及密码的问题](https://blog.csdn.net/yychuyu/article/details/80186783)
- yarn add vant@3.0.0-beta.4 版本太低无法使用需要指定版本安装

### 项目重大难题
- 在网速慢的时候，页面空白，怎么解决？
- 每个页面，各个模块的加载先后顺序混乱，如何定义各模块加载的先后顺序？
- 顶部模块【下载app这一模块】在主站中不必展示，当在第三方站点打开时才展示的，这一块如何制定加载策略？怎么解决cls问题？