import { useEffect, useState } from "react";


function Navbar() {
  console.log("hello");
  const [handle,setHandle] = useState();
  const [user,setUser] = useState([]);
  const inputEvent=(e)=>{
    console.log(e.target.value);
    setHandle(e.target.value);
  }
    
    const getUsers= async() => {
        const response= await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
        setUser(await response.json());
        // console.log("Hello");
        // console.log(data);
        //const maxRating= await data.result[0].maxRating;
        //console.log(maxRating);

    }
    useEffect(() => {
      getUsers();
    });
    

  return (
    <>
    <div>
    <img src="/images/cflogo.jpg" alt=" " className="cf--logo"/>
    </div>
    <div className="nav--search">
      <input type='text' placeholder='Enter your Handle...' className="input--search"
      onChange={inputEvent}/>
      <br/>
      <button onClick={getUsers}>Search</button>
      
    </div>
    
    <div>{user.maxRating}</div>
    </>
  );
}

export default Navbar;