function show(btn,Img) {
    btn.onmouseover = function () {
        Img.style.display='block';
    };
    btn.onmouseout = function () {
        Img.style.display='none';
    }
};