# video-proxy

A simple example of how to utilize a proxy server to bypass cross-origin video limitations. See http://node-video-proxy.herokuapp.com for a demonstration.

### Motivation

Servers can be configured to refuse cross-origin video requests; ie, setting the `src` attribute in a `<video>` will result in a `403 Forbidden` error.

To get around this, we can create a server that makes a direct request on our behalf, and then sends back the video stream as a response.

### How it works

An endpoint is created in `express`:

```
GET /video/:url
```

Where `url` is a URL encoded video URL. A request is made from the Node.js server, and the stream response is piped through the HTTP response. The **most common pitfall** to implementing a proxy server is forgetting to forward the stream's response headers. If you forget that, you won't be able to seek in the video player.

### Running locally

```sh
npm install
npm run build
npm run start
```

### Resources 

* https://stackoverflow.com/questions/24976123/streaming-a-video-file-to-an-html5-video-player-with-node-js-so-that-the-video-c
