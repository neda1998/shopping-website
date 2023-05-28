import React from 'react'
import Accordion from './Accordion';
import style from "../../styles/Accordion.module.css"

function Accordions() {
  return (
    <div className={style.accordionPage}>
    <Accordion Description="Description"/>
    <Accordion Description="Fabric + Care"/>
    <Accordion Description="How it Fits"/>
    <Accordion Description="FAQ"/>
    </div>
  )
}

export default Accordions