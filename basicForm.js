import React, { useState } from "react";


const BasicForm = ()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);


    const submitForm =(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};

       setAllEntry([...allEntry,newEntry]);
       console.log(allEntry);
    }
    return (
<>

     <form action="" className="form" onSubmit={submitForm}>
         <div className="email">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
         </div>
         <br/>
         <div className="psw"> 
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
         </div>

         <button className="b1"type="submit">Login</button>
     </form>
<div>

    {
        allEntry.map(function(curElem){
         return(


            <div className="showDataStyled">
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
            </div>
         )
        })
    }
</div>
</>

    )
}

export default BasicForm;