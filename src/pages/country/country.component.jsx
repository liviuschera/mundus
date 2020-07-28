import React from "react";

export default function Country({ ...params }) {
   const country = params.location.state.country;
   console.log(country);
   return <div>details</div>
}
