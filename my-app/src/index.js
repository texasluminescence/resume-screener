import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import './index.css';
import MainApp from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_vi4rxyNZW',
  aws_user_pools_web_client_id: '1qnjnjfqhn7dh8giblgkuktlbu',
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_vi4rxyNZW',
    userPoolWebClientId: '1qnjnjfqhn7dh8giblgkuktlbu'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </Authenticator.Provider>
  </React.StrictMode>
);
