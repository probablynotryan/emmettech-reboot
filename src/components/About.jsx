import capacitor from '../img/capacitor.png';
// import westand from '../img/we_stand.jpg';
import Footer from "./Footer.jsx";
import funny from "../img/funny_filler.jpg";

function About() {
  return ( 
    <div className="flex">
      <div className="w-10 flex-initial" />
      <div className="flex-auto w-80 h-8">
        {/* Body Text */}
        <p className="text-center text-2xl pb-6 text-cyan-500"> Dedication. Reliability. Value.</p>
        <div className="inline-flex h-8">
            <img src={capacitor} className="h-6" />
            <p className="text-2xl pl-2 relative -top-1">Who are we?</p>
        </div>
        <p className="indent-12 text-l text-gray-300">
          Our aim has been to provide you with expert service, honest estimates, and helpful consultations. From professional guidance to long-lasting work, our kind and knowledgeable staff is here to help you every step of the way, because we know what it’s like to be in your shoes.
        </p>
        <p className="indent-12 text-l text-gray-300">
          <img src={funny} className="p-6 float-right w-80" />
          At <span className="text-cyan-500">Emmettech</span>, we make sure your needs come first and offer a variety of top-quality services. Our main goal is to take care of everything from the very beginning, bringing you exceptional results.
        </p>
        <div className="inline-flex h-8 pt-6">
            <img src={capacitor} className="h-6" />
            <p className="text-2xl pl-2 relative -top-1">What services do we offer?</p>
        </div>
        <p className="indent-12 text-l text-gray-300">
          All of them. Next question, please.
        </p>
        {/* End Body */}


        {/* Temp Footer */}
          <Footer />
        {/* End Temp Footer */}
      </div>
      <div className="flex-initial w-10" />
    </div>


   );
}

export default About;