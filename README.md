# JSCG (javaScript Check Gate) prototype

JSCG is an idea for a node.js project that is not a Static Site Generator, and not a full featured Content management System as well. It is what I might call a Content Delivery System.

The idea is that I want something that does kindof work like a static site generator in the sense that the site does have a simple static structure. And this static structure is what is just simply given out there each time a certain path at the site is visited, even if javaScript is disabled.

However some of the content remains on the server, behind a non public path, and the only way to get at it is to have javaScript enabled, and make the request for it via scripting http.

## So the basic idea is this

* 1) JSCH serves some of the site no matter what
* 2) A request for the rest of the content is then sent from the client only if javaScript is enabled on the client.
* 4) The rest of the content is then injected via DOM manipulation.

## The more advanced idea is this

Additional information might be gathered, and sent back to the back end for the purpose of making additional checks before unlocking content such as weather or not the visitor is allowing google analytics, and has a valid user id for that. Weather or not the visitor is logged in to something, ect.


```
# This is a markdown file example

This is an example of markdown that will be used in JSCG this content will be part of the static content of the site that will always show up like normal.

{% asset {
   content : 'This however is protected content that will not how up if javaScript is not disabled'
} %}

{% asset {
   content : 'This will only show up if additional checks are passed',
   checks : ['ga-on','ga-vaild-id']
} %}

```