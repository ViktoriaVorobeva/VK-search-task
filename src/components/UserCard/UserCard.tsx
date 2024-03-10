import { User } from "../../types";
import "./style.css";

export const UserCard: React.FC<User> = ({
  image,
  firstName,
  lastName,
  address,
}) => {
  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
};
