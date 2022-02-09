import styled from 'styled-components';

export const Header = styled.div`
  background-color: #262626;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1.5rem 2.25rem;

  a {
    text-decoration: none;
    color: #fff;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 800;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .nav-wrapper {
    display: inline-flex;
    gap: 1rem;
  }

  .nav-link {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
