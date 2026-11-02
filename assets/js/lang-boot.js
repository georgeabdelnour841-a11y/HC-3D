// Runs before first paint (classic script in <head>): picks the language and sets
// <html lang/dir> so the page lays out in the right direction from the start.
// Order: ?lang= in the URL → the visitor's saved choice → browser language (Arabic, else English).
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('hc-lang'); } catch (e) {}
  var l = q === 'ar' || q === 'en' ? q : saved === 'ar' || saved === 'en' ? saved
    : /^ar\b/i.test(navigator.language || '') ? 'ar' : 'en';
  if (q === 'ar' || q === 'en') { try { localStorage.setItem('hc-lang', q); } catch (e) {} }
  var html = document.documentElement;
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';
  html.classList.add('i18n-pending');
})();
