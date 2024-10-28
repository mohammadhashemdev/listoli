"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function CutOffLicenseCard({ data }) {
  const [selectedCutOffLicenseItem, setSelectedCutOffLicenseItem] =
    React.useState(null);

  const handleItemClick = (id) => {
    setSelectedCutOffLicenseItem(selectedCutOffLicenseItem === id ? null : id);
  };

  return (
    <>
      {/* Mobile card */}
      <div className="md:hidden block">
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
              Considerations
            </p>

            {data.map((item) => {
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

          <a
            href="https://listoli.gitbook.io/content-service-api"
            target="_blank"
            className="font-bold text-xs text-white underline text-center"
          >
            API Documentation
          </a>

          {/* Note */}
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-sm ">
              <span className="font-bold text-orange-600 text-sm">
                Pricing:{" "}
              </span>{" "}
              Increases by $10 per minor release, capped at $100 before the next
              major release. Each major release adds $100 (e.g., Version 2.0 is
              $200, Version 3.0 is $300).
            </p>
            <p className="text-sm ">
              <span className="font-bold text-orange-600 text-sm">
                Cut-Off License:
              </span>{" "}
              After acquiring the cut-off license, code access is revoked, and
              future releases are unavailable. To access newer releases,
              re-subscription is required, with no guarantee of compatibility
              with your modified code.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet card */}
      <div className="hidden md:block xl:hidden">
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
            <p className="font-bold text-lg text-white pb-2">Considerations</p>

            <div className="border-b border-slate-800 pb-6">
              {data.map((item) => {
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
              Increases by $10 per minor release, capped at $100 before the next
              major release. Each major release adds $100 (e.g., Version 2.0 is
              $200, Version 3.0 is $300).
            </p>
            <p className="text-slate-400 py-3">
              <span className="font-bold text-orange-600 text-sm">
                Cut-Off License:
              </span>{" "}
              After acquiring the cut-off license, code access is revoked, and
              future releases are unavailable. To access newer releases,
              re-subscription is required, with no guarantee of compatibility
              with your modified code.
            </p>

            <div className="flex flex-col gap-2 justify-center items-center w-full mt-6">
              <button className="px-6 py-4 text-sm bg-orange-600 rounded-lg w-full text-white text-center font-bold hover:bg-orange-800 transition-all cursor-pointer">
                Signup to get Notified for Initial Release
              </button>
              <a
                href="https://listoli.gitbook.io/content-service-api"
                target="_blank"
                className="text-xs underline text-slate-300"
              >
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
