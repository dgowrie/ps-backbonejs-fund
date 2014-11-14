// Rectangles.js for Rectangles.html demo
/* global Backbone */

(function () {

	'use strict';

	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({

		tagName: 'div',
		className: 'rectangle',

		events: {
			'click': 'move'
		},

		render: function() {
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this; // good convention is to return this at the end of render to enable chained calls.
		},

		setDimensions: function() {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function() {
			var position = this.model.get('position');

			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function() {
			this.$el.css({
				backgroundColor: this.model.get('color')
			});
		},

		move: function() {
			this.$el.css({
				left: this.$el.position().left + 10
			});
		}




	});

	var models = [

		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 300,
				y: 150
			},
			color: '#c00'
		}),
		new Rectangle({
			width: 25,
			height: 280,
			position: {
				x: 600,
				y: 75
			},
			color: '#0c0'
		}),
		new Rectangle({
			width: 300,
			height: 80,
			position: {
				x: 320,
				y: 210
			},
			color: '#00c'
		})				

	];

	// use underscore.js to access the models array, has an .each function - really a for loop over the array
	_(models).each(function (model) {

		$('#canvas').append(new RectangleView({model: model}).render().el);

	});


	// var myView = new RectangleView({model: myRectangle});

	// $('#canvas').append(myView.render().el);

}());