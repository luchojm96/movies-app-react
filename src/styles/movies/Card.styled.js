import styled from 'styled-components';

export const Card = styled.article`
  position: relative;
  height: 384px;
  width: 256px;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    .info {
      display: block;
    }
  }
`;

export const Info = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 95%;
  padding: 8px;
  border-radius: 5px;
  background-color: #334155;
  opacity: 0.65;
  color: #fff;
  .title {
    font-size: 1.15rem;
    font-weight: 600;
    text-align: center;
  }
  .description {
    font-size: 1rem;
    text-align: justify;
  }
  .stars {
    text-align: center;
  }
  .categories {
    font-size: 0.85rem;
    font-weight: 500;
  }
`;
