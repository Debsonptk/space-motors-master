import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const BackGroundColorHome = styled.div`
  background-color: #282a36;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: auto;
`
export const SearchContainer = styled.div`
  /* position: absolute;
  right: 0px;
  top: -50px; */
  width: 100%;
  background-color: #000;
  padding: 30px 20px 30px 20px;
  border-radius: 10px;
  margin-top: -24px;

  button {
    background-color: #f6e41f;
    padding: 10px 20px 10px 20px;
    margin-left: 20px;
    border-radius: 6px;
    font-weight: bold;
  }

  input {
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 6px;
  }
`
export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;

  & > li {
    border: 1px solid black;
    background-color: #f4e426;
    color: black;
    border-radius: 7px;
    margin: 1px;

    &:hover {
      background-color: #ebf700;
    }
  }

  a {
    color: black;
    float: left;
    padding: 10px 20px;
    text-decoration: none;
  }
  & > li.selected > a {
    background-color: #ffffff;
    color: black;
    border-radius: 7px;
  }
`
