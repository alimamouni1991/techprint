/*
$('i.bookmark').addEventListener('onclick',()=>{
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("body").removeClass("thin");
    }
})

$('#default-styles').addEventListener('onclick',()=>{
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("body").removeClass("thin");
    }
})

$('#typography').addEventListener('onclick',()=>{
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("body").removeClass("thin");
    }
})
$('#loader-test').children(":first").addEventListener('onclick',()=>{
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("body").removeClass("thin");
    }
})



})*/

//

$(document).ready(function(){
    var fieldHTML = '<input autocomplete="off" class="form-control showen_"' +
        ' type="text" onkeyup="searchSection()" placeholder="Search" style="height: 40px;color: #222222;width: 100%;border: 1px solid #fff!important;background-color: #ffffff!important;margin-bottom: 10px;"' +
        ' id="mysearchSectionsInbox">'
$('.title').append(fieldHTML);

});
