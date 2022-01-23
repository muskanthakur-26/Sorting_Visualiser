async function selection(){
  const ele = document.querySelectorAll(".bar");
  for(let i = 0; i < ele.length; i++){
      let min_index = i;
      ele[i].style.background = '#d9534f';
      for(let j = i+1; j < ele.length; j++){
          ele[j].style.background = '#f0ad4e';
          await waitforme(150);
          if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
              if(min_index !== i){
                  ele[min_index].style.background = 'white';
              }
              min_index = j;
          } 
          else{
              ele[j].style.background = 'white';
          }   
      }
      await waitforme(150);
      swap(ele[min_index], ele[i]);
      ele[min_index].style.background = 'white';
      ele[i].style.background = '#00FA9A';
  }
}
const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
  disableSortingBtn();
  await selection();
  enableSortingBtn();
});
