import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../assets/providers/AuthProviders";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user}=useContext(AuthContext);

    const handleBookService=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const booking={
            customerName:name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price:price,
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
        form.reset();
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">CheckOut: <span className="text-orange-500">{title}</span></h3>
            <form onSubmit={handleBookService} className="card-body">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  name='name' placeholder="Name" className="input input-bordered" defaultValue={user?.displayName} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type="text" placeholder={'$'+price} className="input input-bordered" defaultValue={'$'+ price} required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>

    );
};

export default CheckOut;