/*
 * A web worker is JS code that runs in a background thread
 * without affecting the performance of the UI.
 */

// 1) To implement a web worker, first create the external JS worker code

// Check for browser compatibility:
if (typeof(Worker) !== "undefined"){
    console.log("Web workers are supported!");
} else {
    console.log("Web workers aren't supported");
}

/* 
 * Create a function to count down from 10 and pass a message each iteration to the HTML
 * inline script that creates this worker with postMessage
 */ 
function countdown(){
    var count = 10;

    while(count > 0){
        postMessage(count);
        count--;
    }
}

countdown();

/*
 * If web worker object sends a message, return it. You could also implement
 * JSON message passing here, where copies of JSON objects are encoded/decoded on either end
 */ 
self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);