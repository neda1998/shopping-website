import React from "react";
import style from "../../styles/Register.module.css";
import register from "../../assets/images/register.png";

function Register() {
  return (
    <div className={`md:px-20 px-10`}>
      <div className={` grid lg:grid-cols-2 grid-cols-1 gap-24 ${style.register}`}>
        <div>
          <h1 className="text-[25px] sm:text-[35px] md:text-[40px]">Don't miss out on special offers</h1>
          <p>
            Register to receive news about the latest, savings combos, discount
            codes...
          </p>
          <div className={style.number}>
            <div>
              <button>01</button>
              <span>Saving combos</span>
            </div>
            <div>
              <button>02</button>
              <span>Freeship</span>
            </div>
            <div>
              <button>03</button>
              <span>Permium magazines</span>
            </div>
          </div>
          <form className={style.inputRegister}>
            <input type="email" placeholder="Enter your email" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className={style.registerImg}>
          <img src={register} alt="register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
