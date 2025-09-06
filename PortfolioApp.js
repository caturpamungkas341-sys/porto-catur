
import React from "react";
import { Group } from "./Group";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { PropertyGroup } from "./PropertyGroup";
import { SocialMediaDesain } from "./SocialMediaDesain";
import { Component } from "./Component";
import group4 from "./group-4.png";
import group5 from "./group-5.png";
import image from "./image.svg";
import polygon1 from "./polygon-1.svg";
import frame2 from "./frame-2.svg";
import frame3 from "./frame-3.svg";

export const PortfolioApp = () => {
  return (
    <div className="bg-white w-screen min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[100px] bg-white shadow-md z-50 flex items-center justify-between px-8">
        <div>
          <h1 className="text-[#3b2dff] font-black text-xl leading-none">
            PORTOFOLIO
          </h1>
          <p className="text-[#3b2dff] text-xs font-light">Desain Grafis</p>
        </div>
        <div className="flex space-x-6">
          <SocialMediaDesain property1="default" />
          <SocialMediaDesain property1="default" text="Desain Logo" />
          <SocialMediaDesain property1="default" text="Event Branding" />
          <SocialMediaDesain property1="default" text="Kontak saya" />
        </div>
      </div>

      {/* Wrapper halaman dengan padding untuk navbar */}
      <div className="pt-[100px] w-full flex flex-col items-center space-y-20">
        {/* SECTION 1: Homepage */}
        <section className="relative w-[1512px] h-[1728px]">
          <div className="absolute top-[171px] left-[30px] w-[1452px] h-[414px] bg-[url(/subtract.svg)] bg-cover">
            <img src={group4} alt="Group" className="absolute inset-0" />
            <div className="absolute top-[276px] left-[111px]">
              <p className="text-[#3f34d8] font-light text-[31.3px]">
                Desain Grafis
              </p>
              <h2 className="text-[#3f34d8] font-black text-[75.6px]">
                PORTOFOLIO
              </h2>
            </div>
          </div>

          <div className="absolute top-[1004px] left-8 w-[1448px] h-[675px]">
            <img
              src={image}
              alt="Subtract"
              className="absolute top-[37px] left-0 w-full h-[638px]"
            />
            <img
              src={polygon1}
              alt="Polygon"
              className="absolute top-0 left-[687px] w-[74px] h-[74px]"
            />
            <img
              src={group5}
              alt="Group"
              className="absolute top-0 left-0 w-full h-full"
            />
            <Group
              className="absolute left-[583px] top-[156px]"
              overlapGroupClassName="bg-[url(/24-2-3.png)]"
              property1="default"
            />
            <PropertyDefaultWrapper
              className="absolute left-[930px] top-[158px]"
              maskGroup="mask-group-3.png"
              property1="default"
            />
            <PropertyGroup
              className="absolute left-[237px] top-[158px]"
              maskGroup="mask-group-4.png"
            />
          </div>

          <p className="absolute top-[718px] left-[766px] w-[655px] text-justify text-[15.9px] leading-normal">
            I am a final-year student in the Visual Communication Design program
            at Satya Wacana Christian University (UKSW), with experience in
            organizational involvement, leadership, as well as work in design
            and project management. I am accustomed to working in teams, have
            strong communication skills, and have proven myself capable of
            managing events and cross-functional teams. To me, design is a form
            of visual communication that must be both functional and aesthetic...
          </p>
        </section>

        {/* SECTION 2: Logo */}
        <section className="relative w-[1512px] h-[982px]">
          <img
            src={frame2}
            alt="Logo Design"
            className="absolute inset-0 w-full h-full"
          />
        </section>

        {/* SECTION 3: Event Branding */}
        <section className="relative w-[1512px] h-[982px]">
          <img
            src={frame3}
            alt="Event Branding"
            className="absolute inset-0 w-full h-full"
          />
        </section>

        {/* SECTION 4: Kontak */}
        <section className="relative w-[1512px] h-[700px] bg-[url(/group-14.png)] bg-cover flex justify-end items-start p-8">
          <div className="relative w-[293px] h-[251px] bg-[#3e33cd82] rounded-[14px]">
            <Component
              className="absolute left-2.5 top-[37px]"
              href="https://wa.link/i15rt0"
              overlapGroupClassName="!text-center !left-[98px]"
              property1="default"
              text="Whatsapp"
            />
            <div className="absolute top-[97px] left-2.5 w-[273px] h-[45px]">
              <a
                href="https://www.instagram.com/kaum.visual/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-[#3f34d8] rounded-[22.5px]"
              />
              <p className="absolute top-[11px] left-[99px] text-white text-[15.9px]">
                Instagram
              </p>
            </div>
            <div className="absolute top-[157px] left-2.5 w-[273px] h-[45px]">
              <a
                href="mailto:caturpamungkas341@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-[#3f34d8] rounded-[22.5px]"
              />
              <p className="absolute top-[11px] left-[116px] text-white text-[15.9px]">
                Email
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
