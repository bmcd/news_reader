NewsReader.Views.FeedsIndexView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('change', this.render.bind(this));
	},
  render: function() {
    var that = this;
    this.$el.html(JST["feeds/index"]({ feeds: that.collection}));
    return this;
  },
	events: {
		"click button": "submit"
	},
	submit: function(event) {
		var url = $(event.target).siblings().val();
		newFeed = NewsReader.feeds.create({ url: url }, {
			success: function(resp) {
				console.log("success");
			},
			error: function(resp) {
				console.log("error");
			}
		});
	}
})