var PKDX = require("./mini_pokedex.js").pkdx;
var l = console.log;
var rand = function(max){
	return Math.floor(Math.random()*max);
};
var rand_list = function(n,max){
	var aa=[]; 
	for(var i = 0 ; i < n; i++) aa.push(rand(max));
	return aa;
};

//l(PKDX);
/*
	return an array of 
*/
module.exports= function(){
	this.deal_cards = function(){
		var hand = rand_list(7,PKDX.length);
		//l(hand);
		var sections = [];
		hand.forEach(function(pos){
			var pk = PKDX[pos];
			sections.push({ title: pk.n });
		});
		var menu = new UI.Menu({ sections: sections });
		menu.show();
	};
};


