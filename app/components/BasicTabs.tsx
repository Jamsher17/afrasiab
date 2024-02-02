"use client";
import { Tab } from "@headlessui/react";
import Markdown from "react-markdown";
import { Gallery } from "react-grid-gallery";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface BasicTabsProps {
  tabs: {
    label: string;
    value: string;
    desc: string | [];
  }[];
}

export default function BasicTabs({ tabs }: BasicTabsProps) {
  return (
    <>
      <Tab.Group>
        <Tab.List className="mt-4 flex flex-col xl:flex-row rounded-xl gap-1 xl:justify-evenly">
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              className={({ selected }) =>
                classNames(
                  "flex w-full xl:h-14 rounded-lg py-3 px-4 text-sm xl:text-[1.25rem] font-medium leading-5 shadow-md",
                  "ring-white/60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2",
                  "items-center justify-center whitespace-nowrap",
                  selected
                    ? "bg-yellow text-white"
                    : "bg-white text-blue-100 hover:bg-darkBlue hover:text-white border"
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel
              key={tab.value}
              className="font-medium text-sm xl:text-[1.25rem] text-center py-4 xl:px-6 rounded-xl my-4 h-full w-full whitespace-pre-line"
            >
              {typeof tab.desc == "string" && <Markdown children={tab.desc} />}
              {typeof tab.desc == "object" && <Gallery images={tab.desc} />}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
