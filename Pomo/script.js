 let min=25;
        let sec=0;
        let timer=null;

        function updateDisplay(){
            let m=min<10 ? "0"+min:min;
            let s= sec<10 ? "0"+sec :sec;
            document.getElementById("time").innerHTML= m+":"+s;
        }

        function pomo(){
            if(sec==0){
                if(min==0){
                    clearInterval(timer);
                    timer=null;
                    alert("Time is up");
                    return;
                }
                min--;
                sec=59;
            }
            else{
                sec--; 
            }
            updateDisplay();
        }

        function start(){
            if(!timer){
                timer=setInterval(pomo,100);
            }
        }

        function stop(){
            clearInterval(timer);
            timer=null;
        }

        function reset(){
            clearInterval(timer);
            timer=null;
            sec=0;
            min=25;
            updateDisplay();
        }
        updateDisplay();