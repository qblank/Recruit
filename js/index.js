/**
 * Created by evan_qb on 2018/1/17.
 */
$(function(){
    //获取所有a标签
    $("#left_nav li\,#detail").mouseover(function(){
        $("#detail").show();
        $("#detail").html($(this).text());
    });
    $("#left_nav li\,#detail").mouseout(function () {
        $("#detail").hide();
    })
});