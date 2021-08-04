$(function () {
  //サムネをクリック
  $('a').click(function () {
    //拡大画像のsrc属性に、選択したa要素のhref属性をいれる
    $('figure img').attr('src', $(this).attr('href'));

    //a要素の機能を無効にする
    return false;
  });
});
