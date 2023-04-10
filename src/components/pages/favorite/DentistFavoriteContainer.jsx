import React, { useContext } from "react";
import DentistFavorite from "./DentistFavorite";
import { ContextDentists } from "../../../context/ContextUsers";

const DentistFavoriteContainer = () => {
  const { state, dispatch } = useContext(ContextDentists);
  return (
    <div>
      <DentistFavorite
        darkMode={state.isDark}
        favs={state.favs}
        dispatch ={dispatch}
      />
    </div>
  );
};

export default DentistFavoriteContainer;
