 function dock(minHeight,maxHeight) {
    var new_scroll_position = 0;
    var last_scroll_position;
    var dock = document.getElementById("dock");

    window.addEventListener('scroll', function(e) {
        last_scroll_position = window.scrollY;
        console.log(window.scrollY)

        if ( maxHeight > last_scroll_position && last_scroll_position > minHeight ) {
            dock.classList.remove("web-dock-hidden");
            dock.classList.add("web-dock-visible");
        } else  {
            dock.classList.remove("web-dock-visible");
            dock.classList.add("web-dock-hidden");
        }

        new_scroll_position = last_scroll_position;
    });


    $(function(){
        $(".link-li").click(function(){
            $('.li-onClike').removeClass('li-onClike');
            $('.link-onClike').removeClass('link-onClike');
            $(this).addClass("li-onClike");
            $(this).children('a').addClass("link-onClike");
        });
    });


}

 //给positon：fiexd布局对象根据scrollLeft设定left
function windowOnscroll(ids) {
        var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);

        ids.push("dock");
        ids.push("header");
        $.each(ids,function () {
            document.getElementById(this).style.left=sl+'px';
        })
}

 function sumbitMonth(fromName) {
     var d = {};
     var t = $('#'+fromName).serializeArray();
     var mobileReg = /^1(3|4|5|7|8)\d{9}$/;
     $.each(t, function() {
         if(this.name === 'user_leaveWord' && this.value !== undefined){
             d[this.name] = "留言："+this.value;
         }else{
             d[this.name] = this.value;
         }
     });
     if (!mobileReg.test(d.user_telephone)) {
         alertify.error("手机号码不符合格式");
         $('[name="user_telephone"]').focus();
         return false;
     }

     $.post('http://118.31.16.134:8888/leaveWord', d, function(data) {
         alertify.alert(data);
     });
 };

 function sumbitClick(objList) {

 }




