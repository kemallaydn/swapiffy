import React from "react";
import Provider from "./src/context/index";
import AppNavigator from "./src/navigations";
function App(){
  return(
    <Provider>
      <AppNavigator/>
    </Provider>
  )
}
export default App;