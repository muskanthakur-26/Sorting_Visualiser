async function bubble() {
  const ele = document.querySelectorAll(".bar");
  for(let i = 0; i < ele.length-1; i++){
      for(let j = 0; j < ele.length-i-1; j++){
          ele[j].style.background = '#f0ad4e';
          ele[j+1].style.background = '#f0ad4e';
          if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
              await waitforme(260);
              swap(ele[j], ele[j+1]);
          }
          ele[j].style.background = 'white';
          ele[j+1].style.background = 'white';
      }
      ele[ele.length-1-i].style.background = 	'#00FA9A';
  }
  ele[0].style.background = '	#00FA9A';
}
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
  disableSortingBtn();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableNewArrayBtn();
});
