import {useState} from "react";


function Navbar() {
  
  const [location,setLocation] = useState();
  const [user,setUser] = useState([]);
  const inputEvent=(e)=>{
    setLocation(e.target.value);
  }
   const handleonsubmit=(e)=>{
      e.preventDefault();
      console.log(location);
      fetch(`https://api.weatherapi.com/v1/current.json?key=970b42fd54bd40d69e7120153231101&q=${location}&aqi=no`)
      .then(Response=>Response.json())
      .then((data)=>{
        console.log(data);
        setUser(data.result[0]);
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
      <input type='text' placeholder='Enter Location...' className="input--search"
      onChange={inputEvent}/>
      <br/>
      <button onClick={handleonsubmit}>Search</button>
      
    </div>
    <div className="users">
    <userinfo className="user--info">
       <p>Handle : {user.handle}</p>
       <p>Rating : {user.rating}</p>
       <p>maxRank: {user.maxRank}</p>
       <p>maxRating : {user.maxRating}</p>
    </userinfo>
    <img src={user.titlePhoto} alt=" "/>
    </div>
    </>
  );
}

export default Navbar;