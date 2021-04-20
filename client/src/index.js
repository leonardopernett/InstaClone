import React from 'react';
import ReactDOM from 'react-dom';

/* semantic css */
import 'semantic-ui-css/semantic.min.css'

/* apollo connection */
import {ApolloProvider} from '@apollo/client/react'
import {client} from './config/apollo'

import './index.scss';
/* component App  */
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
     <App />
  </ApolloProvider>,
document.getElementById('root')
);



