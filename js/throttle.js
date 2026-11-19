
function show(...args){
    console.log(args[1].one)
}

show(1, {one: "a"}, 3)

function throttle(fn, delay){
    let lastCall = 0;

    return function(val){
        const now = Date.now();
        
        if(now - lastCall >= delay){
            lastCall = now;
            fn.apply(this, val)
        }
    }
}


const handleScroll = throttle(()=>{
    console.log("scroll event")
}, 1000)

window.addEventListener("scroll", handleScroll);