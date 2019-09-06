document.addEventListener('click', function (event) {
    // Log the clicked element in the console
	console.log(event.target);

	// If the clicked element doesn't have the right selector, bail
    switch(event.target.matches){
        case '.click-me': 
        // Don't follow the link
    	event.preventDefault();
        break;
        default:break;
    }
}, false);