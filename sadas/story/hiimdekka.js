const pages = {
    1:"fight/1.png",
    2:"fight/2.png",
    3:"fight/3.png",
    4:"chapter2/4.png",
    5:"chapter2/5.png",
    6:"chapter2/6.png",
    7:"chapter2/7.png",
    8:"chapter2/8.png",
    9:"chapter2/9.png"
  }

let lol = 0
function advance() {
  if(!(lol>pages.length))
  {
    lol = lol + 1;
    const holder = document.getElementById('div1')
    let image = document.createElement('img');
    image.src = pages[lol]
    image.setAttribute("class","mx-auto d-block p-2 img-fluid cont")
    image.setAttribute("id",lol)
    holder.appendChild(image);
  }
}
