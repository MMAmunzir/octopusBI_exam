import { useNavigate } from "react-router-dom";

const ProductCard = ({ details }) => {
  const navigate = useNavigate();

  const id = details.id;

  function handleClick() {
    navigate(`/product/${id}`);
  }

  return (
    <div
      onClick={handleClick}
      className=" w-full max-w-60 rounded-2xl bg-[#DEDEDE] cursor-pointer"
    >
      <img src={details.img} className="rounded-2xl" />
      <div className="pl-2">
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <p>Price:$ {details.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
