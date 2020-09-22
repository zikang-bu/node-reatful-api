1.restful api
  uri资源定位
  链接资源状态
  使用http已有特性
    http动词 get post put delete
    http状态码 200 400 500
    http头部 Authorization认证报头 Cache-Control缓存报头 Content-Type消息体类型报头
    Hypermedia
  统一资源规范
2.工程实战
  GET /xhr/v1/template?page=1&size=10
  GET /xhr/v1/template/1
  POST /xhr/v1/template
  PUT /xhr/v1/template/1
  DELETE /xhr/v1/template/1

  选用MongoDB存储数据
  引入mongoose构建数据模型
  邮件模板Schema
   id String 唯一识别邮件模板的id
   template text可支持html
   data 邮件模板中填充的数据
3.最佳实践
  充分理解并使用http请求
  使用api测试工具而非浏览器测试api接口
  选择合适的文档生成工具，输出api文档
  rest只是规范并不强制，最适合团队的才是最好的
  找一个时间rest较好的框架胜过自己造轮子