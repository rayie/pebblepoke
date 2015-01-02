var UI = require("ui");
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
	var self = this;


	this.show_card = function(e){
		var body = [
			"Atk:" + e.item.a,
			"Def:" + e.item.d
		].join("\n");
		var c = new UI.Card({ title: e.item.title, body:  body });
		c.show();
	}

	this.deal_cards = function(){
		self.hand = rand_list(7,PKDX.length);

		var sections = [];
		var items = [];

		self.hand.forEach(function(pos){
			var pk = PKDX[pos];
			pk.title = pk.n;
			items.push(pk);
		});

		var sections=[{ title:"Your Cards", items:items }];
		var menu = new UI.Menu({ sections: sections });

		menu.on("select", self.show_card);
		menu.show();
	};
};


