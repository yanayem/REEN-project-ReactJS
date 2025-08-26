import bg from "../assets/background1.png"
const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-4xl font-bold mb-4 text-white">Made for Designers</h1>
      <p className="max-w-2xl mx-auto text-gray-200">
        Create your online portfolio in minutes with the professionally and lovingly designed REEN website template. 
        Customize your site with versatile and easy to use features.
      </p>
      <button className="mt-6 btn-primary text-sm text-white px-4 py-2 rounded-lg shadow hover:text-white transition">
        Get started now
      </button>
    </section>
  );
};
export default HeroSection;
