$(function () {
  //背景とアラートボックスを非表示にする
  $('#bg').hide();

  //click meボタンをクリック
  $('#click').click(function () {
    //背景とアラートボックスを表示する
    $('#bg').fadeIn(300);
  });
  //okボタンをクリック
  $('#ok').click(function () {
    ////背景とアラートボックスを非表示にする
    $('#bg').fadeOut(300);
  })
});
