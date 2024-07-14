import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-12">
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-semibold text-orange-600">Service</h1>
                <h1 className="font-bold text-5xl">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;