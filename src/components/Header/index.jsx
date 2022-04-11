import React, { useEffect, useState } from 'react';
import './style.css';

const Header = () => {
  const [user, setUser] = useState({ login: '', avatar_url: '' })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/BrunoSDias');
      const data = await response.json();
      setUser({
        login: data.login,
        avatar_url: data.avatar_url
      })
    }
  }, [setUser]);

  return (
    <header>
      <h1>Lista de Presenças</h1>
      <div>
        <strong>{user.login}</strong>
        <img src={user.avatar_url} alt="Foto de perfil" />
      </div>
    </header>
  )
}

export default Header;