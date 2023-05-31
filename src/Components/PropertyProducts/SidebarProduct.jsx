import React from 'react';
import black from "../../assets/images/black.jpg";
import blue from "../../assets/images/blue.jpg";
import blueLight from "../../assets/images/blueLight.jpg";
import blueDark from "../../assets/images/blueDark.jpg";
import brown from "../../assets/images/brown.jpg";

function SidebarProduct() {
  return (
    <div>
      <div>
        <div>$108.00</div>
        <div>
          <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          </button>
          <p>4.9</p>
          <p>.</p>
          <p>142 reviews</p>
        </div>
        <div>
          <p>Color: Black</p>
        </div>
        <div>
          <img src={black} alt="img" />
          <img src={blue} alt="img" />
          <img src={blueDark} alt="img" />
          <img src={blueLight} alt="img" />
          <img src={brown} alt="img" />
        </div>
        <div>
          <div>
            <p>Size: XS</p>
          </div>
          <div>
            <p>See sizing chat</p>
          </div>
          <div>
            <button>
              XS
            </button>
            <button>
              S
            </button>
            <button>
              M
            </button>
            <button>
              L
            </button>
          </div>
        </div>
        <div>
          <button>
            XL
          </button>
          <button>2XL</button>
          <button>3XL</button>
        </div>
        <div>
          <div>
            <div>-</div>
            <div>
              <p>1</p>
            </div>
            <div>+</div>
          </div>
          <div>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
            </svg>
            </button>
            <h6>Add to cart</h6>
          </div>
        </div>
        <div>
          <div>
            <span>$108.00 * 1</span>
          </div>
          <div>
            <span>$108.00</span>
          </div>
        </div>
        <div>
          <div>
            <span>Tax estimate</span>
          </div>
          <div>
            <span>$0</span>
          </div>
        </div>
        <div>
          <div>
            <h6>Total</h6>
          </div>
          <div>
            <h6>$108.00</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarProduct