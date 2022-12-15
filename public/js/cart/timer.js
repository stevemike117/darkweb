var j = true;

function move(){    
    if(localStorage.getItem('banklogs') && !localStorage.getItem('deposit-amount')) {
        if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
            if(localStorage.getItem('loadtime')) {
                var elemj = document.getElementById('pablos');
                var width = localStorage.getItem('time-left');
                var id = setInterval(frame, 1000);
                function frame(){
                    if(width <= 0){
                        clearInterval(id);
                        i = false;
                        localStorage.setItem('time-left',null);
                        localStorage.setItem('banklogs',[]);
                        window.location.reload();
                    } 
                    else if( width <= 14) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 15) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `15 Seconds Left, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    else if( width <= 59) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 60) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `1 Minute Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 119) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 120) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `2 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    else if( width <= 179) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 180) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `3 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 
                    
                    
                    else if( width <= 239) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 240) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `4 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 299) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 300) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `5 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 359) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 360) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `6 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 419) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 420) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `7 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 479) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 480) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `8 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 539) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 540) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `9 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 599) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 600) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `10 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 659) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 660) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `11 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 719) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 720) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `12 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    
                    else if( width <= 779) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 780) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `13 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    
                    else if( width <= 839) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 840) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `14 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    }
                }
            } else if(!localStorage.getItem('loadtime')) {
                localStorage.setItem('time-left',900);



                var elemj = document.getElementById('pablos');
                var width = localStorage.getItem('time-left');
                var id = setInterval(frame, 1000);
                function frame(){
                    if(width <= 0){
                        clearInterval(id);
                        i = false;
                        localStorage.setItem('time-left',null);
                        localStorage.setItem('banklogs',[]);
                        window.location.reload();
                    } 
                    else if( width <= 14) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 15) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `15 Seconds Left, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    else if( width <= 59) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 60) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `1 Minute Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 119) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 120) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `2 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    else if( width <= 179) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 180) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `3 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 
                    
                    
                    else if( width <= 239) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 240) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `4 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 299) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 300) {
                        elemj.classList.add("bg-danger");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `5 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 359) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 360) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `6 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 419) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 420) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `7 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 479) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 480) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `8 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 539) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 540) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `9 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 599) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 600) {
                        elemj.classList.add("bg-warning");
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `10 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 659) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 660) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `11 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else if( width <= 719) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 720) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `12 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    
                    else if( width <= 779) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 780) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `13 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 

                    
                    else if( width <= 839) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    } 
                    else if( width == 840) {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                        var shortCutFunction = 'success';
                        var msg = `14 Minutes Left, <hr class="to-hr"> Complete the payment before time runs out.`;
                        toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                        var $toast = toastr[shortCutFunction](msg);
                        $toastlast = $toast;
                    } 


                    else {
                        localStorage.setItem('time-left',width--);
                        var minutes = Math.floor(width/60);
                        var seconds = width - minutes * 60;
                        if(seconds < 10){ seconds = '0'+seconds }
                        elemj.style.width = (width/9) + "%";
                        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                    }
                }


                localStorage.setItem('loadtime', true)
            }
        } else {
            console.log('No items are in cart');
        }
    } else {
        console.log('No bank logs selected')
    }       


    var binance = new WebSocket("wss://ws.blockchain.info/inv");
    binance.onopen = function(){
        binance.send(JSON.stringify({
            "op": "unconfirmed_sub"
        }))
    }
    binance.onmessage = function(onmsg){
        var response = JSON.parse(onmsg.data);
        var address1 = response.x.out[0].addr;
        var address2 = '1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp';

        if(address1 == address2) {
            if(!localStorage.getItem('deposit-amount')) {
                if(localStorage.getItem('banklogs')) {
                    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
                        let coinbase = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
                        coinbase.onmessage = event => {
                            let confirm = JSON.parse(event.data);
                            let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                            let balance = parseInt(coinz);
            
                            localStorage.setItem('banklogs',[]);
                            localStorage.setItem('paid-left', 1800);
                            localStorage.setItem('received-funds', balance);
                            window.location.assign('bitcoin');
                        }
                    }
                }
            }
        }             
    }

    if(!localStorage.getItem('banklogs') || ((JSON.parse(localStorage.getItem('banklogs')).length) < 1)) {
        document.getElementById('predat').style.display = 'flex';
        document.getElementsByClassName('clint')[0].style.bottom = '0';
	    document.getElementsByClassName('clint')[0].style.position = 'fixed';
    } else {
        document.getElementById('predat').style.display = 'none';
        if(localStorage.getItem('deposit-amount')) {
            document.getElementById('depart').style.display = 'flex';
            document.getElementById('logsection').style.display = 'none';
            document.getElementById('logsection2').style.display = 'none';
            if(localStorage.getItem('acc-balance')) {
                document.getElementById('your-bal').innerHTML = `Account Balance: <span>$${localStorage.getItem('acc-balance')}</span>`;
            } else {
                document.getElementById('your-bal').innerHTML = `Account Balance: <span>$0</span>`;
            }
            document.getElementsByClassName('depo-p')[0].innerHTML = `
                There's a deposit amount of 
                <span>$${localStorage.getItem('deposit-amount')}</span>
                that is pending. 
                Visit the deposit page and complete the progress.
            `;
        } else {
            document.getElementById('depart').style.display = 'none'
        }
    }       	
}