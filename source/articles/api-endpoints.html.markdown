---
title: API Endpoints
date: 2019/1/1
category: API Endpoints
---

One of the main reasons the SPA framework was developed was to create a backend & data layer for a single page application. Meaning, that one important feature is the ability to add custom API endpoints to access said data. 

There are a couple rules and helper functions to allow for creating custom API endpoints. 

First off, I'll note that the API framework isn't loaded right off the bat. You'll only want to register endpoints once the API framework is loaded. Fortunately, there is a hook for that, "`load-apis`". Once that action is fired, you can use any of the API helpers. 

To register an endpoint, you'll use the `API_Register` classes static function `add_endpoint()`, which will take in the endpoint schema and then the name of the function which will be the endpoint's callback. Example:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=add-api-endpoint.php"></script>

The callback recieves a "`$data`" parameter, and how it accesses data changes depending on if it's a GET or a POST request:

* in a GET, use the "`$data['parameters']`" array
* in a POST, use "`$data['parameterName']`"

The callback should use the "`API_Responses::send_response()`" function at the end to return data. This will help to clean and standardize the data, as well as ensure the script terminates. It takes an array of data to return (which gets turned into JSON) and (optionally) an HTTP status code.

Examples:

<script src="https://gist.github.com/benrgreene/d6efef21d2f94a2d2f4eeb68a54414d1.js?file=api-endpoint-callback.php"></script>