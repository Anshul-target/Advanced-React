import avatar from "../../../assets/default-avatar.svg";
import React from "react";
export function Person({ nickName = "shake and Bake", name, images }) {
  // const img = images[0].small.url; Give an error
  //   solution
  //   const img = images && images[0] && images[0].small && images[0].small.url;
  //   //OPTIONAL CHAINING

  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt="" style={{ width: "51px" }} />
      <h4>{name}</h4>
      <p>Nickname:{nickName}</p>
    </div>
  );
}
