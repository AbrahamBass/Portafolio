import styled from 'styled-components';

const Navegacion = styled.div`
  position: fixed;
  height: 100%;
  width: 150px;
  z-index: 10;
  background-color: #141414;
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #141414;
`;

const Logo = styled.div`
  display: grid;
  background-color: black;
  padding: 10px;
  justify-items: center;
`;

const DivIcons = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: #141414;

`;

export {Navegacion, NavBar, Logo, DivIcons };