$(document).ready(function () {
    var html = document.createElement('div');
    html.innerHTML = '<div class="tilde-plugin-widget">a</div>';
    document.body.appendChild(html);
    var tildePlugin = document.getElementsByClassName('tilde-plugin-widget');
    $('.tilde-plugin-widget').hide()
    var txt = $('p, h1, h2, h3, h4, h5, li, blockquote, marquee, span, i, b').text();
    var wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;
    var wordsPerMinute = 250;
    var wordsPerSecond = wordsPerMinute / 60;
    var approximation = Math.round(wordCount / wordsPerSecond);
    if (approximation >= 60) {
        approximation = Math.floor(approximation / 60);
        $('.tilde-plugin-widget').text("~" + approximation + " m").fadeIn(1000).delay(4000).fadeOut(1000);
    } else {
        $('.tilde-plugin-widget').text("~" + approximation + " s").fadeIn(1000).delay(4000).fadeOut(1000);
    };
});
