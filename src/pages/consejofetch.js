import React, { useEffect, useState } from 'react';

const Consejofetch = () => {
  // Estado para almacenar los datos
  const [data, setData] = useState([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para manejar posibles errores
  const [error, setError] = useState(null);

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    // Realiza la petición fetch al archivo JSON local
    fetch('/data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        return response.json();
      })
      .then((data) => {
        // Almacena los datos en el estado
        setData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        // Manejo de errores
        console.error('Error al obtener los datos:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Si hay un error, mostrar un mensaje
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Si los datos están cargando, mostrar un mensaje de carga
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Renderizado de la lista de tarjetas cuando los datos están disponibles
  return (
    <>
    <h1>Página del Consejo</h1>
    <div className='cards'>
        {data.map((item) => (
                <div key={item.id} className='card'>
                <h2>{item.nombre}</h2>
                <h3>Cargo: {item.cargo}</h3>
                <figure>
                    <img
                    src={item.image}
                    alt ={item.nombre}
                    />
                </figure>
                <p>{item.descripcion}</p>
                <a href={item.rrss}>Mi personal Page</a>
    
            </div>
        ))}
    </div>
    </>
  );
};

export default Consejofetch;