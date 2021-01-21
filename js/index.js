$(function() {
    // 注册
    $('.link_reg').on('click', function() {
        $('.reg-box').show().siblings().hide();
    });
    // 登录
    $('.link-login').on('click', function() {
        $('.login-box').show().siblings().hide();
    });
    // 找回密码
    $('.link_repwd').on('click', function() {
        $('.repwd-box').show().siblings().hide();
    });
    var form = layui.form;
    form.verify({
        uid: [
            /^[a-zA-z\d]{5,11}$/,
            '账号必须为5-11位字母数字组合'
        ],
        upwd: [
            /^[\d]{6,18}$/, '密码必须6-18位，不能使用空格'
        ],
        uname: [
            /^\d+\d+\d$/, '用户名不能全为数字'
        ]
    });
    // //这里的初始化是滑动&拼图的标志slideVerify
    // $('#mpanel1').slideVerify({
    //     //滑动验证码type=1，拼图验证码type=2
    //     type: 2,

    //     //拼图验证码或选择验证码图片名称
    //     imgName: ['../image/logo.png', '../image/icon_03.png'],

    //     //拼图验证码的图片尺寸
    //     imgSize: {
    //         width: '100px',
    //         height: '50px',
    //     },

    //     //......更多参数设置请查阅文档

    //     //验证成功以后的回调
    //     success: function() {
    //         alert('验证匹配！');
    //     }

    // });
});