import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;

  input {
    width: 100%;
    height: 5rem;
    color: #313030;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem;
  }

  svg {
    color: #313030 !important;
    position: absolute;
    left: 104rem;
    top: 5.4rem;
  }
`;

export const Albums = styled.div`
  margin-top: 8rem;
  width: 80rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  @media (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }
  .album {
    a {
      text-decoration: none;
    }
    img {
      width: 100%;
      transition: all 0.5s;
      margin-bottom: 1rem;
      :hover {
        background-color: #000000;
        opacity: 50%;
      }
    }
    p {
      text-align: center;
      font-size: 1.6rem;
    }
    .album-name {
      color: #FAFAFA;
    }
    
    .album-artist {
      color: #999999;
    }
  }
`;