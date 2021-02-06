    document.onkeydown = function (e){
        if(e.keyCode == 83 && event.ctrlKey && event.shiftKey){
            const s = document.querySelector('.gLFyf');
            const val = s.value;
            s.select();
            setTimeout(() => {
                s.value = val;
            })
        }
    }

