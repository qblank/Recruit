/**
 * Created by evan_qb on 2018/1/17.
 */
/*工学*/
var technology = ["力学类","机械类","材料",
    "仪器仪表类","能源动力","电气信息类",
    "电子信息学","计算机科学与技术","土建类","水利类","测绘类",
    "化工类","地矿类"];
/*理工学*/
var ligong = ["数学","物理学","天文学类","地理科学类",
"大气科学类","地球物理学类","海洋科学类","地质学",
    "生物科学","生命科学","心理学"];
/*农学*/
var agriculture = ["农业","植物学类","动物生态学","动物医学类","草业科学类","森林资源类"]
/*医学*/
var csmu = ["药学","医学","公共卫生学类"];
/*法学*/
var law = ["法学","公安学类","社会学类"];
/*其他*/
var others = ["历史学","艺术学","教育学","体育学类"];
$(function(){
    //获取所有a标签
    $("#left_nav li,#detail").mouseover(function(){
        $("#detail .detail_all").empty();
        var curText = $(this).text();
        $("#detail").show();
        $("#detail .detail_title").html(curText);
        switch (curText){
            case "工学":
                for(var i = 0;i<technology.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + technology[i] +"</a>");
                }
            break;

            case "理学":
                for(var i = 0;i<ligong.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + ligong[i] +"</a>");
                }
                break;

            case "农学":
                for(var i = 0;i<agriculture.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + agriculture[i] +"</a>");
                }
                break;

            case "医学":
                for(var i = 0;i<csmu.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + csmu[i] +"</a>");
                }
                break;

            case "法学":
                for(var i = 0;i<law.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + law[i] +"</a>");
                }
                break;

            case "其他":
                for(var i = 0;i<others.length;i++){
                    $("#detail .detail_all").append("<a href='#'>" + others[i] +"</a>");
                }
                break;

        }
    });
    $("#detail").mouseover(function(){
        for(var i = 0;i<technology.length;i++){
            $("#detail .detail_all").append("<a href='#'>" + technology[i] +"</a>");
        }
        $("#detail").show();
    });

    $("#left_nav li").mouseout(function () {
        $("#detail").hide();
        //$("#detail .detail_all").children("a").remove();
        $("#detail .detail_all").empty();
    });

    $("#detail").mouseout(function(){
        $("#detail").hide();
    })
});