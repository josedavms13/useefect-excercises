import {IScreen} from "../screen.types";
import "../screen.css"
import {useEffect, useState} from "react";
import {alternateCapitalize} from "../../../utils/stringUtils/capitalizeString";

export function Screen2({input}:IScreen) {

    const [screen2Text, setScreen2Text] = useState("");

    useEffect(()=> {
        setScreen2Text(alternateCapitalize(input, true))
    },[input])

    return (
        <div className={"screen"}>{screen2Text}</div>
    )
}