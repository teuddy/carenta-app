import BgGlassmorphism from "@/components/BgGlassmorphism";
import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";
import heroRightImage from "@/images/hero-right-car.png";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingCarMapPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">

        {/**SECTION HEROOOOOOOo */}
        <SectionHeroArchivePage
          rightImage={heroRightImage}
          currentPage="Cars"
          currentTab="Cars"
          listingType={
            <>
              <i className="text-2xl las la-car"></i>
              <span className="ml-2.5">1512 cars</span>
            </>
          }
        />
      </div>

      {/* SECTION */}
      {children}

     
    </div>
  );
};

export default Layout;
