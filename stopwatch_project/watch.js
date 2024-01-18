let second = document.querySelector("#second");
let msec = document.querySelector("#msec");

let btnstart = document.querySelector("#start");
let btnstop = document.querySelector("#stop");
let btnreset = document.querySelector("#reset");

    let sec = 0 ;
    let tens =0;


    let Interval;



    btnstart.addEventListener("click",function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    });

    btnstop.addEventListener("click",function(){
        console.log("clicked stop butoon")
        clearInterval(Interval);
    });

    btnreset.addEventListener("click",function(){
        clearInterval(Interval);
        tens = "00";
        sec = "00"
        second.innerHTML =tens;
        msec.innerHTML = sec;
    });



     function startTimer(){
        tens++;
        if(tens <=9){
            msec.innerHTML = "0" +tens;
            
        }
        if(tens > 9){
            msec.innerHTML = tens;
        }

        if(tens > 99){
            console.log("second");
            sec++
            second.innerHTML = "0" + sec;
            tens =0;
            msec.innerHTML = "0"+ 0;
        }

        if(sec > 9){
            second.innerHTML = sec;

        }


     }































































