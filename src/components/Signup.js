import axios from 'axios';
import React,{useState} from 'react';

function Signup(){
  const[user,setUser] = useState({
    fname : "",
    lname : ""
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const{fname,lname} = user;
  const submitDetails = e => {
    e.preventDefault();
    addUser(user);
  }
  const addUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/api/user/addUser",data).then(
      (response) => {
        alert("user added");
      },(err) => {
        alert("fail");
      }
    )
  }

  return (
 
    <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div class="jumbotron">
                <h1 class="display-4 text-center">Add User!</h1>
                <div>
                    <form onSubmit={e => submitDetails(e)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">First Name</label>
                            <input type="text" class="form-control" name="fname"  placeholder="Enter Here" value={fname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Last Name</label>
                            <input type="text" class="form-control" name="lname"  placeholder="Enter Here" value={lname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Username</label>
                            <input type="text" class="form-control" name="lname"  placeholder="Enter Here" value={lname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="text" class="form-control" name="lname"  placeholder="Enter Here" value={lname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text" class="form-control" name="lname"  placeholder="Enter Here" value={lname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Village name</label>
                            <input type="text" class="form-control" name="lname"  placeholder="Enter Here" value={lname} onChange={(e) => handleInput(e)} />
                        </div>
                        <div className="container text-center">
                            <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

);


}
export default Signup;
