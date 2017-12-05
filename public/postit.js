
var postIt = function(options){

    var xhr = new XMLHttpRequest();
 
    url = options.url || location.href;
 
    data = options.data || {};
    beforeSend = options.beforeSend || function(xhr,next){
       next();
    },
    done = options.done || function (xhr) {
        console.log(xhr);
    };
    fail = options.fail || function (xhr) {
        console.log(xhr);
    };
 
    xhr.open('post', url);
 
    xhr.onreadystatechange = function () {
 
        if (this.readyState === 4) {
 
            if (this.status === 200) {
 
                done(this);
 
            } else {
 
                fail(this);
 
            }
 
        }
 
    };
 
    beforeSend(xhr, function(){
 
        xhr.send(data);
 
    });
 
};