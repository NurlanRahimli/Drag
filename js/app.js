let dragItems = document.querySelectorAll(".box");
let dropArea = document.querySelector("#DropArea");

dropArea.addEventListener("dragover", function(e){
  e.preventDefault();
})


dropArea.addEventListener("dragleave",function(e){
  e.preventDefault();
})


for (let i = 0; i < dragItems.length; i++) {
  dragItems[i].addEventListener("dragstart", function(e){
    e.dataTransfer.setData("p228", this.id)
    console.log(e.dataTransfer);
  })
}



dropArea.addEventListener("drop", function(e){
  let index = e.dataTransfer.getData("p228");
  let drgitem = document.getElementById(index);
  dropArea.appendChild(drgitem)
  document.getElementById("count1").innerHTML-=1
})



boxes = document.getElementsByClassName("box");
document.getElementById("count").innerHTML= boxes.length;