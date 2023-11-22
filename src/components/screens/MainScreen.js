import React, { useState } from "react";
import "./MainScreen.css";
import { deliveryLocation, whyTasteDrop } from "../../assets/data";
const MainScreen = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPara, setShowPara] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const youtubeUrl = "https://www.youtube.com/channel/UCFyrVKBKrcANVwX0ehSeSzA";
  const instaUrl = "https://www.instagram.com/rushi_bhumkar11/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100074135959923";
  const linkedinUrl =
    "https://www.linkedin.com/in/rushikesh-bhumkar-59879b220/";

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="mainPage">
      {/* <--------navbar---------> */}
      <div className="navbar">
        <div className="navbarHeadCont">
          <img
            className="logo"
            src={require("../../assets/images/tiffin.png")}
            alt=""
          />
          <h1 className="titleName">Taste Drop</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h1 className="heading">Home</h1>
          <h1 className="heading">Why Tastedrop</h1>
          <h1 className="heading">Where we deliver</h1>
          <h1 className="heading">About us</h1>
        </div>
        <button className="button">
          <h1 className="btnhead">DOWNLOAD APP</h1>
        </button>
      </div>
      {/* <--------bannerrrrr-----> */}
      <div className="bannerCont">
        <img
          src={require("../../assets/images/banner.png")}
          className="banner"
          alt=""
        />
        <div className="bannerHeadCont">
          <h2
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Unlock free trial membership on your signup
          </h2>
          <h2 style={{ color: "#fff", fontSize: 16, fontFamily: "sans-serif" }}>
            Natural and 100% pure essentials delivered to your doorstep.
          </h2>
          <h2
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Live Better
          </h2>
        </div>
      </div>
      {/* <-----We deliver in container-----> */}
      <div className="deliveryIn">
        <h1
          style={{
            fontFamily: "sans-serif",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
            color: "#323A45",
            margin: 4,
            paddingTop: 12,
          }}
        >
          We deliver in
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#eafdef",
            justifyContent: "center",
          }}
        >
          {deliveryLocation.map((item) => {
            return (
              <div style={{ margin: 6 }}>
                <img
                  src={item.imagUrl}
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  alt=""
                />
                <h1
                  style={{
                    fontFamily: "sans-serif",
                    marginTop: 0,
                    fontSize: 16,
                    fontWeight: "400",
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  {item.cityName}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      {/* <---------Why TasteDrop-----------> */}
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold",
          color: "#323A45",
          marginTop: 12,
        }}
      >
        Why TasteDrop
      </h1>
      <div className="whyTasteDrop">
        {whyTasteDrop.map((item) => {
          return (
            <div className="whyTasteDropCont">
              <video
                width="60"
                height="280"
                onPlay={togglePlay === true}
                onPause={togglePlay === false}
                style={{ borderRadius: "inherit", width: "100%" }}
              >
                <source src={item.videoUrl} type="video/mp4" />
              </video>
              <img
                src={require("../../assets/images/pause.png")}
                style={{
                  position: "relative",
                  bottom: 20,
                  left: 20,
                  height: 30,
                  width: 30,
                  backgroundColor: "red",
                  zIndex: 40,
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "grey",
          marginBottom: 20,
        }}
      ></div>
      {/* <-----App Link Cont container-----> */}
      <div className="appDetails">
        <h1 style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
          Download App
        </h1>
        <img
          className="qrcode"
          src={require("../../assets/images/qrcode.png")}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: 0.2, height: 25, backgroundColor: "#fff" }}
          ></div>
          <h1
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#fff",
              margin: 0,
            }}
          >
            or
          </h1>
          <div
            style={{ width: 0.2, height: 25, backgroundColor: "#fff" }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            value={phoneNo}
            onChange={(item) => setPhoneNo(item.target.value)}
            type="text"
            placeholder="Enter Your Number"
            style={{
              textDecorationColor: "grey",
              color: "#000",
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              margin: 4,
              borderWidth: 0,
            }}
          />
          <button
            className="sendLink"
            disabled={phoneNo.length !== 10}
            style={{
              backgroundColor: phoneNo.length === 10 ? "#17bd30" : "#b1e386",
              cursor: phoneNo.length === 10 ? "pointer" : "auto",
              color: "#fff",
            }}
          >
            Send Link
          </button>
        </div>
        <div className="playstoreCont">
          <img
            src={require("../../assets/images/applestore.webp")}
            style={{ height: 40, width: 120, padding: 8 }}
            alt=""
          />
          <img
            src={require("../../assets/images/playstore.webp")}
            style={{ height: 40, width: 120, padding: 8 }}
            alt=""
          />
        </div>
      </div>

      {/* <---------About Us-----------> */}
      <div
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "grey",
          marginTop: 20,
        }}
      ></div>
      <div
        style={{
          paddingTop: 16,
          paddingLeft: 32,
          paddingRight: 32,
          paddingBottom: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 12,
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <h1
              style={{
                color: showPara === "Privacy" ? "#000" : "#5b5c5b",
                cursor: "pointer",
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: "100",
                width: "20%",
              }}
              onClick={() => setShowPara("Privacy")}
            >
              Privacy
            </h1>
            {showPara === "Privacy" && (
              <div style={{ width: "80%" }}>
                <h4>this is heading</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur error nam officia veniam fugiat deleniti, magni
                  non ea ipsa suscipit repellat eius deserunt in. Atque
                  cupiditate excepturi laborum sed magni ratione amet pariatur
                  officiis?
                </p>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <h1
              style={{
                color: showPara === "Terms" ? "#000" : "#5b5c5b",
                cursor: "pointer",
                fontFamily: "sans-serif",
                fontSize: 16,

                fontWeight: "100",
                width: "20%",
              }}
              onClick={() => setShowPara("Terms")}
            >
              Terms & Conditions
            </h1>
            {showPara === "Terms" && (
              <div style={{ width: "80%" }}>
                <h4>this is heading</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur error nam officia veniam fugiat deleniti, magni
                  non ea ipsa suscipit repellat eius deserunt in. Atque
                  cupiditate excepturi laborum sed magni ratione amet pariatur
                  officiis?
                </p>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <h1
              style={{
                color: showPara === "Help" ? "#000" : "#5b5c5b",
                cursor: "pointer",
                fontFamily: "sans-serif",
                fontSize: 16,
                width: "20%",
                fontWeight: "100",
              }}
              onClick={() => setShowPara("Help")}
            >
              How we can help you
            </h1>
            {showPara === "Help" && (
              <div style={{ width: "80%" }}>
                <h4>this is heading</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur error nam officia veniam fugiat deleniti, magni
                  non ea ipsa suscipit repellat eius deserunt in. Atque
                  cupiditate excepturi laborum sed magni ratione amet pariatur
                  officiis?
                </p>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <h1
              style={{
                color: showPara === "Connect" ? "#000" : "#5b5c5b",
                cursor: "pointer",
                fontFamily: "sans-serif",
                fontSize: 16,
                width: "20%",
                fontWeight: "100",
              }}
              onClick={() => setShowPara("Connect")}
            >
              Connect With Us
            </h1>
            {showPara === "Connect" && (
              <div style={{ width: "80%" }}>
                <h4>this is heading</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur error nam officia veniam fugiat deleniti, magni
                  non ea ipsa suscipit repellat eius deserunt in. Atque
                  cupiditate excepturi laborum sed magni ratione amet pariatur
                  officiis?
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "20%",
            marginTop: 12,
          }}
        >
          <img
            src={require("../../assets/images/youtube.png")}
            style={{ height: 30, width: 30, cursor: "pointer" }}
            alt=""
            onClick={() => window.open(youtubeUrl)}
          />
          <img
            src={require("../../assets/images/instagram.png")}
            style={{ height: 30, width: 30, cursor: "pointer" }}
            alt=""
            onClick={() => window.open(instaUrl)}
          />
          <img
            src={require("../../assets/images/facebook.png")}
            style={{ height: 30, width: 30, cursor: "pointer" }}
            alt=""
            onClick={() => window.open(facebookUrl)}
          />
          <img
            src={require("../../assets/images/linkedin.png")}
            style={{ height: 30, width: 30, cursor: "pointer" }}
            alt=""
            onClick={() => window.open(linkedinUrl)}
          />
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
