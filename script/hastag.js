var text = document.getElementById('hastag').textContent;

var sentences = text.split('. ');

for (var i = 0; i < sentences.length; i++) {
  var sentence = sentences[i].trim();

  if (sentence.startsWith('#')) {
    sentences[i] = '<span style="color: blue;">' + sentence + '</span>';
  }
}

var modifiedText = sentences.join('. ');

modifiedText = modifiedText.replace(/#/g, '<span style="color: blue;">#</span>');

document.getElementById('hastag').innerHTML = modifiedText;
