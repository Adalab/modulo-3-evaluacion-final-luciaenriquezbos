import React from "react";
import User from "./CharacterCar";

const CharacterList = (props) => {
  const userElement = props.users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <section>
      <ul className="class__list_ul">{userElement}</ul>
    </section>
  );
};
export default CharacterList;