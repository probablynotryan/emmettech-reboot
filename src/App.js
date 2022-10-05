import './App.css';
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Jobs from "./components/Jobs.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import HiringStripe from "./components/HiringStripe.jsx";
import Footer from './components/Footer';


export default function App() {

  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = About;
      break;
    case '/services':
      Component = Services;
      break;
    case '/jobs':
      Component = Jobs;
      break;
    case '/contact':
      Component = Contact;
      break;
    default:
      Component = About;
    }

  return (
    <div className="bg-slate-900 h-screen text-white">
      <Navbar />
      <HiringStripe />
      <div className="pt-6">
        <Component />
      </div>
    </div>
  );
}