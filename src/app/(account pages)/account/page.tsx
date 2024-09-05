'use client';
import { useState } from 'react';

export default function UserAccountPage() {
  const [isLogged, setIsLogged] = useState(false);

  function handleLog() {
    setIsLogged(prev => !prev); // Переключаем значение состояния
  }
  const title = isLogged ? 'Выйти' : 'Войти';

  return (
    <div>
      <h1>This user account page</h1>
      <button onClick={handleLog}>{title}</button>
    </div>
  );
}
