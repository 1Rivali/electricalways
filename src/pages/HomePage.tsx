import { Box, useBreakpointValue } from "@chakra-ui/react";

import { VideoBackground } from "../components";
import HomeContactSection from "../components/HomeContactSection";
import HomeOverview from "../components/HomeOverview";
import HomeStatsSection from "../components/HomeStatsSection";
import PartnersMap from "../components/PartnersMap";
import { PartnersMapMobile } from "../components/PartnersMapMobile";
import { ProductsSection } from "../components/ProductsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";

const HomePage: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <VideoBackground />

      <Box textAlign="center" p={10}>
        <Box mt={10}>
          {!isMobile ? <PartnersMap /> : <PartnersMapMobile />}
          <HomeOverview />
          <HomeStatsSection
            stats={[
              { value: 21, label: "Years of Experience" },
              { value: 50, label: "Clients in the Kingdom" },
              { value: 100, label: "Projects Across Various Sectors" },
            ]}
          />
          <Box letterSpacing={"2px"} p={{ base: "0", md: "10" }}>
            <ProductsSection />
            <HomeContactSection />
            <WhyChooseUsSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
