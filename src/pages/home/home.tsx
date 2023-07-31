import React from 'react';
import '../home/home.css';

function Home() {
  const redirect = (url: string) => {
     window.open(url, "_blank", "noreferrer");
  }

  return (
     <div className="content">
        <h1>Novo Site Em Construção...</h1>
        <ul>
           <li>
              <button onClick={() => redirect("https://github.com/nandoProgrammer/")}>Meu Github</button>
           </li>
           <li>
              <button onClick={() => redirect("https://www.linkedin.com/in/fernando-pereira-costa/")}>Meu Linkedin</button>
           </li>
        </ul>
     </div>
  );
}

export default Home;