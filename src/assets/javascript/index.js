$(function(){

    $(".userCenter .down").find("h4").click(function(){
        $(this).siblings("div").fadeIn("300");
    })

    $(".userCenter .right .footer h4").click(function(){
        var index = $(this).index();
        $(this).addClass("active01").siblings().removeClass("active01");
        $(".userCenter .right .footer ul li").eq(index).fadeIn().siblings().hide();
    })

    $(".note01").click(function(){
        $(".userCenter .right .footer h4").eq(0).addClass("active01").siblings().removeClass("active01");
        $(".userCenter .right .footer ul li").eq(0).fadeIn().siblings().hide();
    })

    $(".note02").click(function(){
        $(".userCenter .right .footer h4").eq(1).addClass("active01").siblings().removeClass("active01");
        $(".userCenter .right .footer ul li").eq(1).fadeIn().siblings().hide();
    })


    $(".userCenter .right .ul01").children().eq(0).show().siblings().hide();
    $(".userCenter .userInfo").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".userCenter .right .ul01").children().eq(1).fadeIn().siblings().hide();
    })
    $(".userCenter .needJob").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".userCenter .right .ul01").children().eq(0).fadeIn().siblings().hide();
        $(".userCenter .right .footer h4").eq(0).addClass("active01").siblings().removeClass("active01");
        $(".userCenter .right .footer ul li").eq(0).fadeIn().siblings().hide();
    })
    $(".userCenter .releaseJob").click(function(){
        $(".userCenter .right .ul01").children().eq(0).fadeIn().siblings().hide();
        $(".userCenter .right .footer h4").eq(1).addClass("active01").siblings().removeClass("active01");
        $(".userCenter .right .footer ul li").eq(1).fadeIn().siblings().hide();
    })
    $(".userCenter .reviseUserInfo").click(function(){
        $(".userCenter .right .ul01").children().eq(2).fadeIn().siblings().hide();
    })
    $(".userCenter .myResume").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".userCenter .right .ul01").children().eq(3).fadeIn().siblings().hide();
    })
    $(".userCenter .companyInfo").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".userCenter .right .ul01").children().eq(4).fadeIn().siblings().hide();
    })
})