import React from "react";
import partnerData from "Data/partnerData.json"
import Cards from "./Card";
//import { useStore } from "zustand";

export default function Partner() {
  //const { count, increaseCount, setThree } = useStore();
  return (
    <div>
      <Cards partnerData={partnerData} />
      <button className={styles.button}>다음으로</button>
    </div>
  )
}