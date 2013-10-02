NewsReader.Views.FeedView = Backbone.View.extend({
  render: function() {
    console.log(this.collection)
    this.$el.html(JST["feeds/show"]({ entries: this.collection}));
    return this;
  },
  events: {
    "click .refresh": "refresh"
  },
  refresh: function (event) {
    var that = this;
    NewsReader.feeds.fetch({
      success: function(){
        that.render();
      },
      error: function(){
        console.log("error");
      }
    });
  }
})