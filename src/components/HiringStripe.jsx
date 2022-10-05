import LeftLogo from "../img/left-logo.png";
import RightLogo from "../img/right-logo.png";

export default function HiringStripe() {
  return ( 
    <div className="flex pt-2">
      <div className= "h-15 w-16 flex-1" />
      <img src={LeftLogo} className="h-12 relative left-4" />
      <div className="flex-auto w-50 h-15 border-t-4 border-b-4 border-b-white border-t-white">
      <h1 className="text-center pt-2">We're Hiring! More Details <a className="text-fuchsia-500" href="/jobs">Here</a>.</h1>
      </div>
      <img src={RightLogo} className="h-12 relative -left-3" />
      <div className="w-16 flex-1" />
    </div>

   );
}