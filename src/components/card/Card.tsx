import React from "react";
import Image from "next/image";
import CardIcon from "../../public/images/cardIcon.svg";
import "./Card.css";

interface GradientCardProps {
  gradientColors: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

const Card: React.FC<GradientCardProps> = ({
  gradientColors,
  title,
  subtitle,
  onClick,
}) => {
  const gradientStyle = {
    background: `linear-gradient(${gradientColors})`,
  };

  return (
    <div className="guideCard" style={gradientStyle} onClick={onClick}>
      <h2 className="cardTitle">{title}</h2>
      <div className="subContainer">
        <p className="cardSubtitle ">{subtitle}</p>
        <Image src={CardIcon} alt="Logo" width={80} height={80} />
      </div>
    </div>
  );
};

export default Card;
