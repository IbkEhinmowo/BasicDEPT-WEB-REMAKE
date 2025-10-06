/** @format */

import React, { useState } from "react";
import "./engagement.css";

interface Brand {
  name: string;
  description: string;
  link: string;
  logo?: string;
}

const brands: Brand[] = [
  {
    name: "GOOGLE",
    description:
      "Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.",
    link: "#",
    logo: "/src/assets/google-logo.png",
  },
  {
    name: "KFC",
    description:
      "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC's brand story to life while making it easier for customers to buy chicken.",
    link: "#",
    logo: "/src/assets/kfc-logo.png",
  },
  {
    name: "WILSON",
    description:
      "A reimagining of Wilson's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand's 108-year history.",
    link: "#",
    logo: "/src/assets/wilson-logo.png",
  },
  {
    name: "AT&T",
    description:
      "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.",
    link: "#",
    logo: "/src/assets/att-logo.png",
  },
  {
    name: "PATAGONIA",
    description:
      "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.",
    link: "#",
    logo: "/src/assets/patagonia-logo.png",
  },
];

const Engagement: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="engagement-section">
      <div className="engagement-container">
        <h2 className="engagement-title">FEATURED ENGAGEMENTS</h2>

        <div className="slider-container">
          <button
            className="slider-button slider-button-prev"
            onClick={prevSlide}
            aria-label="Previous brand"
          >
            ‹
          </button>

          <div className="slider-content">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brands.map((brand, index) => (
                <div key={index} className="slide">
                  <div className="brand-card">
                    <div className="brand-logo-container">
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="brand-logo"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                            (
                              e.target as HTMLImageElement
                            ).nextElementSibling?.setAttribute(
                              "style",
                              "display: block"
                            );
                          }}
                        />
                      ) : null}
                      <h3 className="brand-name">{brand.name}</h3>
                    </div>
                    <p className="brand-description">{brand.description}</p>
                    <a
                      href={brand.link}
                      className="brand-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about our partnership →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-button slider-button-next"
            onClick={nextSlide}
            aria-label="Next brand"
          >
            ›
          </button>
        </div>

        <div className="slider-dots">
          {brands.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to brand ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
