import bannerImg from '../../assets/images/bannar.jpg'

const Bannar = () => {
  return (
    <div className='mt-10'>
      <div
        className="hero min-h-screen rounded-3xl"
        style={{backgroundImage: `url(${bannerImg})`}}
        
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-4/5">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />
            class tailored for you!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn rounded-full mr-5 btn-primary">Explore Now</button>
            <button className="btn btn-outline text-white rounded-full">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
