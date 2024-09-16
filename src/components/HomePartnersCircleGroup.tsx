import contr1 from "../assets/contractors-logos/1.png";
import contr10 from "../assets/contractors-logos/10.png";
import contr11 from "../assets/contractors-logos/11.png";
import contr14 from "../assets/contractors-logos/14.png";
import contr16 from "../assets/contractors-logos/16.png";
import contr17 from "../assets/contractors-logos/17.png";
import contr2 from "../assets/contractors-logos/2.png";
import contr25 from "../assets/contractors-logos/25.png";
import contr27 from "../assets/contractors-logos/27.png";
import contr3 from "../assets/contractors-logos/3.png";
import contr4 from "../assets/contractors-logos/4.png";
import contr5 from "../assets/contractors-logos/5.png";
import contr8 from "../assets/contractors-logos/8.png";
import PartnersCircle from "../components/PartnersCircle";

const partnersData = [
  { src: contr1, right: "3%", bottom: "29%" },
  { src: contr2, right: "18%", bottom: "33%" },
  { src: contr3, right: "37%", bottom: "10%" },
  { src: contr4, right: "50%", bottom: "50%" },
  { src: contr5, right: "40%", bottom: "40%" },
  { src: contr8, right: "30%", bottom: "30%" },
  { src: contr10, left: "20%", top: "20%" },
  { src: contr11, left: "30%", top: "50%" },
  { src: contr14, left: "35%", top: "70%" },
  { src: contr16, left: "19%", top: "3%" },
  { src: contr17, left: "39%", top: "20%" },
  { src: contr25, left: "20%", top: "38%" },
  { src: contr27, right: "35%", top: "25%" },
];

const PartnerCircleGroup: React.FC = () => {
  return (
    <>
      {partnersData.map((partner, index) => (
        <PartnersCircle
          key={index}
          src={partner.src}
          right={partner.right}
          bottom={partner.bottom}
          left={partner.left}
          top={partner.top}
          zIndex={10}
          size={{ base: "32px", md: "100px" }}
        />
      ))}
    </>
  );
};

export default PartnerCircleGroup;
