import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
      <img src={parts} className="w-1/2 absolute border-8 right-5 top-1/2 rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2'>
    <p className='text-[#FF3811] font-semibold text-xl'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6 text-[#737373]">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className='text-[#737373] mb-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary text-white bg-[#FF3811]">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;