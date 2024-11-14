import React from "react";
import Korzinka from "../svg/1 korzinka.svg";
import img1 from "../image/1.png";
import { ApiHomeofAbout } from "../data/data";

function Home() {
  return (
    <div>
      <div className="Home">
        <div className="home-header">
          <div className="search">
            <input placeholder="Search..." type="text" />
          </div>
          <div className="image">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3283 14.8281C19.4721 13.9282 20.307 12.6941 20.7168 11.2977C21.1266 9.9012 21.0909 8.41172 20.6147 7.03645C20.1386 5.66119 19.2456 4.46853 18.0601 3.6244C16.8745 2.78028 15.4554 2.32666 14 2.32666C12.5446 2.32666 11.1255 2.78028 9.93991 3.6244C8.75437 4.46853 7.8614 5.66119 7.38524 7.03645C6.90909 8.41172 6.87343 9.9012 7.28322 11.2977C7.69301 12.6941 8.52787 13.9282 9.67166 14.8281C7.71175 15.6133 6.00166 16.9156 4.7237 18.5963C3.44574 20.277 2.64782 22.2729 2.415 24.3714C2.39814 24.5246 2.41163 24.6796 2.45469 24.8276C2.49775 24.9756 2.56954 25.1137 2.66596 25.234C2.86068 25.4768 3.14391 25.6324 3.45333 25.6664C3.76275 25.7004 4.07302 25.6102 4.31588 25.4154C4.55874 25.2207 4.71429 24.9375 4.74833 24.6281C5.00451 22.3475 6.09196 20.2412 7.80292 18.7117C9.51387 17.1821 11.7284 16.3366 14.0233 16.3366C16.3183 16.3366 18.5328 17.1821 20.2437 18.7117C21.9547 20.2412 23.0421 22.3475 23.2983 24.6281C23.33 24.9147 23.4668 25.1795 23.6823 25.3713C23.8977 25.563 24.1766 25.6682 24.465 25.6664H24.5933C24.8992 25.6312 25.1787 25.4766 25.371 25.2362C25.5633 24.9958 25.6528 24.6892 25.62 24.3831C25.3861 22.2786 24.5838 20.2776 23.2993 18.5943C22.0148 16.9111 20.2964 15.6091 18.3283 14.8281ZM14 13.9997C13.077 13.9997 12.1748 13.726 11.4073 13.2133C10.6399 12.7005 10.0418 11.9717 9.68856 11.1189C9.33535 10.2662 9.24293 9.3279 9.423 8.42265C9.60306 7.51741 10.0475 6.68589 10.7002 6.03324C11.3528 5.3806 12.1843 4.93614 13.0896 4.75607C13.9948 4.57601 14.9331 4.66843 15.7859 5.02163C16.6386 5.37484 17.3674 5.97298 17.8802 6.74041C18.393 7.50784 18.6667 8.41009 18.6667 9.33307C18.6667 10.5707 18.175 11.7577 17.2998 12.6329C16.4247 13.5081 15.2377 13.9997 14 13.9997Z"
                fill="#181B1A"
              />
            </svg>
            <div className="img">
              <img src={Korzinka} alt="" />
            </div>
          </div>
        </div>
        <div className="plant">
          <div className="framer">
            <h1>Buy your dream plants.</h1>
            <div className="customer">
              <div className="text">
                <span>50 +</span>
                <p>Plant Species</p>
              </div>
              <div className="border"></div>
              <div className="text">
                <span>1M +</span>
                <p>Customers</p>
              </div>
            </div>
          </div>
          <div className="group">
            <img src={img1} alt="image/" />
          </div>
        </div>
        <div className="about">
          <div className="abouText">
            <span>About us</span>
            <p>Life is short, buy the plants.</p>
            <div className="boxs">
              {ApiHomeofAbout.map((e) => {
                return (
                  <div className="box" key={e.id}>
                    <div className="boxofimg">
                      <img src={e.img} alt="" />
                    </div>
                    <span>{e.span}</span>
                    <p>{e.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}

export default Home;
