import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const{_id,title,img,price}=service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title font-bold">{title}</h2>
          
          <div className="card-actions">
          <p className="font-semibold text-xl text-orange-500">Price: ${price}</p>
           <Link to={`/checkout/${_id}`}> <button className="text-orange-500 "><FaArrowRightLong /></button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;