"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ContentServiceCard from "@/components/pricing/ContentServiceCard";
import CutOffLicenseCard from "@/components/pricing/CutOffLicenseCard";
import ContentServiceDesktop from "@/components/pricing/ContentServiceDesktop";
import CutOffLicenseDesktop from "@/components/pricing/CutOffLicenseDesktop";
import { ApiFeatures, cutOffLicenseData } from "@/utils/websiteData";

function Page() {
  return (
    <>
      <main className="container mx-auto w-full px-4 flex flex-col gap-6">
        {/* Desktop version */}
        <div className="hidden xl:flex flex-col xl:px-32">
          <ContentServiceDesktop />
          <CutOffLicenseDesktop />
        </div>

        {/* mobile version */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-12 justify-center items-center text-white my-10">
            <ContentServiceCard apiFeatures={ApiFeatures} />
            <CutOffLicenseCard data={cutOffLicenseData} />
          </div>
        </div>
      </main>

      {/* Tablet Version */}
      <div className="hidden md:block xl:hidden">
        <Swiper
          slidesPerView={1.4}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper px-4 overflow-visible"
        >
          <SwiperSlide className="my-10">
            <ContentServiceCard apiFeatures={ApiFeatures} />
          </SwiperSlide>

          <SwiperSlide className="my-10">
            <CutOffLicenseCard data={cutOffLicenseData} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Page;
