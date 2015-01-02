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

	this.show_card = function(e, prev_card){
		var body = [
			"Atk:" + e.item.a,
			"Def:" + e.item.d
		].join("\n");
		var c = new UI.Card({ title: e.item.title, body:  body });
		//c.action({ up: 'images/action_icon_plus.png', down: 'images/action_icon_minus.png' });

		if ( e.itemIndex > 0 ){
			var up_pos_in_hand = e.itemIndex - 1;
			var up_pos_in_pkdx = self.hand[ up_pos_in_hand ];
			console.log("up_pos_in_pkdx up item:" , up_pos_in_pkdx);
			var up_pk = PKDX[up_pos_in_pkdx];
			up_pk.title = up_pk.n;
			c.on("click", "up", function(){
				console.log("got up click, to pos_in_pkdx:" + up_pos_in_pkdx + " " + up_pk.title);
				return self.show_card({  item: up_pk, itemIndex: up_pos_in_hand },c);
			});
		}


		if ( e.itemIndex < ( self.hand.length-1 ) ){
			var down_pos_in_hand = e.itemIndex + 1;
			var down_pos_in_pkdx = self.hand[ down_pos_in_hand ];
			console.log("down_pos_in_pkdx up item:" , down_pos_in_pkdx);
			var down_pk = PKDX[down_pos_in_pkdx];
			down_pk.title = down_pk.n;
			c.on("click", "down", function(){
				console.log("got down click, to down_pos_in_pkdx:" + down_pos_in_pkdx + " " + down_pk.title);
				return self.show_card({  item: down_pk, itemIndex: down_pos_in_hand }, c);
			});
		}


			
		c.show();
		if ( typeof prev_card == "object" ) prev_card.hide();
	}

	this.deal_cards = function(){
		/*
			self.hand contains an array of integers representing positions in PKDX
		*/
	
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


