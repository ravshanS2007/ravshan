var containers100 = document.querySelector('.containers100');
var containers101 = document.querySelector('.containers101');
var button11 = document.getElementById('button10');
var button10 = document.getElementById('button11');

button11.onclick = function() {
  containers100.style.display = 'flex';
  containers101.style.display = 'none';
}
button10.onclick = function() {
  containers100.style.display = 'none';
  containers101.style.display = 'flex';
}
$('#btn').click(function () {
  $('#pannel1').toggle();
});