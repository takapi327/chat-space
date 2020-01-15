// window.addEventListener("load",function(){ 

  // let tabs = document.getElementById('tabs');
  // let tab = document.getElementById('tab');

  // function mouseover(){
  //   tabs.addEventListener('mouseenter', () => {
  //     tab.classList.add("show");
  //     console.log('hello');
  //   });

  //   tabs.addEventListener('mouseleave', () => {
  //     tab.classList.remove("show");
  //   });
  // }

//   tab.addEventListener('mouseenter', mouseover);
// });

$(function(){
  $("#tabs li").hover(() => {
    $(".pull-dawn").addClass("show");
  },function() {
    $("ul#tab").removeClass("show");
  });
  
  $(".pull_list1").hover(() => {
    $(".pull_menu2").addClass("show");
  },function(){
    $(".pull_menu2").removeClass("show");
  });

  $(".pull_sblist1").hover(() => {
    $(".pull_sbmenu").addClass("show");
  },function(){
    $(".pull_sbmenu").removeClass("show");
  });

  $(".pull_list2").hover(() => {
    $(".pull_menu3").addClass("show");
  },function(){
    $(".pull_menu3").removeClass("show");
  });

  $("#tab2s li").hover(() => {
    $(".pull-dawn2").addClass("show");
  },function() {
    $("ul#tab").removeClass("show");
  });
});

// $(function(){
//   // let tab = document.getElementById('tab');
//   //   //$("#tab").addClass("show");
//   // // $(".pull-dawn").hover( function(){
//   //   // e.preventDefault();
//   // tab.addEventListener('mouseenter', () => {
//   $("#tab3 li").hover(() => {
//     $(".pull-menu2").addClass("show");
//   },function() {
//     // $("ul#tab").removeClass("show");
//   });

//   // $("#tab2s li").hover(() => {
//   //   $(".pull-dawn2").addClass("show");
//   // },function() {
//   //   $("ul#tab").removeClass("show");
//   // });
// });