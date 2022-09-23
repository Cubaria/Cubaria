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
function back() {
  let current = location.href.split("/").pop().split("?").shift().split(".").shift();
  window.location.href = parseInt(current) - 1
}
function next() {
  let current = location.href.split("/").pop().split("?").shift().split(".").shift();
  window.location.href = parseInt(current) + 1
}

function goto() {
  let page = localStorage.getItem('page');
  window.location.href = page
}

