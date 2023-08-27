	
	let ispace=/\s/g;
	let flag;
	let text= document.getElementById('text').value;
	let password =document.getElementById('password');
	let res =document.getElementById('res');
	let phone=document.getElementById('phone').value;
	function pro(elem){
		  let get = password.getAttribute('type');
		 if (get==="password") {
		 	password.setAttribute('type','text');
		 	elem.innerText="Hide password";
		 	

		 }else{
		 	password.setAttribute('type','password');
		 	elem.innerText="Show password";

		 }
	}
	   
	    function Name(data){
	    	let pattern=ispace.test(data);
	    	if ( pattern) {
	    		document.getElementById('alert-text').innerText="Please not space!";
	    	
	    	}else{
	    		document.getElementById('alert-text').innerText=""; 
	    		}

	    }
	    function Pass(data){
	    	 let passchar = document.querySelectorAll('.password-char');
	    	const lowerCase=new RegExp('(?=.*[a-z])');
	    	const upperCase=new RegExp('(?=.*[A-Z])');
	    	const number=new RegExp('(?=.*[0-9])');
	    	const specialChar=new RegExp('(?=.*[!@#\$%\^&\*])');
	    	const eightChar=new RegExp('(?=.{8,})');
	    	 
	    	 if (eightChar.test(data)) {
	    	 	passchar[0].style.color = "green";
	    	 	 
	    	 	
	    	 }else{

	    	 	passchar[0].style.color = "gray";
	    	 	flag=0;
	    	 		
	    	 	
	    	 }
	    	 if (lowerCase.test(data)) {
	    	 	passchar[2].style.color="green";
	    	 	flag=1;
	    	 	
	    	 }
	    	 else{
	    	 	 passchar[2].style.color="gray"; 
	    	 	 flag=0;
	    	 	
	    	 
	    	 }
	    	 if (upperCase.test(data)) {
	    	 	passchar[1].style.color="green"; flag=1;

	    	 
	    	 	
	    	 }
	    	 else{
	    	 passchar[1].style.color="gray"; flag=0;
	    	
	    	
	    	 }
	    	 if (specialChar.test(data)) {
	    	 	passchar[3].style.color="green"; flag=1;
	    	 	
	    	 	
	    	 }
	    	 else{ 
	    	 	passchar[3].style.color="gray";flag=0; 
	    	 
	    	 }
	    	 if (number.test(data)) {
	    	 	 passchar[4].style.color="green";flag=1;

	    	 	
	    	 }
	    	 else{ 
	    	 	passchar[4].style.color="gray"; flag=0;
	    	 
	    	 	
	    	 }
	    	 	    }
	    function validate(){
	    	if (flag==1) {
	    		return true;
	    		
	    	}else {
	    		return false;
	    		
	    	}
	    }
	 
	     
	    	
