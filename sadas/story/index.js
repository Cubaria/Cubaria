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

function search(){
  console.log("shit");
  let input = document.getElementById('sbar').value
  return window.location.href = "/story/" + parseInt(input,10) + ".html"
}