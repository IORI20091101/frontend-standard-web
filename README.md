### 使用指南

```javascript

// 发布到本地fis服务器并且监听文件变化
fis3 release debug -wL

// 打开fis3默认服务器路径
fis3 server open

// 启动默认服务 -h 指定端口
fis3 server start|stop|restart


// 默认输出带md5
fis3 release -d ./output
//或者 debug模式不压缩和各种优化
fis3 release debug -d ./output

// 查看文件命中属性的情况
fis3 inspect





```