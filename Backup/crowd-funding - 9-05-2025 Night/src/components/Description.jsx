import { useParams } from "react-router-dom";
import { serviceData } from "./Home";

export function Description() {
 

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} width="100%" />
      <p>{service.fullDescription}</p>
    </div>
  );
}