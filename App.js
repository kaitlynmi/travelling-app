import React, { useState } from 'react';
import { View } from 'react-native';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const onRegisterLinkClick = () => {
    setShowRegister(true);
  };

  const onLoginLinkClick = () => {
    setShowRegister(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {showRegister ? (
        <RegisterPage onLoginLinkClick={onLoginLinkClick} />
      ) : (
        <LoginPage onRegisterLinkClick={onRegisterLinkClick} />
      )}
    </View>
  );
};

export default App;
