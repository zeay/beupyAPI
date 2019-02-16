var htmlElems = {
    editorArea: document.getElementById('editor'),
    inputArea: document.getElementById('formview'),
    reset: document.getElementById('resetButton'),
    news: document.getElementById('subButton'),
    message: document.getElementById('messButton')
}
var textarea;
(function(){
    textarea = document.createElement('textarea');
    var textareaValue = htmlElems.inputArea.innerHTML;
    textarea.value = textareaValue;
    textarea.rows = 9;
    textarea.style.fontSize = '13px';
    textarea.style.overflowY = "scroll"
    textarea.spellcheck = false;
    htmlElems.editorArea.appendChild(textarea);
    
    textarea.addEventListener('input', function(e){
        e.preventDefault();
        var thisValue = this.value.trim();
        htmlElems.inputArea.innerHTML = "";
        htmlElems.inputArea.innerHTML = thisValue;
    });
}());

htmlElems.reset.addEventListener('click', e=>{ 
    e.preventDefault();
    textarea.value= "";
    htmlElems.inputArea.innerHTML = textarea.value;
});

htmlElems.news.addEventListener('click', e=>{ 
    e.preventDefault();
    textarea.value = `            <form method="GET" action="https://apibeupy.openode.io/newsletter/youremail@domain.com">
              <input type="email" name="email" placeholder="Your email">
              <button type="submit">Send Test</button>
            </form>`;
    htmlElems.inputArea.innerHTML = textarea.value;
});

htmlElems.message.addEventListener('click', e=>{ 
    e.preventDefault();
    textarea.value = `            <form method="GET" action="https://apibeupy.openode.io/messenger/youremail@domain.com">
              <input type="text" name="userName" placeholder="Your Name">
              <input type="email" name="email" placeholder="Your email">
              <input type="text" name="subject" placeholder="Subject">
              <input type="text" name="message" placeholder="Message">
              <button type="submit">Send Test</button>
            </form>`;
    htmlElems.inputArea.innerHTML = textarea.value;
});