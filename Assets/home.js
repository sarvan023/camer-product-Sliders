const imgLink = document.querySelectorAll(".img a");
let imgId = 1;
const imgCls = document.querySelectorAll(".img");

imgLink.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;
    moveImage();

    imgCls.forEach((img) => {
      img.classList.remove("active");
    });
    img.parentElement.classList.add("active");
  });
});

function moveImage() {
  const fImg = document.querySelector("#fimg").clientWidth;
  let wiDth = (imgId - 1) * fImg;
  document.querySelector(
    ".mainimage"
  ).style.transform = `translateX(${-wiDth}px)`;
}

const minusBtn = document.querySelector('#minus');
const addBtn = document.querySelector('#add');
const inputEl=document.querySelector('#input');

minusBtn.addEventListener('click' , ()=>
{
  let Val =parseInt(inputEl.value);
  if(Val>1){
    Val--
    inputEl.value = Val
  }
})

addBtn.addEventListener('click' , ()=>{
  let valEl =parseInt(inputEl.value)
  if(valEl>0 && valEl<5){
    valEl++
    inputEl.value = valEl
  }
})