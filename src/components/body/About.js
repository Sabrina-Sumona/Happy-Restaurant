import React from 'react';

const About = () => {
    document.title = "About";
    return (
        <div className="row" style={{ margin: "20px" }}>
            <div style={{ border: "5px solid #343A40", padding: "20px" }} className="col-4">
                <h1 style={{ color: "white", backgroundColor: "#343A40" }}>Our Missions:</h1>
                <p>Everything we do is about you. From chefs who create exciting new flavors, to crew members who know exactly how you want your drink – we prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time. That’s what Happy Restaurant runs on...</p>
            </div>
            <div style={{ border: "5px solid #343A40", padding: "20px" }} className="col-4">
                <h1 style={{ color: "white", backgroundColor: "#343A40" }}>Location of Happy Restaurant</h1>
                <p>1/ A Sheeltech Khanplaza 6B, Free School Street Kathal Bagah Kalabagan Dhaka-1205</p>
            </div>
            <div style={{ border: "5px solid #343A40", padding: "20px" }} className="col-4">
                <h1 style={{ color: "white", backgroundColor: "#343A40" }}>Our Visions:</h1>
                <p>Our vision is to make customers happy.</p>
                <p>Our vision is to inspire healthier communities by connecting people to real food.</p>
                <p>We want to give our customers a place to celebrate life’s special moments by offering the best foods and services.</p>
            </div>
        </div>
    );
}

export default About;