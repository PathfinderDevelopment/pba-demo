import React, {SetStateAction} from 'react';

interface IAuthContext {
  authState: string,
  setAuthState: React.Dispatch<SetStateAction<string>>
}

export const AuthContext = React.createContext<IAuthContext>({
  authState: '',
  setAuthState: () => {},
});
