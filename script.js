	// Selector variable
		let hamburger = document.querySelector(".hamburger");
		let cross = document.querySelector(".cross");
		let dropdown = document.querySelector("#list2");
		let home = document.querySelector("#home");
		let about = document.querySelector("#about");
		let contact = document.querySelector("#contact");
		let deviceWidth = screen.width;
		
		// onclick navbar dropdown code
		
		const onclickhamburgerFunc = () => {
		hamburger.style.display = "none";	
		cross.style.display = "block";
		dropdown.style.display = "block";
		};
		
		let onclickcrossFunc = () => {
		cross.style.display = "none";	
		hamburger.style.display = "block";	
		dropdown.style.display = "none";
		};
		
		// onclick navbar list tags go to that page 
		let homeFunc = () =>{
			home.style.display = "block";
			about.style.display = "none";
			contact.style.display = "none";
		    cross.style.display = "none";		
		    dropdown.style.display = "none";
			if(deviceWidth <= 880){ hamburger.style.display = "block";}else{}
		}
		let aboutFunc = () =>{
			about.style.display = "block";
			home.style.display = "none";
			contact.style.display = "none";
		    cross.style.display = "none";	
			if(deviceWidth <= 880){ hamburger.style.display = "block";}else{}
		    dropdown.style.display = "none";
		}
		let contactFunc = () =>{
			contact.style.display = "block";
			about.style.display = "none";
			home.style.display = "none";
		    cross.style.display = "none";	
			if(deviceWidth <= 880){ hamburger.style.display = "block";}else{}	
		    dropdown.style.display = "none";
       	}
		
		// checking user data and alert the result
		function validation() {
			// selectors
		let username = document.querySelector("#Username").value;
		let useremail = document.querySelector("#Useremail").value;
		let usernumber = document.querySelector("#Usernumber").value;
		let useraddresss = document.querySelector("#Useraddress").value;
		let usersubject = document.querySelector("#Usersubject").value;
			// verification for name
				if((username == "") || (username.length < 2) || (username > 20)){

					alert("PLease fill the username at least 2 character and maximum 20 characters.");
				}
			// varification for email
				else if((useremail == "") || (useremail.indexOf('@') <= 0) || (useremail.charAt(useremail.length-4)!='.')){
					alert("PLease fill the valid email.");
				}
			// varification for number
				else if((isNaN(usernumber)) || (usernumber == "") || (usernumber.length <10) || (usernumber.length >10)){
					alert("PLease fill the proper moblie number.");
				}
			// varification for address
				else if((useraddresss == "") || (useraddresss.length < 10) || (username > 50)){
					alert("PLease fill the address at least 10 characters and maximum 50 characters.");
				}
			// varification for subject
				else if((usersubject == "") || (usersubject.length < 20) || (usersubject > 500)){
					alert("PLease fill the subject at least 20 characters and maximum 500 characters.");
				}
			// if all is right
			else{alert("form has succesful submit.");
				}
		}
		
		
		
	