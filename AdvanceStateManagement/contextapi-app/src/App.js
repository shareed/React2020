// import React, { useState } from "react";

// import FamilyTree from "./components/propdrilling/FamilyTree";
// import "./App.scss";

// import { data } from "./data";
// //All the data lives on App
// export default function App() {
//   const [families] = useState(data);
//   const [activeFamily, setActiveFamily] = useState(families[0]);

//   return (
//     <div className="App">
//       <section className="header">
//         <h1>Family Trees</h1>
//         {families.map(d => (
//           <button
//             className={`family-button ${d.familyName ===
//               activeFamily.familyName && "active"}`}
//             key={d.familyName}
//             onClick={() => setActiveFamily(d)}
//           >
//             {d.familyName}
//           </button>
//         ))}
//       </section>
//       {activeFamily && <FamilyTree family={activeFamily} />}
//     </div>
//   );
// }



//CONTEXT API
import React, { useState } from "react";
import { FamilyContext } from "./contexts";

import FamilyTree from "./components/contextapi/FamilyTree";
import "./App.scss";

import { data } from "./data";

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);
  console.log({ FamilyContext });

  return (
    <div className="App">
      <FamilyContext.Provider value={activeFamily}>
        <section className="header">
          <h1>Family Trees</h1>
          {families.map(d => (
            <button
              className={`family-button ${d.familyName ===
                activeFamily.familyName && "active"}`}
              key={d.familyName}
              onClick={() => setActiveFamily(d)}
            >
              {d.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}
