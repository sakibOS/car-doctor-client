import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../assets/providers/AuthProviders';
import axios from 'axios';


const Login = () => {
    const{signIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
          const loggedInUser=result.user;
            console.log(loggedInUser)
            const user={email};
            //get access token=>
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res=>{
              console.log(res.data)
              if(res.data.success){
                navigate(location?.state?location?.state:'/')
              }
            })
        })
        .catch(error=>{
            console.error(error)
       })
        console.log(email,password)
        form.reset()
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin}className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='p-6'>Have an account?<Link className='text-[#FF3811]' to='/signUp'> Sign In</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;