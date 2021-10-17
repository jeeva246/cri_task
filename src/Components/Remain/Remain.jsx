import './Remain.css';
import tools from './tools.png';

function Remain() {
  return (
    <div className="remain">
        <br/>
        <p className="content">
          <center>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </center>
        </p>
        <div className="tool">
            <img src={tools} className="toolimg" alt="tools" />
        </div>
        <center>
        <p className="content">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
        </p>
        </center>
        <div className="line">
        </div>
        <div className="details">
            <p className="tooltopic">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </p>
            <p className="content">
            CHEMICALS & PROCESS <span className="spl">|</span> POWER <span className="spl">|</span> WATER & WASTE WATER <span className="spl">|</span> OILS & GAS <span className="spl">|</span> PHARMA <span className="spl">|</span> SUGARS & DISTILLERIES <span className="spl">|</span> PAPER & PULP <span className="spl">|</span> MARINE & DEFENCE <span className="spl">|</span> METAL & MINING <span className="spl">|</span> FOOD & BEVERAGE <span className="spl">|</span> PETROCHEMICAL & REFINERIES <span className="spl">|</span> SOLAR <span className="spl">|</span> BUILDING <span className="spl">|</span> HVAC <span className="spl">|</span> FIRE FIGHTING <span className="spl">|</span> AGRICULTURE & RESIDENTIAL
            </p>
        </div>
    </div>
  );
}

export default Remain;
