import axios from "axios";

import { dentistsInstance } from "./instanceDentists";

export const getDentists = ()=>{
    const dentists = dentistsInstance.get();
    return dentists
}