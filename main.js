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
    yn= `${myJson.answer}`
    yncapitalized= yn.toUpperCase();
    answer.innerHTML = ` 👉  ${yncapitalized} !!! 👈 `;
    img.src = `${myJson.image}`;
    image.appendChild(img);   
  return myJson
  })
  .catch( error => { console.log(error); })
 });

$("button").click(function() {
    let imputList = $('#input').val();
    $("ul").prepend('<li> Q: '+imputList+'</li>');
    let imputList = $('#input').val('');
    imputList.value = '';
    $("#answer_txt").show();
    $("#image").show();
     return false;

 });
