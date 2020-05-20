import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createcontent(content)
{
   return(
     <Entry
        key={content.id}
        pic={content.emoji}
        title={content.name}
        description={content.meaning}
     />
   );
}

function App()
{
  return(
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createcontent)}
      </dl>
    </div>
  );

}
export default App;



