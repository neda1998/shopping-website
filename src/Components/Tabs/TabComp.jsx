import { useState } from "react";
import style from "../../styles/Tabs.module.css";
import TabItem from "./TabItem";
import line from "../../assets/svg/oribLine.svg";
import backpack from "../../assets/images/backpack.png";
import suit from "../../assets/images/suit.png";
import shirt from "../../assets/images/shirt.png";
import palto from "../../assets/images/palto.png";
import blanket from "../../assets/images/blanket.png";
import boot from "../../assets/images/boot.png";
import lineColor from "../../assets/svg/lineColor.svg";
import circleColor from "../../assets/svg/circleColor.svg";
import circle from "../../assets/svg/circle.svg";
import snow from "../../assets/svg/snow.svg";
import zigzag from "../../assets/svg/zigzag.svg";

function TabComp() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={style.headTabs}>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 16V22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 19H9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Woman</span>
          </div>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21.5 2.5L16 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 2.5H21.5V9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Man</span>
          </div>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 11.0001C13.2869 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2869 6.34009 12 6.34009C10.7132 6.34009 9.67004 7.38322 9.67004 8.67004C9.67004 9.95687 10.7132 11.0001 12 11.0001Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Kids</span>
          </div>
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1801 18C19.5801 18 20.1801 16.65 20.1801 15V9C20.1801 7.35 19.5801 6 17.1801 6C14.7801 6 14.1801 7.35 14.1801 9V15C14.1801 16.65 14.7801 18 17.1801 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.81995 18C4.41995 18 3.81995 16.65 3.81995 15V9C3.81995 7.35 4.41995 6 6.81995 6C9.21995 6 9.81995 7.35 9.81995 9V15C9.81995 16.65 9.21995 18 6.81995 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.81995 12H14.1799"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.5 14.5V9.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1.5 14.5V9.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Sports</span>
          </div>
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.5 22H17.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.5 14H14.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span>Beauty</span>
          </div>
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          <div className="flex text-tabs">
            <button>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7998 3.40005L7.19982 7.70005C7.09982 7.90005 6.99982 8.20005 6.89982 8.40005L5.19982 17C5.09982 17.6 5.39982 18.3 5.89982 18.6L11.1998 21.6C11.5998 21.8 12.2998 21.8 12.6998 21.6L17.9998 18.6C18.4998 18.3 18.7998 17.6 18.6998 17L16.9998 8.40005C16.9998 8.20005 16.7998 7.90005 16.6998 7.70005L13.0998 3.40005C12.4998 2.60005 11.4998 2.60005 10.7998 3.40005Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.8002 8.5L12.5002 20.7C12.3002 21.1 11.7002 21.1 11.6002 20.7L7.2002 8.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <span className={style.textTabsComp}>Jewelry</span>
          </div>
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="192"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="130"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="192"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="155"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="180"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="219"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="392"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="130"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="192"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circle}
            />
            <TabItem
              numberProduct="155"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="180"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="219"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="210"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="530"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="402"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circle}
            />
            <TabItem
              numberProduct="205"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="100"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="910"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="92"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="600"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="120"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circle}
            />
            <TabItem
              numberProduct="255"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="810"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="419"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="100"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="190"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="992"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circle}
            />
            <TabItem
              numberProduct="355"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="480"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="719"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4`}>
            <TabItem
              numberProduct="530"
              title="backpack"
              imgProduct={backpack}
              imgLines={line}
            />
            <TabItem
              numberProduct="540"
              title="Shoes"
              imgProduct={boot}
              imgLines={zigzag}
            />
            <TabItem
              numberProduct="430"
              title="Recycled Blanket"
              imgProduct={blanket}
              imgLines={circle}
            />
            <TabItem
              numberProduct="120"
              title="Cycling Short"
              imgProduct={suit}
              imgLines={snow}
            />
            <TabItem
              numberProduct="220"
              title="Cycling Jersey"
              imgProduct={shirt}
              imgLines={circleColor}
            />
            <TabItem
              numberProduct="320"
              title="Car Coat"
              imgProduct={palto}
              imgLines={lineColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabComp;
