const pages = {
    1:"chapter2/1.png",
    2:"chapter2/2.png",
    3:"chapter2/3.png",
    4:"chapter2/4.png",
    5:"chapter2/5.png",
    6:"chapter2/6.png",
    7:"chapter2/7.png",
    8:"chapter2/8.png",
    9:"chapter2/9.png"
  }
let lol = 0
function advance() {
  if(lol < pages.length)
  {
    lol = lol + 1;
  const image = document.createElement('img');
  const holder = document.getElementById('div1')
  image.src = pages[lol]
  image.setAttribute("class","mx-auto d-block p-2 img-fluid cont")
  holder.appendChild(image);
  }
}
