import React from "react";
import resource from "../data.json";
import Sections from "./Sections";
import giovannipicture from "../images/giovanni-picture.jpg";

export default function Home() {
  console.log(resource);
  return (
    <div>
      <div>
        <Sections
          title={resource.about.title}
          description={resource.about.description}
          img={giovannipicture}
        />
      </div>
      <div>
        {resource.sections.map((elem) => {
          const { title, description, content, img } = elem;
          return (
            <Sections
              img={img}
              title={title}
              description={description}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}
