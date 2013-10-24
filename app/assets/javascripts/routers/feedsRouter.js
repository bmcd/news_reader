NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
		this.feedsRendered = false;
		this.postsRendered = false;
  },

  routes: {
    "": "index",
    "feeds/:feed_id/entries": "show",
    "feeds/:feed_id/entries/:id": "showEntry"
  },


  index: function(){
    var that = this;

    var indexView = new NewsReader.Views.FeedsIndexView({
      collection: NewsReader.feeds
    });


    $(".feeds").html(indexView.render().el);

		this.feedsRendered = true;

  },

  show: function(id) {

    var that = this;

	  if (!this.feedsRendered) {
	  	this.index();
	  }

    var feed = NewsReader.feeds.get(id);
    var entries = feed.get('entries');

    var feedView = new NewsReader.Views.FeedView({
      collection: entries
    });

    $(".posts").html(feedView.render().el);

  },

  showEntry: function(feedId, id){

    var that = this;

	  if (!this.postsRendered) {
	  	this.show(feedId);
	  }

    var entries = NewsReader.feeds.get(feedId).get('entries')
    var entry = entries.get(id)

    var entryView = new NewsReader.Views.EntryView({
      model: entry
    });

    $("#" + feedId + "-" + id).after(entryView.render().el);

		this.postsRendered = true;

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currenView = view;
    this.$rootEl.html(view.render().$el);
  }
})