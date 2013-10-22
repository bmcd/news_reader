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
		var url = $(event.target).siblings();
		$(event.target).addClass("disabled");
		url.parent().removeClass("error");
		newFeed = NewsReader.feeds.create({ url: url.val() }, {
			success: function(resp) {
				console.log(resp);
				url.val("");
				$(event.target).removeClass("disabled");
			},
			error: function(resp) {
				url.parent().addClass("error")
				$(event.target).removeClass("disabled");
			}
		});
	}
})