import React, { useState } from 'react';
import style from "../../styles/Accordion.module.css";

function Accordion({ Description }) {
    const [openAccordion, setOpenAccordion] = useState(false);
    return (
        <div>
            <div className={style.Accordion} onClick={() => setOpenAccordion(!openAccordion)}>
                <h6>{Description}</h6>
                {openAccordion ? (<button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                </button>) :
                    (<button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                    </button>)}
            </div>
            {openAccordion && (
                <div>
                    <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.</p>
                </div>
            )}
        </div>
    )
}

export default Accordion