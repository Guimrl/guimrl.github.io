import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Perfil = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/guimrl');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        error => {
          error.request.status === 404
            ? console.error(
                // eslint-disable-next-line
                `Error: ${error.request.statusText} - ${error.request.status}`,
              )
            : console.error(`Error: ${error}`);
        };
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ImageContainer
          src={data.avatar_url}
          alt={`${data.name} vestindo
        uma camiseta preta, com barba bem aparada e cabelo curto, em um fundo
        colorido com tonalidades de laranja e branco.`}
        />
      )}
    </div>
  );
};

const ImageContainer = styled('img')`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export default Perfil;
