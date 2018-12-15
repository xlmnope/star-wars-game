/**## Option Two: Star Wars RPG Game (Challenge)

![Star Wars](Images/2-StarWars.jpg)

1. [Watch the demo](https://youtu.be/klN2-ITjRt8).

2. Here's how the app works:

   * When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

##### Option 2 Game design notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.

 */
var character
var enemy
var characterChosen = false;
var enemyChosen = false;

//character is set on click
$( ".leia" ).click(function() {
  character = leiaOrgana 
  characterChosen = true;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showEvilCharacters();

});

//createelement from array of characters. element has src link picture. 
$( ".rey" ).click(function() {
  character = rey 
  characterChosen = true;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showEvilCharacters();
  

});

$( ".jyn" ).click(function() {
  character = jynErso;
  characterChosen = true;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showEvilCharacters();

});

function showEvilCharacters() {
  $( ".evil-character" ).show();
};

// set enemy on click
$( ".evil1" ).click(function() {
  enemyChosen = true;
  console.log("enemychosen:" + enemyChosen);
  enemy = evil1;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showAttackButton();

});
$( ".evil2" ).click(function() {
  enemyChosen = true;
  enemy = evil2;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showAttackButton();

});
$( ".evil3" ).click(function() {
  enemyChosen = true;
  enemy = evil3;
  $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
  showAttackButton();

});

//only show attack button if both character and enemy have been chosen
function showAttackButton() {
    $( ".attackbutton" ).show();
    
  }


//attack function (happens on click from html)
 function attack() {
    //attack power increases every attack
   jynErso.attackPower ++;
   console.log("jyn attack power: " + jynErso.attackPower);
   //enemy HP decreases every attack
   enemy1.healthPoints--;
   console.log("enemy1 health points: "+ evil1.healthPoints);
   //enemy counterattacks
   enemyCounterAttack();
 }

//enemy counterattacks everytime they are attacked
function enemyCounterAttack() {
  //decrease character HP by amount of counterattack
};


var jynErso = {
  name: "Jyn Erso",
  healthPoints: 20,
  attackPower: 1,
  counterAttackPower: 10,
};

var leiaOrgana = {
  name: "Leia Organa",
  healthPoints: 20,
  attackPower: 5,
  counterAttackPower: 8,
};

var rey = {
  name: "Rey",
  healthPoints: 20,
  attackPower: 8,
  counterAttackPower: 9,
};

var evil1 = {
  healthPoints: 20,
  counterAttackPower: 10
}


var evil2 = {
  healthPoints: 20,
  counterAttackPower: 4,
}

var evil3 = {
  healthPoints: 20,
  counterAttackPower: 5,

}

//if hP of character is below 1 show game over

//if hP of evil is below 1 remove character from the screen
if (evil1.healthPoints < 1) {
  //remove character from screen
}
if (evil2.healthPoints < 1) {
  //remove character from screen
}

if (evil3.healthPoints < 1) {
  //remove character from screen
}

