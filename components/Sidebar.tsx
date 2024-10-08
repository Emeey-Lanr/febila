"use client";
import { useContext, useEffect, useState } from "react";
import { AppContextAPI } from "@/context api/context";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const { openCloseSideBarBtn, sideBarState } = useContext(AppContextAPI);
  const pathname = usePathname();
  const router = useRouter();
  const [serviceState, setServiceState] = useState<boolean>(false);

  const routeToNextPage = (pageUrl: string) => {
    openCloseSideBarBtn(false);
    router.push(`/${pageUrl}`);
  };
  return (
    <div
      className={`md:hidden ${
        sideBarState
          ? "opacity-[1] visible translate-x-0 block"
          : "translate-x-[-1rem] opacity-0 invisible hidden"
      } transition-all ease-out  w-full h-full fixed  top-0 bg-grey-50 overflow-y-hidden`}
    >
      <svg
        className="absolute left-0 top-[40px]"
        width="60"
        height="148"
        viewBox="0 0 60 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cy="74" rx="60" ry="74" fill="#D1FE51" />
      </svg>
      <svg
        className="absolute left-0 top-[120px]"
        width="76"
        height="148"
        viewBox="0 0 76 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="16" cy="74" rx="60" ry="74" fill="#BFFA18" />
      </svg>

      <div className="w-full pt-[32px] px-[32px] relative">
        <div className="w-full flex justify-end relative">
          <button
            className="py-[8px] px-[8px] border border-grey-300"
            onClick={() => openCloseSideBarBtn(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="#2E3830"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <div className=" font-hel relative">
          <ul>
            <li className="py-[32px]">
              <button
                onClick={() => routeToNextPage("")}
                className={`${
                  pathname == "/" ? "font-bold" : "font-normal"
                }  text-base text-grey-800 `}
              >
                Home
              </button>
            </li>
            <li className="pb-[32px]">
              <button
                onClick={() => routeToNextPage("foundation")}
                className={`${
                  pathname == "/foundation" ? "font-bold" : "font-normal"
                }  text-base text-grey-800 `}
              >
                Foundation
              </button>
            </li>
            <li className=" group/services  pb-[32px]">
              <button
                onClick={() => setServiceState(!serviceState)}
                className="w-full flex items-center justify-between text-grey-800"
              >
                <span>Services</span>{" "}
                <span>
                  <svg
                    className={`${
                      serviceState ? "rotate-[0deg]" : "rotate-[-180deg]"
                    }`}
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 9L9 0.999999L0.999998 9"
                      stroke="#2E3830"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className={`${
                  serviceState
                    ? "block opacity-[1] visible translate-x-0"
                    : "invisible opacity-0 hidden translate-x-[-1rem]"
                }  transition-all ease-out   py-[16px] pl-[16px] text-grey-700`}
              >
                <li className="pb-[16px] text-sm">
                  <button
                    onClick={() => routeToNextPage("real-estate")}
                    className="flex w-full items-center justify-between"
                  >
                    <span>Real-estate</span>
                    <span>
                      <svg
                        className="rotate-90"
                        width="14"
                        height="8"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 9L9 0.999999L0.999998 9"
                          stroke="#2E3830"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="pb-[16px] text-sm ">
                  <button className="flex w-full items-center justify-between">
                    <span>Fashion</span>
                    <span>
                      <svg
                        className="rotate-90"
                        width="14"
                        height="8"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 9L9 0.999999L0.999998 9"
                          stroke="#2E3830"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="pb-[16px] text-sm">
                  <button className="flex w-full items-center justify-between">
                    <span>Entertainment</span>
                    <span>
                      <svg
                        className="rotate-90"
                        width="14"
                        height="8"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 9L9 0.999999L0.999998 9"
                          stroke="#2E3830"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="text-sm">
                  <button
                    onClick={() => routeToNextPage("publishing")}
                    className="flex w-full items-center justify-between"
                  >
                    <span>Publishing</span>
                    <span>
                      <svg
                        className="rotate-90"
                        width="14"
                        height="8"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 9L9 0.999999L0.999998 9"
                          stroke="#2E3830"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="pb-[32px]">
              <button
                onClick={() => routeToNextPage("about-us")}
                className="text-grey-800"
              >
                About us
              </button>
            </li>
            <li className="">
              <button
                onClick={() => routeToNextPage("contact-us")}
                className="text-grey-800"
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute z-40 bottom-[0] px-[32px]">
        <div className="flex items-center">
          <span>
            <svg
              className="w-[24px] h-[24px]"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 22L6 14M26 22L17.5777 5.15542C16.1036 2.20722 11.8964 2.20722 10.4223 5.15542L6 14M6 14H14"
                stroke="#1CE34A"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="text-2xl font-gil font-semibold text-grey-900 px-[8px]">
            Febila
          </span>
        </div>
        {/* copy right */}
        <div className="py-[8px]">
          <p className="flex items-center text-xs text-grey-700 font-helvetica">
            copyright{" "}
            <span className="px-[4px]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="5.5" stroke="#2E3830" />
                <path
                  d="M7.5 3.40135C7.05874 3.14609 6.54643 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9C6.54643 9 7.05874 8.85391 7.5 8.59865"
                  stroke="#2E3830"
                  stroke-width="0.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            2024. Febila.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
