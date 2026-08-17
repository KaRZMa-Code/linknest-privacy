/*
  The LinkNest site needs no JavaScript to work.

  Every page is static HTML and CSS: navigation is plain links, the layout is
  responsive through CSS alone, and both privacy policies are fully readable
  with scripting disabled. Nothing here is required — it is progressive
  enhancement only, and the pages are complete without it.

  There is deliberately no analytics, no tracking, no cookies, and nothing
  loaded from a third party, which is the same commitment the privacy policy
  makes about the app itself.
*/

// Keeps the footer year from going stale. The HTML carries a real year as its
// fallback, so a reader with JavaScript disabled still sees a sensible date
// rather than an empty space.
document.querySelectorAll('[data-current-year]').forEach(function (element) {
  element.textContent = String(new Date().getFullYear());
});
