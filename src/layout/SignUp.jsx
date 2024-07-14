import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../assets/providers/AuthProviders';

const SignUp = () => {
    const{createUser}=useContext(AuthContext)
        const handleSignUp=e=>{
            e.preventDefault();
            const form=e.target;
            const name=form.name.value;
            const email=form.email.value;
            const password=form.password.value;
            createUser(email,password)
            .then(result=>{
                console.log(result.user)
            })
            .catch(error=>{
                console.error(error)
            })
            console.log(email,password,name)
            form.reset()
        }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp}className="card-body">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
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
            <p className='p-6'>Already have an account?<Link className='text-[#FF3811]' to='/login'> Login</Link></p>
          </div>
        </div>
      </div>  
    );
};

export default SignUp;