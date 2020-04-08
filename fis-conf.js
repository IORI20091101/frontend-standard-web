// // 启用 es6-babel 插件，解析 .es6 后缀为 .js
// fis.match('*.es6', {
//     rExt: '.js',
//     parser: fis.plugin('es6-babel')
//   });
  
  
//   // 开启模块化开发
//   fis.hook('module');
//   fis.match('*.es6', {
//     isMod: true
//   });
  
//   fis.match('::package', {
//     postpackager: fis.plugin('loader')
//   });
  



// npm install [-g] fis3-hook-commonjs
fis.hook('commonjs');

fis.match('/comp/**/*.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/static/$0'
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('*.js', {
        packTo: '/static/aio.js'
    });
