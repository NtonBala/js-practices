// Launch: node --experimental-modules index.mjs
(async () => {
  const a = await import('./constants.mjs');

  console.log(a); // [Module] { PI: 3.14 }
})();
