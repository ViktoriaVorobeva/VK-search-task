import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import "./styles.css";
import { inputHandler } from "../../utils/api";
import { SearchProps } from "../../types";
import useDebounce from "../../utils/useDebounce";
import { DELAY } from "../../utils/constants";

export const SearchForm: React.FC<SearchProps> = ({
  setUsers,
  setLoading,
  setError,
  setNotFound,
}) => {
  const [form, setValue] = useState("");

  const debouncedSearchValue = useDebounce(form, DELAY);

  useEffect(() => {
    if (form.length > 0) {
      setLoading(true);
      inputHandler(debouncedSearchValue)
        .then((users) => {
          if (users.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          setUsers(users);
          setError(false);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    } else {
      setUsers([]);
    }
  }, [form, debouncedSearchValue]);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="searchForm">
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={form} onChange={onChange} />
      </form>
    </div>
  );
};
