	
	
	
	
	let nav = document.querySelector('.nav ul')
	let box2 = document.querySelectorAll('.boxMain')

		window.onscroll =()=>{
		box2.forEach(e=>{
			let indexScroll = window.scrollY;
			let boxS = e.offsetTop
			let boxH =  e.offsetHeight
			let vId = e.getAttribute('id')
			if(indexScroll >= boxS && indexScroll < boxS + boxH){
				nav.classList.add(vId)
			}else{
				nav.classList.remove(vId)
			}
		})
		}