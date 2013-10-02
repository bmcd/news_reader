NewsReader.Views.EntryView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["entries/show"]({ entry: this.model}));
    return this;
  },
});