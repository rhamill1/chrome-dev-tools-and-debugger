window.onload = function(){
  var main = document.getElementById('main');
  var roll = document.getElementById('roll');
  var add  = document.getElementById('add');
  var check  = document.getElementById('checkForWin');
  add.addEventListener("click", function(){
    addDie();
  });
  roll.addEventListener("click", function(){
    rollDie();
  });
  check.addEventListener("click", function(){
  checkForWin();
  });

  function addDie(){
    var die  = document.createElement('div');
    die.setAttribute('class', 'die');
    die.innerHTML = random();
    main.appendChild(die)
  };

  function rollDie() {
    var dice = document.getElementsByClassName('die');
    for (var i = 0; i < dice.length; i++) {
      dice[i].innerHTML = random();
    }
  };

  function random(){
    return Math.floor(Math.random() * (7));}


  function checkForWin() {
    var comp = [];
    var dice = document.getElementsByClassName('die');
    for (var i = 0; i < dice.length; i++) {
        comp.push(dice[i]);}
    for (var i = 0; i < comp.length; i++)
        if (comp[i] = )
  }


};
