import { getApiKey } from 'redux/authSlice';
import { useDispatch } from 'react-redux';

export const UserPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const apiKey = e.target.elements.token.value;
    dispatch(getApiKey(apiKey));
    e.target.reset();
  };

  return (
    <div>
      <p>
        Приветствуем в приложении. Чтоб получить польше возможностей рекомендуем
        авторизоваться.
      </p>
      <p>
        Введите Ключ доступа к API (v4 auth). Вы можете найти его в
        <a href="https://www.themoviedb.org/settings/api"> личном кабинете</a>{' '}
        на сайте The Movie DB.
      </p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="token" placeholder="Enter the key" />
        <button type="submit">Enter</button>
      </form>
      <p>
        Усли у вас еще нет ключа, вы можете получить его,{' '}
        <a href="https://www.themoviedb.org/signup">зарегистрировавшись</a> на
        сайте The Movie DB.
      </p>
    </div>
  );
};
