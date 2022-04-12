import React, { useEffect, useState } from 'react';
import './style.css';

type ProfileResponse = {
  login: string;
  avatar_url: string;
}

type User = {
  login: string;
  avatar: string;
}

const Header = () => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/BrunoSDias');
      const data = await response.json() as ProfileResponse;
      setUser({
        login: data.login,
        avatar: data.avatar_url
      })
    }
    fetchData();
  }, [setUser]);

  return (
    <header>
      <h1>Lista de Presenças</h1>
      <div>
        <strong>{user.login}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>
  )
}

export default Header;