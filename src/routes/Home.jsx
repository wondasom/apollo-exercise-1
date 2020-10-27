import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
	{
		movies {
			id
			medium_cover_image
		}
	}
`;

export default () => {
	const { loading, data } = useQuery(GET_MOVIES);
	
	return <h1>Home</h1>;
};
