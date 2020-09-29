import React from "react";
import Card from "./Card";

const CardsContainer = (props) => {
    console.log(props)
  return (
      
    <div className="cards-container">
      {props.err? <div className="msg">{props.err}</div>:<>{props.res ? (
        props.res.hits.map((el) => {
            const arr= el.recipe.ingredientLines;
          return <Card imageSrc={el.recipe.image} name={el.recipe.label} ingredients={arr} />;
        })
      ) : (
        <div className="msg">search for receipes please</div>
      )}</>}
    </div>
  );
};

export default CardsContainer;
