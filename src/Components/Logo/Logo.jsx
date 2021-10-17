import logo from './logo.png';
import './Logo.css';
function Logo() {
  return (
    <div className="logo">
        <center>
          <img src={logo} alt="logo" className="logoimg" />
        </center>
    </div>
  );
}

export default Logo;
