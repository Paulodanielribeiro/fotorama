import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const Container = styled.div`
    width: 60%;
    margin: 30px auto;
    border: 1px solid white;
    border-radius: 38px;
    background-color: #7f9772;
`;

export const img = styled.img`
    width: 30%;
    border-top-left-radius: auto;
  border-top-right-radius: auto;
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  padding: 10px 30px;
  color: black;
  background-color: #CB769E;
  text-decoration:auto;
  font-family: 'bold';
  border-radius: 30px;
  position: fixed;
  `