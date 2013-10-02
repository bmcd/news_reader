window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {


    var bootstrappedFeeds = JSON.parse($("#bootstrapped_stuff").html());
    NewsReader.feeds = new NewsReader.Collections.Feeds(bootstrappedFeeds, {parse: true});


    new NewsReader.Routers.FeedsRouter({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
