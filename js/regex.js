

   function Validate(){

          var y=document.forms["formvalidate"]["email"].value;
          var i=0;

           if (!/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/.test(y))
            {
              alert("Wrong");
          }
          else {
            alert(" True ");
          i++;
          alert(i);
          }
          	// alert(i);
          	if(i<1){
          		// document.getElementById('tx').innerHTML="Email is wrong";
          		alert("Email is wrong!");
          		// Validate();
          	}

}
      
