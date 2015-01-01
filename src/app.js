var PokeDealer = require("PokeDealer");
var main = new UI.Card({
	title: 'PebblePoke!',
	icon: 'images/menu_icon.png',
	subtitle: 'Catch\'em All!',
	body: 'Press any button to start'
});

var pd = new PokeDealer();
var initGame = function(e){
	this.title = "..dealing cards ..";	
	return pd.deal_cards();
}

main.on('click', 'up', initGame );
main.on('click', 'down', initGame );
main.on('click', 'select', initGame );
main.show();

/*
main.on('click', 'select', function(e) {
  var wind = new UI.Window();
    var image = new UI.Image({
    position: new Vector2(15, 15),
    size: new Vector2(60,60),
    image: 'images/bay2.png'
  });
    wind.add(image);
  wind.show();
  });

  main.on('click', 'down', function(e) {
    var card = new UI.Card();
  card.title('A Card');
    card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
    card.show();
});
*/

