// import React from "react";

// export function AboutUs() {
//   return (
//     <div className="container mt-5">
//       <h2>About Us</h2>
//       <p>
//         Welcome to our platform! We are dedicated to bringing the best
//         solutions to our customers. Our mission is to empower individuals
//         and businesses with tools to improve their productivity and achieve
//         their goals.
//       </p>
//       <p>
//         Founded with the vision of making a significant impact in the
//         industry, our team is committed to innovation, quality, and
//         customer satisfaction. We strive to continuously improve and adapt
//         to meet the ever-evolving needs of our community.
//       </p>
//       <p>
//         Thank you for visiting us. If you have any questions or feedback,
//         please feel free to reach out via our <a href="/contact">Contact Us</a> page.
//       </p>
//     </div>
//   );
// }

// src/AboutUs.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../assets/styles/about.css";

const teamMembers = [
    {
        name: "Dhanashri Dagade",
        img: "../src/assets/images/Dhanashri dagade.jpeg",
        role: [
            "Dhanashri Dagade is a passionate Computer Engineer currently pursuing ",
            " PG-DAC. Her technical skills include Java, web development, and  problem-solving. ",
            "She enjoys building impactful solutions that blend creativity with technology. "

        ],
    },
    {
        name: "Arati Murbade",
        img: "../src/assets/images/Arati Murbade.png",
        role: [
            "Arati Murbade is a skilled web designer and developer with 3.5+ years of in",
            " HTML, CSS, Bootstrap, and WordPress. She is currently pursuing PG-DAC to ",
            "enhance her full-stack development skills and is dedicated to creating impactful  ",
            "digital solutions for social causes."
        ],
    },
    {
        name: "Ashwini Vadkar",
        img: "../src/assets/images/Ashwini vadkar.jpeg",
        role: [
            "Ashwini Vadkar is an aspiring web developer with a background in CSE (Data",
            "Science).She is currently pursuing PG-DAC and building her full-stack development ",
            "skills. Her knowledge includes HTML, CSS, JavaScript, Python, Java, and SQL. She ",
            "aims to create impactful web solutions."
        ],


    },
];

export function AboutUs() {
    return (
        <>
            {/* About Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="../src/assets/images/fundfusion-empower-education.jpg"
                                alt="Empowering Education with FundFusion"
                                className="img-fluid rounded shadow"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-3">About Us</h2>
                            <p className="lead">
                                Empowering Dreams Through Education
                            </p>
                            <p>
                                At FundFusion, we believe that every child deserves the opportunity to learn, grow, and achieve their dreams, regardless of their socio-economic background. Our mission is to bridge the educational gap by connecting compassionate donors with underprivileged children who aspire to a brighter future.
                            </p>
                            <p>
                                Through our platform, we facilitate crowdfunding campaigns that provide essential resources—such as school fees, uniforms, books, and access to quality learning environments—to children in need. By uniting communities and leveraging the power of collective giving, we aim to transform lives and uplift entire communities through education.
                            </p>
                            <p>
                                Join us in making education accessible to all, one child at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-5">Meet Our Team</h2>
                    <div className="row justify-content-center g-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-md-4 mb-4 border p-4 rounded">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="rounded-circle shadow circle-img mb-3"
                                />
                                <h5>{member.name}</h5>
                                {Array.isArray(member.role) ? (
                                    <div className="text-start mx-auto" style={{ maxWidth: "300px" }}>
                                        {member.role.map((line, i) => (
                                            <div key={i} style={{ lineHeight: "1.6" }}>{line}</div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{member.role}</p>
                                )}
                                <div className="social-icons mt-3">
                                    <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram" style={{ color: "#E4405F",fontSize: "20px", paddingRight: "10px" }}></i>
                                    </a>
                                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin" style={{ color: "#0077B5",fontSize: "20px", paddingRight: "10px" }}></i>
                                    </a>
                                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github" style={{ color: "#171515",fontSize: "20px" }}></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

