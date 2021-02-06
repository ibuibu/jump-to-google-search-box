 
    document.onkeydown = function (e){
        if(e.keyCode == 83 && event.ctrlKey){//s key
            const s = document.querySelector('.gLFyf');
            const val = s.value;
            s.select();
            setTimeout(() => {
                s.value = val;
            })
        }
    }

