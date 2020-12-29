import React, { useState } from "react"
import { extractSliderItemArr } from "./model"
import { Slider, SliderItemArr } from "./Slider"

function switchItems(setItems: React.Dispatch<React.SetStateAction<SliderItemArr>>) {
    setItems(extractSliderItemArr())
}

export function App() {
    const [items, setItems] = useState<SliderItemArr>(extractSliderItemArr())
    const [switchClass, setSwitchClassName] = useState<string>("trans")
    const updateItems = () => switchItems(setItems)
    return ( 
        <React.Fragment>
            <div className={"opBtn " + switchClass} onClick={updateItems} onMouseLeave={() => {setSwitchClassName("trans")}} onMouseEnter={() => {setSwitchClassName("")}}>
                换一换
            </div>
            <Slider {...items} />
        </React.Fragment>
    )
}