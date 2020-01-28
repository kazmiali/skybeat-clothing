import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 0px 0px rgba(0, 0, 0, 0.12) !important;
  background: #ffc107;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70%;
  width: 70px;
  margin-left: 0.2rem;
  margin-top: 0.6rem;
  padding: 0px 0 0 0;

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 40px;
    padding: 0px;
    margin: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem 0 0;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 0px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 6px 12px;
  text-decoration: none;
  font-size: 1.225rem;
  color: #000004;
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.3s;

  &:hover {
    background-color: #dfa909;
    border-radius: 4px;
  }

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    padding: 10px 12px;
  }
`;
