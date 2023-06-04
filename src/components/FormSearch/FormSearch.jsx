import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const FormSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [, setSearchParams] = useSearchParams(); // 💙💛 читать/перезаписывать строку запроса

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchInput === '') {
      console.warn('Add movie search');
      return Notiflix.Notify.warning('Add movie search');
    }

    setSearchParams({}); // очищаем строку запроса от search

    setSearchParams({ query: searchInput });
    setSearchInput('');
  };

  const updateQueryString = evt => {
    setSearchInput(evt.target.value); // записываем в State данные input
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>

          <input
            type="text"
            name="search"
            value={searchInput} // получаем из State
            onChange={updateQueryString}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>
    </>
  );
};

export default FormSearch;
