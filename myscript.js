const elinput = document.getElementById("input");
const elcreate = document.getElementById("create");
const elimg = document.getElementById("img");

const url = "https://chart.apis.google.com/chart?chs=300x300&cht=qr&chl=";

elcreate.onclick = () => {
  elimg.src = url + encodeURIComponent(elinput.value);
}