import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { isLoading, isError, isNotFound, users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
      {isLoading && <p>loading...</p>}
      {isError && (
        <p className="error">
          Произошла ошибка! Обновите страницу/попробуйте отправить запрос позже
        </p>
      )}
      {isNotFound && <p>Пользователей по данному запросу не найдено</p>}
    </div>
  );
}
