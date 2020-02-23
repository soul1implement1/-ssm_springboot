/**
 * 富文本
 */
var E = window.wangEditor
var editor = new E('#editor')
editor.customConfig.uploadImgServer = '/uploadCommentpicture'
editor.customConfig.menus = [
    'bold', // 粗体
    'foreColor', // 文字颜色
    'link', // 插入链接
    'emoticon', // 表情
    'code', // 插入代码
    'undo', // 撤销
    'redo' // 重复
];
// 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
editor.customConfig.emotions = [{
    title: 'gif动态表情包',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
        alt: '',
        src: 'layui/images/0.gif'
    }, {
        alt: '',
        src: 'layui/images/1.gif'
    }, {
        alt: '',
        src: 'layui/images/2.gif'
    }, {
        alt: '',
        src: 'layui/images/3.gif'
    }, {
        alt: '',
        src: 'layui/images/4.gif'
    }, {
        alt: '',
        src: 'layui/images/5.gif'
    }, {
        alt: '',
        src: 'layui/images/6.gif'
    }, {
        alt: '',
        src: 'layui/images/7.gif'
    }, {
        alt: '',
        src: 'layui/images/8.gif'
    }, {
        alt: '',
        src: 'layui/images/9.gif'
    }, {
        alt: '',
        src: 'layui/images/10.gif'
    }, {
        alt: '',
        src: 'layui/images/11.gif'
    }, {
        alt: '',
        src: 'layui/images/12.gif'
    }, {
        alt: '',
        src: 'layui/images/13.gif'
    }, {
        alt: '',
        src: 'layui/images/14.gif'
    }, {
        alt: '',
        src: 'layui/images/15.gif'
    }, {
        alt: '',
        src: 'layui/images/16.gif'
    }, {
        alt: '',
        src: 'layui/images/17.gif'
    }, {
        alt: '',
        src: 'layui/images/18.gif'
    }, {
        alt: '',
        src: 'layui/images/19.gif'
    }, {
        alt: '',
        src: 'layui/images/20.gif'
    }, {
        alt: '',
        src: 'layui/images/21.gif'
    }, {
        alt: '',
        src: 'layui/images/22.gif'
    }, {
        alt: '',
        src: 'layui/images/23.gif'
    }, {
        alt: '',
        src: 'layui/images/24.gif'
    }, {
        alt: '',
        src: 'layui/images/25.gif'
    }, {
        alt: '',
        src: 'layui/images/26.gif'
    }, {
        alt: '',
        src: 'layui/images/27.gif'
    }, {
        alt: '',
        src: 'layui/images/28.gif'
    }, {
        alt: '',
        src: 'layui/images/29.gif'
    }, {
        alt: '',
        src: 'layui/images/30.gif'
    }, {
        alt: '',
        src: 'layui/images/31.gif'
    }, {
        alt: '',
        src: 'layui/images/32.gif'
    }, {
        alt: '',
        src: 'layui/images/33.gif'
    }, {
        alt: '',
        src: 'layui/images/34.gif'
    }, {
        alt: '',
        src: 'layui/images/35.gif'
    }, {
        alt: '',
        src: 'layui/images/36.gif'
    }, {
        alt: '',
        src: 'layui/images/37.gif'
    }, {
        alt: '',
        src: 'layui/images/38.gif'
    }, {
        alt: '',
        src: 'layui/images/39.gif'
    }, {
        alt: '',
        src: 'layui/images/40.gif'
    }, {
        alt: '',
        src: 'layui/images/41.gif'
    }, {
        alt: '',
        src: 'layui/images/42.gif'
    }, {
        alt: '',
        src: 'layui/images/43.gif'
    }, {
        alt: '',
        src: 'layui/images/44.gif'
    }, {
        alt: '',
        src: 'layui/images/45.gif'
    }, {
        alt: '',
        src: 'layui/images/46.gif'
    }, {
        alt: '',
        src: 'layui/images/47.gif'
    }, {
        alt: '',
        src: 'layui/images/48.gif'
    }, {
        alt: '',
        src: 'layui/images/49.gif'
    }, {
        alt: '',
        src: 'layui/images/50.gif'
    }, {
        alt: '',
        src: 'layui/images/51.gif'
    }, {
        alt: '',
        src: 'layui/images/52.gif'
    }, {
        alt: '',
        src: 'layui/images/53.gif'
    }, {
        alt: '',
        src: 'layui/images/54.gif'
    }, {
        alt: '',
        src: 'layui/images/55.gif'
    }, {
        alt: '',
        src: 'layui/images/56.gif'
    }, {
        alt: '',
        src: 'layui/images/57.gif'
    }, {
        alt: '',
        src: 'layui/images/58.gif'
    }]
}, {
    title: '小黄脸静态表情包',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
        alt: '',
        src: 'blimg/gt1.png'
    }, {
        alt: '',
        src: 'blimg/fg.png'
    }, {
        alt: '',
        src: 'blimg/dddd.png'
    }, {
        alt: '',
        src: 'blimg/huaji.png'
    }, {
        alt: '',
        src: 'blimg/shigua.png'
    }, {
        alt: '',
        src: 'blimg/wxzs.png'
    }, {
        alt: '',
        src: 'blimg/xxx.png'
    }]
}]
editor.create()