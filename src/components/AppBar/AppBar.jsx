import { Header, Navigation, Navlink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Navigation>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/movies">Movies</Navlink>
      </Navigation>
    </Header>
  );
};
