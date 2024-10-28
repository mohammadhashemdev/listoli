"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ApiFeatures = [
  {
    id: 1,
    name: "Content Management",
    description: "Manage and publish private and public posts.",
  },
  {
    id: 2,
    name: "User Engagement",
    description:
      "Enable likes, comments, and reactions for interactive content.",
  },
  {
    id: 3,
    name: "Fully Searchable (Optional)",
    description: "Use Algolia for advanced search with API integration",
  },
  {
    id: 4,
    name: "Notifications System",
    description: "Real-time alerts for user interactions.",
  },
  {
    id: 5,
    name: "Media Management",
    description: "Automated media optimization for various platforms.",
  },
  {
    id: 6,
    name: "Content Moderation",
    description: "AI-driven moderation with manual review options.",
  },
];

const cutOffLicenseItems = [
  {
    id: 1,
    name: "Cut off License",
    description:
      "License the code at a specific version, then continue development independently.",
  },
  {
    id: 2,
    name: "Off-boarding support",
    description: "Receive 2 hours of free support during the transition.",
  },
  {
    id: 3,
    name: "Single-Use License",
    description:
      " License is valid only for the application initially acquired for, with no rights for other applications or redistribution.",
  },
];

function Page() {
  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [selectedCutOffLicenseItem, setSelectedCutOffLicenseItem] =
    React.useState(null);

  const handleFeatureClick = (id) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };

  const handleItemClick = (id) => {
    setSelectedCutOffLicenseItem(selectedCutOffLicenseItem === id ? null : id);
  };

  return (
    <>
      <main className="container mx-auto w-full px-4 flex flex-col gap-6">
        <div className="hidden xl:flex flex-col xl:px-32">
          <div className="flex flex-col gap-10 my-14">
            <div className="flex w-full justify-between items-center">
              <div className="flex grow flex-col gap-10 justify-center items-start">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <p className="text-white text-sm">Content Service V.1.0</p>
                  <h1 className="font-bold text-white text-4xl border-b border-slate-700 pb-4">
                    Java Spring Boot
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-end">
                    <p className="font-bold text-orange-600 text-6xl">$10</p>
                    <p className="text-2xl text-orange-600">/month</p>
                  </div>
                  <p className="text-white w-2/3">
                    * The price increases by $0.50 per minor release, capped at
                    $15 before the next major release. Each major release adds
                    $5 to the price (e.g., Version 2.0 is $15, Version 3.0 is
                    $20).
                  </p>
                </div>
                <a
                  href="https://listoli.gitbook.io/content-service-api"
                  target="_blank"
                  className="px-10 py-3 md:py-4 text-sm bg-orange-600 rounded-xl text-white font-bold hover:bg-orange-800 transition-all cursor-pointer"
                >
                  Signup to get Notified for Initial Release
                </a>
              </div>
              <div className="flex flex-row grow justify-end items-center">
                <div className="w-2/3 h-2/3">
                  <img src="/pricetag-01.png" alt="pricing tag" />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-6 ">
              <div className="flex flex-col w-1/4 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Content Management
                </h5>
                <p className="text-white pt-4">
                  Manage and publish private and public posts.
                </p>
              </div>
              <div className="flex flex-col w-1/4 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  User Engagement
                </h5>
                <p className="text-white pt-4">
                  Enable likes, comments, and reactions for interactive content.
                </p>
              </div>
              <div className="flex flex-col w-1/4 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Notifications System
                </h5>
                <p className="text-white pt-4">
                  Real-time alerts for user interactions.
                </p>
              </div>
              <div className="flex flex-col w-1/4 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Content Moderation
                </h5>
                <p className="text-white pt-4">
                  AI-driven moderation with manual review options.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 my-14">
            <div className="flex w-full justify-between items-center">
              <div className="flex grow flex-col gap-10 justify-center items-start">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h1 className="font-bold text-white text-4xl border-b border-slate-700 pb-4">
                    Cut off licence
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-end">
                    <p className="font-bold text-orange-600 text-6xl">$100</p>
                    <p className="text-2xl text-orange-600">/licence</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-white w-2/3 text-sm">
                      <span className="text-orange-600 font-bold text-base">
                        Pricing:
                      </span>{" "}
                      Increases by $10 per minor release, capped at $100 before
                      the next major release. Each major release adds $100
                      (e.g., Version 2.0 is $200, Version 3.0 is $300).
                    </p>
                    <p className="text-white w-2/3 text-sm">
                      <span className="text-orange-600 font-bold text-base">
                        Cut-Off License:
                      </span>{" "}
                      After acquiring the cut-off license, code access is
                      revoked, and future releases are unavailable. To access
                      newer releases, re-subscription is required, with no
                      guarantee of compatibility with your modified code.
                    </p>
                  </div>
                </div>
                <a
                  href="https://listoli.gitbook.io/content-service-api"
                  target="_blank"
                  className="px-10 py-3 md:py-4 text-sm bg-orange-600 rounded-xl text-white font-bold hover:bg-orange-800 transition-all cursor-pointer"
                >
                  Signup to get Notified for Initial Release
                </a>
              </div>
              <div className="flex flex-row grow justify-end items-center">
                <div className="w-2/3 h-2/3">
                  <img src="/features2-01.png" alt="pricing tag" />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-6 ">
              <div className="flex flex-col w-1/3 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Cut-Off License
                </h5>
                <p className="text-white pt-4">
                  License the code at a specific version, then continue
                  development independently.
                </p>
              </div>
              <div className="flex flex-col w-1/3 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Off-Boarding Support
                </h5>
                <p className="text-white pt-4">
                  Receive 2 hours of free support during the transition.
                </p>
              </div>
              <div className="flex flex-col w-1/3 rounded-xl border border-slate-800 px-6 py-4">
                <h5 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
                  Single-Use License
                </h5>
                <p className="text-white pt-4">
                  License is valid only for the application initially acquired
                  for, with no rights for other applications or redistribution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile version */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-12 justify-center items-center text-white my-10">
            <div className="w-full border border-slate-700 rounded-xl p-8 relative flex flex-col gap-4">
              <div className="absolute -top-5 rounded-full border border-slate-700 text-center px-4 py-2 bg-slate-950 left-1/2 -translate-x-1/2">
                <p className="text-white text-sm">Content Service V 1.0</p>
              </div>

              <h1 className="text-white text-center text-3xl font-bold py-2">
                Java Spring Boot
              </h1>

              {/* features */}
              <div className="flex flex-col justify-start items-start">
                <p className="font-bold text-white pb-2 border-b border-slate-800 w-full">
                  Features
                </p>

                {ApiFeatures.map((item) => {
                  return (
                    <div key={item.id} className=" mt-2 relative w-full">
                      <div
                        onClick={() => handleFeatureClick(item.id)}
                        className="flex flex-row gap-2 items-center"
                      >
                        <span className="text-orange-600">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                        <p className="text-white font-bold text-sm border-b border-dashed border-slate-500">
                          {item.name}
                        </p>
                      </div>

                      {selectedFeature === item.id && (
                        <div
                          onClick={() => setSelectedFeature(null)}
                          className="absolute w-full top-0 text-xs z-50 mt-6 bg-gray-400 text-slate-700 font-bold rounded-lg p-3"
                        >
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* pricing */}
              <h1 className="font-bold text-5xl text-orange-600 text-center my-2">
                $10<span className="text-base">/month</span>
              </h1>

              {/* button */}
              <a
                href="#"
                target="_blank"
                className="px-6 py-4 text-sm bg-orange-600 rounded-lg text-white text-center font-bold hover:bg-orange-800 transition-all cursor-pointer"
              >
                Signup to get Notified for Initial Release
              </a>

              <p className="font-bold text-xs text-white underline text-center">
                API Documentation
              </p>

              {/* Note */}
              <p className="text-sm mt-4">
                <span className="font-bold text-orange-600 text-sm">* </span>The
                price increases by $0.50 per minor release, capped at $15 before
                the next major release. Each major release adds $5 to the price
                (e.g., Version 2.0 is $15, Version 3.0 is $20).
              </p>
            </div>

            <div className="w-full border border-slate-700 rounded-xl p-8 relative flex flex-col gap-4">
              <div className="absolute -top-5 rounded-full border border-slate-700 text-center px-4 py-2 bg-slate-950 left-1/2 -translate-x-1/2">
                <p className="text-white text-sm">License Termination</p>
              </div>

              <h1 className="text-white text-center text-3xl font-bold py-2">
                Cut Off License
              </h1>

              {/* features */}
              <div className="flex flex-col justify-start items-start">
                <p className="font-bold text-white pb-2 border-b border-slate-800 w-full">
                  Features
                </p>

                {cutOffLicenseItems.map((item) => {
                  return (
                    <div key={item.id} className=" mt-2 relative w-full">
                      <div
                        onClick={() => handleItemClick(item.id)}
                        className="flex flex-row gap-2 items-center"
                      >
                        <span className="text-orange-600">
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                        <p className="text-white font-bold text-sm border-b border-dashed border-slate-500">
                          {item.name}
                        </p>
                      </div>

                      {selectedCutOffLicenseItem === item.id && (
                        <div
                          onClick={() => setSelectedCutOffLicenseItem(null)}
                          className="absolute w-full top-0 text-xs z-50 mt-6 bg-gray-400 text-slate-700 font-bold rounded-lg p-3"
                        >
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* pricing */}
              <h1 className="font-bold text-5xl text-orange-600 text-center my-2">
                $10<span className="text-base">/month</span>
              </h1>

              {/* button */}
              <a
                href="#"
                target="_blank"
                className="px-6 py-4 text-sm bg-orange-600 rounded-lg text-white text-center font-bold hover:bg-orange-800 transition-all cursor-pointer"
              >
                Signup to get Notified for Initial Release
              </a>

              <p className="font-bold text-sm text-white underline text-center">
                API Documentation
              </p>

              {/* Note */}
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-sm ">
                  <span className="font-bold text-orange-600 text-sm">
                    Pricing:{" "}
                  </span>{" "}
                  Increases by $10 per minor release, capped at $100 before the
                  next major release. Each major release adds $100 (e.g.,
                  Version 2.0 is $200, Version 3.0 is $300).
                </p>
                <p className="text-sm ">
                  <span className="font-bold text-orange-600 text-sm">
                    Cut-Off License:
                  </span>{" "}
                  After acquiring the cut-off license, code access is revoked,
                  and future releases are unavailable. To access newer releases,
                  re-subscription is required, with no guarantee of
                  compatibility with your modified code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
            <div className="w-full rounded-xl border border-slate-800 px-8 py-8 relative">
              <div className="absolute -top-5 rounded-full border border-slate-700 text-center px-4 py-2 bg-slate-950 left-1/2 -translate-x-1/2">
                <p className="text-white text-sm">Content Service V 1.0</p>
              </div>

              <h1 className="text-white text-center text-3xl font-bold py-2">
                Java Spring Boot
              </h1>

              <h1 className="font-bold text-5xl text-orange-600 text-center my-4">
                $10<span className="text-base">/month</span>
              </h1>

              <div className="flex flex-col justify-start items-start">
                <p className="font-bold text-lg text-white pb-2">Features</p>

                <div className="border-b border-slate-800 pb-6">
                  {ApiFeatures.map((item) => {
                    return (
                      <div key={item.id} className=" mt-2 relative w-full">
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-orange-600">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </span>
                          <p className="text-white font-bold text-sm">
                            {item.name}
                            {": "}
                            <span className="text-sm font-normal text-slate-400">
                              {item.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-slate-400 text-sm py-3">
                  <span className="font-bold text-orange-600 text-xl">* </span>
                  The price increases by $0.50 per minor release, capped at $15
                  before the next major release. Each major release adds $5 to
                  the price (e.g., Version 2.0 is $15, Version 3.0 is $20).
                </p>

                <div className="flex flex-col gap-2 justify-center items-center w-full mt-6">
                  <button className="px-6 py-4 text-sm bg-orange-600 rounded-lg w-full text-white text-center font-bold hover:bg-orange-800 transition-all cursor-pointer">
                    Signup to get Notified for Initial Release
                  </button>
                  <a href="#" className="text-xs underline text-slate-300">
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="my-10">
            <div className="w-full rounded-xl border border-slate-800 px-8 py-8 relative">
              <div className="absolute -top-5 rounded-full border border-slate-700 text-center px-4 py-2 bg-slate-950 left-1/2 -translate-x-1/2">
                <p className="text-white text-sm">License Termination</p>
              </div>

              <h1 className="text-white text-center text-3xl font-bold py-2">
                Cut off License
              </h1>

              <h1 className="font-bold text-5xl text-orange-600 text-center my-4">
                $100<span className="text-base">/License</span>
              </h1>

              <div className="flex flex-col justify-start items-start">
                <p className="font-bold text-lg text-white pb-2">
                  Considerations
                </p>

                <div className="border-b border-slate-800 pb-6">
                  {cutOffLicenseItems.map((item) => {
                    return (
                      <div key={item.id} className=" mt-2 relative w-full">
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-orange-600">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </span>
                          <p className="text-white font-bold text-sm">
                            {item.name}
                            {": "}
                            <span className="text-sm font-normal text-slate-400">
                              {item.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-slate-400 py-3">
                  <span className="font-bold text-orange-600 text-sm">
                    Pricing:{" "}
                  </span>{" "}
                  Increases by $10 per minor release, capped at $100 before the
                  next major release. Each major release adds $100 (e.g.,
                  Version 2.0 is $200, Version 3.0 is $300).
                </p>
                <p className="text-slate-400 py-3">
                  <span className="font-bold text-orange-600 text-sm">
                    Cut-Off License:
                  </span>{" "}
                  After acquiring the cut-off license, code access is revoked,
                  and future releases are unavailable. To access newer releases,
                  re-subscription is required, with no guarantee of
                  compatibility with your modified code.
                </p>

                <div className="flex flex-col gap-2 justify-center items-center w-full mt-6">
                  <button className="px-6 py-4 text-sm bg-orange-600 rounded-lg w-full text-white text-center font-bold hover:bg-orange-800 transition-all cursor-pointer">
                    Signup to get Notified for Initial Release
                  </button>
                  <a href="#" className="text-xs underline text-slate-300">
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Page;
