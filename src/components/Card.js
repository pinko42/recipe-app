import React from "react";
import { Card } from "antd";
import { Collapse } from "antd";

const { Panel } = Collapse;

const { Meta } = Card;

function callback(key) {
  console.log(key);
}



const Cards = (props) => {
  return (
    <div className="cards">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            style={{ borderRadius: "50%" }}
            alt="example"
            src={props.imageSrc}
          />
        }
      >
        <Meta title={props.name} style={{ margin: 10 }} />
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="ingredients" key="2">
            {props.ingredients.map((el) => {
              return <p>{el}</p>;
            })}
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default Cards;
