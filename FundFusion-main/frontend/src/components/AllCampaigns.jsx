import React from "react";
import { useNavigate } from "react-router-dom";
import whyUsImg from "../assets/images/whyUs.jpg";
import Scrum from "../assets/images/scrum.jpg";
import Rular from "../assets/images/homecom3.jpg"
import Girl from "../assets/images/girl.jpg"


const campaigns = [
  {
    id: 1,
    title: "Support Slum Children’s Basic Education",
   image: whyUsImg ,
    description:
      "Many children living in urban slums are deprived of basic education due to poverty. Your contribution can help us set up classrooms and provide study materials for 100+ children.",
    amount: 7000,
  },
  {
    id: 2,
    title: "Sponsor School Kits for Rural Kids",
   image: Scrum ,
    description:
      "Thousands of children in remote villages attend school without proper bags, books, or stationery. We aim to distribute 500 school kits to ensure they start the academic year with dignity.",
    amount: 12000,
  },
  {
    id: 3,
    title: "Educate Orphaned Children in India",
    image: Rular ,
    description:
      "Orphaned children often struggle to access formal education. This campaign supports 25 children in a shelter home with tuition fees, uniforms, and extracurricular activities for one full year.",
    amount: 18000,
  },
  {
    id: 4,
    title: "Help Girls Stay in School",
  image: Girl ,
    description:
      "Many girls drop out of school due to financial challenges or lack of menstrual hygiene support. Your donation will provide reusable kits, books, and after-school programs for 50 adolescent girls.",
    amount: 10000,
  },
];

const AllCampaigns = () => {
  const navigate = useNavigate();

  const handleDonate = (campaign) => {
    navigate("/donate", { state: campaign });
  };

  return (
    <div className="campaign-container" style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Child Education Campaigns</h2>
      <div className="campaign-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            style={{
              width: "300px",
              backgroundColor: "#2dd4bf",
              borderRadius: "10px",
              padding: "1rem",
              color: "#000",
            }}
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h3 style={{ marginTop: "1rem" }}>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p><strong>Required Amount:</strong> ₹{campaign.amount}</p>
            <button
              style={{
                backgroundColor: "#111827",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleDonate(campaign)}
            >
              Donate Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCampaigns;