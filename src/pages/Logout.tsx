import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

const Logout = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <div>
      <h1>Goodbye!</h1>
      <h3>See you next time!</h3>
    </div>
  );
};
export default Logout;
