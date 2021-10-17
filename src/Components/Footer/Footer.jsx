import './footercss.css';
import { FaPhoneAlt } from 'react-icons/fa';
import {ImFacebook} from 'react-icons/im';
import { BsGlobe2 } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
        <div className="num">
            <div className="ic">
                <center><FaPhoneAlt className="faph" size="15px" color="rgb(228, 26, 26)"> </FaPhoneAlt></center>
            </div>
            <p className="det">
                Toll free <span className="numspl">1800 200 1234</span>
            </p>
        </div>
        <div className="fb">
            <div className="ic">
                <ImFacebook color="rgb(228, 26, 26)" size="15px" className="imfb"> </ImFacebook>
            </div>
            <p className="det">
                www.facebook.com/cripumps
            </p>
        </div>
        <div className="web">
            <div className="ic3">
                <BsGlobe2 color="rgb(228, 26, 26)" size="25px"> </BsGlobe2>
            </div>
            <p className="det">
                www.crigroups.com
            </p>
        </div>
    </div>
  );
}

export default Footer;
