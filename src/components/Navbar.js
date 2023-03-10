import {useState} from "react";


function Navbar() {
  
  const [handle,setHandle] = useState();
  const [users,setUsers] = useState([]);
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
        setUsers(data.result[0]);
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
    <div className="users">
    <userinfo className="user--info">
       <p>Handle : {users.handle}</p>
       <p>Rating : {users.rating}</p>
       <p>maxRank: {users.maxRank}</p>
       <p>maxRating : {users.maxRating}</p>
    </userinfo>
    <img src={users.titlePhoto} alt=" "/>
    </div>
    </>
  );
}

export default Navbar;