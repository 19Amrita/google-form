import React, { useState } from "react";
    
const App = () => {
     //hooks
     //const [name,setName] = useState("");
     const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
     });
    const  inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(event.target.placeholder);

       //const value=event.target.value;
      // const name=event.target.name;
      const {value,name} = event.target;
    
    setFullName((preValue) => {

        if(name==="fName"){
            return{
               fname:value,
               lname:preValue.lname,
               email:preValue.email,
               phone:preValue.phone,
            };

        }
        else if(name==="lName"){
            return{
                fname:preValue.fname,
                lname:value,
                email:preValue.email,
                phone:preValue.phone,
            };
        }
        else if(name==="email"){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email:value,
                phone:preValue.phone,
            };
        }
        else if(name==="phone"){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email:preValue.email,
                phone:value,
            };
        }
    });
  };

 const onSubmits=(event)=>{
    event.preventDefault();
    alert("form submitted");
 };
    return(
     <>
      <div>
       <form onSubmit={onSubmits}>
        
            <h1>
            Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>

            <input type="text" 
              placeholder="Enter your First Name" 
              name="fName"
              onChange={inputEvent}
               value={fullName.fname}
            />
            <input type="text" 
             placeholder="Enter your Last Name" 
             name="lName"
             onChange={inputEvent}
             value={fullName.lname}
            />
             <input type="email" 
            placeholder="Enter your email" 
             name="email"
            onChange={inputEvent}
                value={fullName.email}
            />
            <input
               type="number" 
              placeholder="Enter your number" 
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <button type="Submit">submit now 😇</button>
          
        </form>
        </div>
     </>
    );
}
export default App;