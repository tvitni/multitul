let valueContentPlus = document.querySelector('#glavnay');
let valueContent = document.querySelector('#content');
let valueContentTu = document.querySelector('#contentTy');


let kopiaClick = function(c) {
  // Выборка содержимого #content
  var range = document.createRange();
  range.selectNode(c);
  window.getSelection().addRange(range);

  try {
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy command was successful ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();
};
