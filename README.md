## JSCG (javaScript Check Gate) prototype

JSCG is an idea for a node.js project that is not a Static Site Generator, and not a full feature Content management System as well. It is what I might call a Content Delivery System.

The idea is that I want something that does kindof work like a static site generator in the sense that the site does have a simple static structure. And this static structor is what is just simple given out there each time a certin path at the site is visited. 

However some of the content remains on the server, behind a non public path, and the only way to get at it is to have javaScript enabled, and make the request for it via scripting http.

So the process is basically this:

* 1) Serves some of a post as plain old static content
* 2) A request for the rest of the post is then sent from the client only if javaScript is enabled on the client.
* 3) Additional checks can be made sever side, if checks pass the rest of the content is sent back to the client
* The rest of the post is then injected via DOM manipulation