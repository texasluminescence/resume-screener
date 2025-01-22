import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'white'
    }}>
      <Authenticator>
        {({ user }) => {
          if (user) {
            navigate('/');
            return null;
          }
          return null;
        }}
      </Authenticator>
    </div>
  );
}

export default SignIn;
