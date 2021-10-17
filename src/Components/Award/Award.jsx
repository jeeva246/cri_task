import './Award.css';
import awardphoto from './awardphoto.png';
import pic from './pic.png';

function Award() {
  return (
    <div className="award">
        <div className="awardimg">
            <img className="image" src={awardphoto} alt="award"  />
        </div>
        <div className="awardcon">
            <p className="heading">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.

            </p>
            <ul>
                <li className="list">
                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                </li>
                <li className="list">
                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                </li>
            </ul>
            <img src={pic} className="image2" alt="award" />
            <p className="list">
            Government of India has awarded the <span className="heading2"> "National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
        </div>
    </div>
  );
}

export default Award;
