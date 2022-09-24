import { getApiKey } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { setRequestToken } from 'services/authAPI';
import { getRequestTokenThunk } from 'redux/authThunk';
import { useNavigate } from 'react-router-dom';

export const UserPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFormSubmit = async e => {
    e.preventDefault();
    const apiKey = e.target.elements.token.value;
    dispatch(getApiKey(apiKey));
    setRequestToken(apiKey);
    e.target.reset();
    dispatch(getRequestTokenThunk()).then(({ payload }) => {
      console.log(payload);
      window.open(
        `https://www.themoviedb.org/auth/access?request_token=${payload}`
      );
    });
  };

  return (
    <div>
      <p>
        Приветствуем в приложении. Чтоб получить больше возможностей рекомендуем
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
