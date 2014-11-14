// Rectangles.js for Rectangles.html demo

(function () {

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

	var myRectangle = new Rectangle({
		width: 100,
		height: 60,
		position: {
			x: 300,
			y: 150
		},
		color: '#c00'
	});

	var myView = new RectangleView({model: myRectangle});

	$('#canvas').append(myView.render().el);

}());