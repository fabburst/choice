const img = document.createElement('img'),
      url = 'https://yesno.wtf/api/';
$(document).ready(function(){
  $("#answer_txt").hide();
  $("#image").hide();

});

$("button").click(function() {
  fetch(url)
  .then((response) => { return response.json(); })
  .then(function(myJson) {
    answer.innerHTML = `${myJson.answer}`;
    img.src = `${myJson.image}`;
    image.appendChild(img);   
  return myJson
  })
  .catch( error => { console.log(error); })
 });

$("button").click(function() {
    var imputList = $('#input').val();
    $("ul").prepend('<li>'+imputList+'</li>');
    imputList.value = '';
    $("#answer_txt").show();
    $("#image").show();
     return false;

 });
