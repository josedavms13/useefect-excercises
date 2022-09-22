import {IScreen} from "../screen.types";
import "../screen.css"

export function Screen1({input}:IScreen) {


    return (
        <div className={"screen"}>{input}</div>
    )
}