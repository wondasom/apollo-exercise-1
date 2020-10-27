import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './routes/apollo';

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
