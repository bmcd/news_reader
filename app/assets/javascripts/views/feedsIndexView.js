NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  render: function() {
    var that = this;
    this.$el.html(JST["feeds/index"]({ feeds: that.collection}));
    return this;
  }
})