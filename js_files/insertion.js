async function insertion(){
  const ele = document.querySelectorAll(".bar");
  ele[0].style.background = '#d9534f';
  for(let i = 1; i < ele.length; i++){
      let j = i - 1;
      let key = ele[i].style.height;
      ele[i].style.background = '#f0ad4e';
      await waitforme(150);
      while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
          ele[j].style.background = '#f0ad4e';
          ele[j + 1].style.height = ele[j].style.height;
          j--;
          await waitforme(150);
          for(let k = i; k >= 0; k--){
              ele[k].style.background = '#d9534f';
          }
      }
      ele[j + 1].style.height = key;
      ele[i].style.background ='#d9534f';
  }
  for(let i = 0; i < ele.length; i++){
    ele[i].style.background = '	#00FA9A';
  }
}
const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
  disableSortingBtn();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();
  enableNewArrayBtn();
});


