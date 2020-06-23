"use strict";

// When working with URIs (e.g. passing them to browser history),
// it's a good practice to encode/decode URI in order to avoid issues with inappropriate symbols.
// Though, modern browsers usually do this automatically, it's not a good idea to rely on them,
// as you should test all the versions of all the browsers you have to support.
const sourceURI = 'https://lab.lectrum.io/users/морфиус';

const encodedURI = encodeURI(sourceURI); // https://lab.lectrum.io/users/%D0%BC%D0%BE%D1%80%D1%84%D0%B8%D1%83%D1%81
const decodedURI = decodeURI(encodedURI); // https://lab.lectrum.io/users/морфиус
