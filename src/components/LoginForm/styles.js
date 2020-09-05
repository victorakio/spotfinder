import styled from 'styled-components';

import { shade } from 'polished';

export const LoginFormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 87vh;

  svg {
		font-size: 15rem;
		color: #1db954;
		margin-bottom: 4rem;
	}

  a {
    border:none;
    width: 24rem;
    background-color: #1DB954;
    color: #ffffff;
    padding: 2rem;
    border-radius: 5rem;
    font-size: 1.8rem;
    text-decoration: none;
    transition: background-color 0.5s;
    text-align: center;

    &:hover {
      background-color: ${shade(0.2, '#1DB954')};
    }
  }
`;