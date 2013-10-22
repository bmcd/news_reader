NewsReader.Models.Feed = Backbone.Model.extend(
  {
  parse: function(parsedObject){
    parsedObject['entries'] = new NewsReader.Collections.Entries(parsedObject['entries']);
		parsedObject['entries'].url = "/feeds/" + parsedObject.id + "/entries"
    return parsedObject;
  }
});