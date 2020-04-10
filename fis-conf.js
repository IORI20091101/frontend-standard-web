// 配置按需编译：设置编译范围为 html 文件，不过 html 文件中使用到的资源也会参与编译。
fis.set('project.files', '*.html');

// npm install [-g] fis3-hook-module
// 引入模块化开发插件，设置规范为 commonJs 规范。
fis.hook('amd');

fis.match('*.{js,css,png,jpg,gif,jepg}', {
  useHash: true,
})

// 这里使用相对路径会导致压缩失败 
fis.match('/assets/scripts/*.js', {
  isMod: true,
})

fis.match('*.js', {
    // 将所有用到的 js all in one 打包
    // packTo: '/static/aio.js',
    
    // 通过 uglify 压缩 js
    optimizer: fis.plugin('uglify-js'),
})

fis.match('/vendor/**/*.js', {
  useHash: false,
})

fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
})

fis.match('*.css', {

    // 将用到的 css all in one 打包。
    // packTo: '/static/aio.css'
    
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css'),
})

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor'),
});



fis.match('::package', {
  // 启用 fis-spriter-csssprites 插件
    spriter: fis.plugin('csssprites'),

    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true // 资源映射表内嵌
    })
});



// fis3 release dev 
fis.media('debug').match('*.{js,css,png,jpeg,gif,jpg}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})

// 指定文件发布路径 不需要 fis3 release -h ./dist 这样写
fis.media('prod').match('*', {
  deploy: fis.plugin('local-deliver', {
    to: './dist'
  })
})



