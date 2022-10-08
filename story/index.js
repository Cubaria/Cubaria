let page = localStorage.getItem('page');
console.log(page);
if (page == null)
{
  page = localStorage.setItem('page','1')
}

function save() {
  let page = localStorage.getItem('page');
  let current = location.href.split("/").pop().split("?").shift().split(".").shift();
  page = localStorage.setItem('page',current);
  console.log("Saved!");
}
function back(x) {
  if (x === undefined || x === null || x === NaN)
  {
    let current = location.href.split("/").pop().split("?").shift().split(".").shift();
    window.location.href = parseInt(current) - 1 + ".html" 
  }
  else
  {
    window.location.href = x
  }
}
function next(x) {
  if (x === undefined || x === null || x === NaN)
  {
    let current = location.href.split("/").pop().split("?").shift().split(".").shift();
    window.location.href = parseInt(current) + 1 + ".html" 
  }
  else
  {
    window.location.href = x
  }
}

function goto() {
  let page = localStorage.getItem('page');
  window.location.href = page
}

