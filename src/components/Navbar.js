import {useState} from "react";


function Navbar() {
  
  const [handle,setHandle] = useState();
  const [user,setUser] = useState([]);
  const inputEvent=(e)=>{
    setHandle(e.target.value);
  }
   const handleonsubmit=(e)=>{
      e.preventDefault();
      console.log(handle);
      fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then(Response=>Response.json())
      .then((data)=>{
        console.log(data);
        setUser(data.data);
      })
   } 
    // const getUsers= async() => {
    //     const response= await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    //     setUser(await response.json());
    //     // console.log("Hello");
    //     // console.log(data);
    //     //const maxRating= await data.result[0].maxRating;
    //     //console.log(maxRating);

    // }
    
    

  return (
    <>
    <div>
    <img src="/images/cflogo.jpg" alt=" " className="cf--logo"/>
    </div>
    <div className="nav--search">
      <input type='text' placeholder='Enter your Handle...' className="input--search"
      onChange={inputEvent}/>
      <br/>
      <button onClick={handleonsubmit}>Search</button>
      
    </div>
    <div>{JSON.stringify(user)}</div>
    <div>{user.rating}</div>
    <div>{user.maxRank}</div>
    <div>{user.maxRating}</div>
    
    </>
  );
}

export default Navbar;