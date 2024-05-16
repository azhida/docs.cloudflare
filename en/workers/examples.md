# Examples

## [Return small HTML page](https://developers.cloudflare.com/workers/examples/return-html/)

Deliver an HTML page from an HTML string directly inside the Worker script.

## [Return JSON](https://developers.cloudflare.com/workers/examples/return-json/)

Return JSON directly from a Worker script, useful for building APIs and middleware.

## [Fetch HTML](https://developers.cloudflare.com/workers/examples/fetch-html/)

Send a request to a remote server, read HTML from the response, and serve that HTML.

## [Fetch JSON](https://developers.cloudflare.com/workers/examples/fetch-json/)

Send a GET request and read in JSON from the response. Use to fetch external data.

## [Redirect](https://developers.cloudflare.com/workers/examples/redirect/)

Redirect requests from one URL to another or from one set of URLs to another set.

## [Accessing the Cloudflare Object](https://developers.cloudflare.com/workers/examples/accessing-the-cloudflare-object/)

Access custom Cloudflare properties and control how Cloudflare features are applied to every request.

## [Respond with another site](https://developers.cloudflare.com/workers/examples/respond-with-another-site/)

Respond to the Worker request with the response from another website (example.com in this example).

## [103 Early Hints](https://developers.cloudflare.com/workers/examples/103-early-hints/)

Allow a client to request static assets while waiting for the HTML response.

## [A/B testing with same-URL direct access](https://developers.cloudflare.com/workers/examples/ab-testing/)

Set up an A/B test by controlling what response is served based on cookies. This version supports passing the request through to test and control on the origin, bypassing random assignment.

## [Aggregate requests](https://developers.cloudflare.com/workers/examples/aggregate-requests/)

Send two GET request to two urls and aggregates the responses into one response.

## [Alter headers](https://developers.cloudflare.com/workers/examples/alter-headers/)

Example of how to add, change, or delete headers sent in a request or returned in a response.

## [Auth with headers](https://developers.cloudflare.com/workers/examples/auth-with-headers/)

Allow or deny a request based on a known pre-shared key in a header. This is not meant to replace the WebCrypto API.

## [Block on TLS](https://developers.cloudflare.com/workers/examples/block-on-tls/)

Inspects the incoming request’s TLS version and blocks if under TLSv1.2.

## [Bulk origin override](https://developers.cloudflare.com/workers/examples/bulk-origin-proxy/)

Resolve requests to your domain to a set of proxy third-party origin URLs.

## [Bulk redirects](https://developers.cloudflare.com/workers/examples/bulk-redirects/)

Redirect requests to certain URLs based on a mapped object to the request’s URL.

## [Cache POST requests](https://developers.cloudflare.com/workers/examples/cache-post-request/)

Cache POST requests using the Cache API.

## [Cache Tags using Workers](https://developers.cloudflare.com/workers/examples/cache-tags/)

Send Additional Cache Tags using Workers

## [Cache using fetch](https://developers.cloudflare.com/workers/examples/cache-using-fetch/)

Determine how to cache a resource by setting TTLs, custom cache keys, and cache headers in a fetch request.

## [Conditional response](https://developers.cloudflare.com/workers/examples/conditional-response/)

Return a response based on the incoming request’s URL, HTTP method, User Agent, IP address, ASN or device type.

## [Cookie parsing](https://developers.cloudflare.com/workers/examples/extract-cookie-value/)

Given the cookie name, get the value of a cookie. You can also use cookies for A/B testing.

## [CORS header proxy](https://developers.cloudflare.com/workers/examples/cors-header-proxy/)

Add the necessary CORS headers to a third party API response.

## [Country code redirect](https://developers.cloudflare.com/workers/examples/country-code-redirect/)

Redirect a response based on the country code in the header of a visitor.

## [Custom Domain with Images](https://developers.cloudflare.com/workers/examples/images-workers/)

Set up custom domain for Images using a Worker or serve images using a prefix path and Cloudflare registered domain.

## [Data loss prevention](https://developers.cloudflare.com/workers/examples/data-loss-prevention/)

Protect sensitive data to prevent data loss, and send alerts to a webhooks server in the event of a data breach.

## [Debugging logs](https://developers.cloudflare.com/workers/examples/debugging-logs/)

Send debugging information in an errored response to a logging service.

## [Geolocation: Custom Styling](https://developers.cloudflare.com/workers/examples/geolocation-custom-styling/)

Personalize website styling based on localized user time.

## [Geolocation: Hello World](https://developers.cloudflare.com/workers/examples/geolocation-hello-world/)

Get all geolocation data fields and display them in HTML.

## [Geolocation: Weather application](https://developers.cloudflare.com/workers/examples/geolocation-app-weather/)

Fetch weather data from an API using the user’s geolocation data.

## [Hot-link protection](https://developers.cloudflare.com/workers/examples/hot-link-protection/)

Block other websites from linking to your content. This is useful for protecting images.

## [HTTP Basic Authentication](https://developers.cloudflare.com/workers/examples/basic-auth/)

Shows how to restrict access using the HTTP Basic schema.

## [Logging headers to console](https://developers.cloudflare.com/workers/examples/logging-headers/)

Examine the contents of a Headers object by logging to console with a Map.

## [Modify request property](https://developers.cloudflare.com/workers/examples/modify-request-property/)

Create a modified request with edited properties based off of an incoming request.

## [Modify response](https://developers.cloudflare.com/workers/examples/modify-response/)

Fetch and modify response properties which are immutable by creating a copy first.

## [Multiple Cron Triggers](https://developers.cloudflare.com/workers/examples/multiple-cron-triggers/)

Set multiple Cron Triggers on three different schedules.

## [Post JSON](https://developers.cloudflare.com/workers/examples/post-json/)

Send a POST request with JSON data. Use to share data with external servers.

## [Read POST](https://developers.cloudflare.com/workers/examples/read-post/)

Serve an HTML form, then read POST requests. Use also to read JSON or POST data from an incoming request.

## [Rewrite links](https://developers.cloudflare.com/workers/examples/rewrite-links/)

Rewrite URL links in HTML using the HTMLRewriter. This is useful for JAMstack websites.

## [Set security headers](https://developers.cloudflare.com/workers/examples/security-headers/)

Set common security headers (X-XSS-Protection, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, Referrer-Policy, Strict-Transport-Security, Content-Security-Policy).

## [Setting Cron Triggers](https://developers.cloudflare.com/workers/examples/cron-trigger/)

Set a Cron Trigger for your Worker.

## [Sign requests](https://developers.cloudflare.com/workers/examples/signing-requests/)

Verify a signed request using the HMAC and SHA-256 algorithms or return a 403.

## [Stream OpenAI API Responses](https://developers.cloudflare.com/workers/examples/openai-sdk-streaming/)

Use the OpenAI v4 SDK to stream responses from OpenAI.

## [Turnstile with Workers](https://developers.cloudflare.com/workers/examples/turnstile-html-rewriter/)

Inject Turnstile implicitly into HTML elements using the HTMLRewriter runtime API.

## [Using the Cache API](https://developers.cloudflare.com/workers/examples/cache-api/)

Use the Cache API to store responses in Cloudflare’s cache.

## [Using timingSafeEqual](https://developers.cloudflare.com/workers/examples/protect-against-timing-attacks/)

Protect against timing attacks by safely comparing values using `timingSafeEqual`.

## [Using the WebSockets API](https://developers.cloudflare.com/workers/examples/websockets/)

Use the WebSockets API to communicate in real time with your Cloudflare Workers.