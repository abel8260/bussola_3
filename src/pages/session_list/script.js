function getParent(el, tagName) {
    tagName = tagName.toLowerCase();
    while (el && el.parentNode) {
        el = el.parentNode;
        if (el.tagName && el.tagName.toLowerCase() == tagName) {
            return el;
        }
    }
    return null;
}

function fn(e) {
    var trPai = getParent(this, 'tr')
    if (this.checked) tabelaDestino.appendChild(trPai);
    else tabelaOrigem.appendChild(trPai);
}


var tabelaDestino = document.querySelectorAll('table tbody')[0];
var tabelaOrigem = document.querySelectorAll('table tbody')[1];

var checkboxes = document.querySelectorAll('input[type=checkbox]');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', fn);
}
