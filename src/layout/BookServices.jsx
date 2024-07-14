import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/providers/AuthProviders";
import TableRow from "./TableRow";
import axios from "axios";


const BookServices = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const uri = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(uri,{withCredentials:true})
        .then(res=>{
            setBookings(res.data)
        })
        //fetch(uri)
        //    .then(res => res.json())
        //    .then(data => {
        //        setBookings(data)
         //       console.log(data)
           // })
    }, [uri])

    const handleDelete=id=>{
        const proceed=confirm('Are You Sure You want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('Deleted successfully');
                    const remaining=bookings.filter(booking=>booking._id!==id);
                    setBookings(remaining)
                }
            })
        }
    } 

    const handleBookingConfirm=id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({status:'confirm'}),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                //updateState
                const remaining=bookings.filter(booking=>booking._id!==id);
                const updated=bookings.find(booking=>booking._id===id);
                updated.status='confirm';
                const newBooking=[updated,...remaining];
                setBookings(newBooking)
            }
        })
    }
    return (
        <div className="p-5">
            <h2>bookings:{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking=><TableRow booking={booking} key={booking._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></TableRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default BookServices;