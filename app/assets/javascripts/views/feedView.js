NewsReader.Views.FeedView = Backbone.View.extend({
	initialize: function() {
		this.collection.on("change", this.render.bind(this))
	},
  render: function() {
    this.$el.html(JST["feeds/show"]({ entries: this.collection}));
    return this;
  },
  events: {
    "click .refresh": "refresh"
  },
  refresh: function (event) {
    var that = this;
    this.collection.fetch({
      success: function(){
				console.log("refreshed")
      },
      error: function(){
        console.log("error");
      }
    });
  }
})