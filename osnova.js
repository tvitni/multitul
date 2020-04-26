let iputTut = document.querySelector('#valueGo');



repleceGo.onclick = function(){
  event.preventDefault();
  let done = iputTut.value.replace( /[^0-9]/g, "").replace(/(\d{11})/g, '$1<br>').replace(/8([\d]{10})/g,"7$1");
  document.getElementById('contentTy').innerHTML = done;
  kopiaClick(valueContentTu);
  kopiaClick(valueContentTu);
};
buttonTyPlus.onclick = function(){
  event.preventDefault();
  document.getElementById('contentTy').innerHTML = '';
  let doneDva = iputTut.value.replace( /[^0-9]/g, "" ).replace(/(\d{11})/g, '$1\,').replace(/8([\d]{10})/g,"7$1");
  document.getElementById('content').innerHTML = doneDva;
  kopiaClick(valueContentPlus);
  kopiaClick(valueContentPlus);
};
buttonTy.onclick = function(){
  event.preventDefault();
  document.getElementById('contentTy').innerHTML = '';
  let doneDva = iputTut.value.replace( /[^0-9]/g, "" ).replace(/(\d{11})/g, '$1\,').replace(/8([\d]{10})/g,"7$1");
  document.getElementById('content').innerHTML = doneDva;
  kopiaClick(valueContent);
  kopiaClick(valueContent);
};
buttonClear.onclick = () => {
event.preventDefault();
document.getElementById('contentTy').innerHTML = '';
document.getElementById('content').innerHTML = '';
document.getElementById('valueGo').value ='';
};
