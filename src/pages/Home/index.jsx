import React, { useEffect, useState } from 'react';

import './style.css'

import Header from '../../components/Header';
import Card from '../../components/Card';

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    
    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className="container">
      <Header />
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} key={student.time} />
      ))}
    </div>
  )
}

export default Home
