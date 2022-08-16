$( document ).ready(function() {
    console.log( "ready!" );
    
    function getTime(){
        let time = new Date();
        let army = time.getHours();
        let hours = time.getHours();
        hours = ((hours + 11) % 12 + 1);
        let minutes = time.getMinutes();
        minutes = (time.getMinutes()<10?'0':'') + time.getMinutes() 
        let seconds = time.getSeconds();
        let pic = "";

        $( "#hour" ).html(hours);
        $( "#minute" ).html(`:${minutes}`);
        $( "#second" ).html(seconds);

        if( army > 6 && army < 21 ) {
            pic = `<i class="fa-solid fa-sun"></i>`
        } else {
            pic = `<i class="fa-solid fa-cloud-moon"></i>`
        }
        $( "#bottom-face" ).html(pic)
    }

setInterval(getTime, 1000)

});
