/** @format */

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

export default function BD(): JSX.Element {
  return (
    <div className="below1">
      <div className="below11">
        <section id="basictext">
          <h1>
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h1>
          <button>SEE THE WORK</button>
        </section>
        <section id="logo">
          <h1>B/D®</h1>
        </section>
      </div>
      <div className="pictureline">
        <div>
          <div className="imgclass">
            <img src={photo1} alt="Patagonia" />
          </div>

          <h1> PATAGONIA</h1>
          <p>AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA'S BRAND MISSION</p>
        </div>
        <div className="photo3">
          <div className="imgclass">
            <img src={photo3} alt="Wilson" />
          </div>

          <h1>WILSON</h1>
          <p>A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE</p>
        </div>
        <div>
          <div className="imgclass">
            <img src={photo2} alt="Google Store" />
          </div>

          <h1>GOOGLE STORE</h1>
          <p>
            AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE
            ACROSS THE GLOBE
          </p>
        </div>
      </div>
    </div>
  );
}
