Simple News Reader
=====
This is a simple app that uses Backbone.js to interact with the Rails backend in order to produce a single-page RSS reader.

I bootstrap all of the data that the different "pages" will need into the initial response from the rails server to eliminate load times on clicking an individual feed. Also, it allows the back and forward buttons to work even if you navigate away from the page to the actual post.
