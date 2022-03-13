import React from 'react';

function Login() {
  return (
 
    <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div class="jumbotron">
                <h1 class="display-4 text-center">LOGIN USER!!</h1>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input type="text" class="form-control" name="fname"  placeholder="Enter Here" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="lname"  placeholder="Enter Here" />
                        </div>
                        
                        <div className="container text-center">
                            <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

);
}

export default Login;
