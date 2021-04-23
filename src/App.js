import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import Nav from "./components/Nav/Nav";
import { routes } from "./routes";
import React, { useState } from "react";

import { I18nProvider, LOCALES } from "./components/i18n";
import translate from "./components/i18n/translate";

export default function App() {
  const localstorage = window.localStorage.getItem("language");

  const localLan =
    localstorage === "english"
      ? LOCALES.ENGLISH
      : localstorage === "french"
      ? LOCALES.FRENCH
      : LOCALES.GERMAN;

  // const setlanguage = () => {
  //   setLocale()
  // };
  const [locale, setLocale] = useState(localLan);
  // const [language, setLanguage] = React.useState(ENGLISH);

  return (
    <I18nProvider locale={locale}>
      <Router>
        <div className="App">
          {console.log(localstorage)}
          {/* {translate("hello")} */}
          <Nav />
          {/* {localStorage.getItem("userKey") === null ? "" : <Nav />} */}
          <Switch>
            {routes.map((prop) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={prop.path}
                />
              );
            })}

            <Route exact path="/">
              <Redirect to="/Dashboard/Application" />
            </Route>
            <Redirect to="/NotFound" />
          </Switch>
        </div>
      </Router>
    </I18nProvider>
  );
}

// <Router>
//   <div className="App">
//     {localStorage.getItem("userKey") === null ? (
//       <>
//         <Switch>
//           <Route path="/" exact component={Login} />
//           <Route path="/Registration" exact component={Registration} />
//         </Switch>
//       </>
//     ) : (
//       <>
//         <Nav />
//         <Switch>
//           {routes.map((prop) => {
//             return (
//               <Route
//                 path={prop.layout + prop.path}
//                 component={prop.component}
//                 key={prop.path}
//               />
//             );
//           })}
//         </Switch>
//       </>
//     )}
//   </div>
// </Router>;
