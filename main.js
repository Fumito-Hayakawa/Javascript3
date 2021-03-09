$(function() {

function searchWord (){
  var searchText = $('#search-text').val();
  // 文字列が見つからなければ-1が返るメソッド
  $('.target-area li').each(function() {

    var targetText = $(this).find("p").text();

    if (targetText.indexOf(searchText) != -1) {
    $(this).removeClass("hidden");
    } else {
    $(this).addClass("hidden");
    }
  })
}

$('#search-area').on('input', searchWord);

})

function hide(){
  $('.a').addClass("hidden");

}