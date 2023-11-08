import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api-mini-projetos-guimrl.vercel.app/nprojects',
        );

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Erro na solicitação da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Element name="Projetos">
          <ProjectsContainer>
            <ProjectsTitle>Projetos</ProjectsTitle>
            {data.map(item => (
              <ProjectsContent>
                <ProjectsFigure>
                  <ProjectsImage
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <ProjectsDescription id={item._id}>
                    ${item.description}
                    <Btn
                      href={item.url}
                      aria-labelledby={item._id}
                      target="_blank"
                    >
                      Ver Site
                    </Btn>
                  </ProjectsDescription>
                </ProjectsFigure>
              </ProjectsContent>
            ))}
          </ProjectsContainer>
        </Element>
      )}
    </div>
  );
};

const Btn = styled('a')`
  font-weight: bold;
  font-size: 1em;
  color: var(--bg-color);
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
  margin: 25px;
  padding: 12px;
  cursor: pointer;

  :hover {
    background-color: transparent;
    color: var(--main-color);
  }
`;

const ProjectsDescription = styled('figcaption')`
  visibility: hidden;
  position: absolute;
  text-align: center;
  top: 35%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  color: transparent;
  line-height: 1.438em;
  font-weight: bold;

  :hover {
    color: var(--main-text-color);
    bottom: 30%;
    visibility: visible;
  }
`;

const ProjectsImage = styled('img')`
  grid-area: i;
  width: 100%;
  height: 100%;
  object-fit: cover;

  :hover {
    transform: scale(1.1);
    transition: all 0.5s;
    filter: grayscale(100%);
    opacity: 0.3;
  }
`;

const ProjectsContent = styled('div')`
  max-width: 500px;
  min-width: 400px;
  height: 200px;
  font-weight: bold;

  :hover {
    color: var(--main-text-color);
    bottom: 30%;
    visibility: visible;
  }
`;

const ProjectsFigure = styled('figure')`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  box-shadow:
    5px -5px 10px var(--main-bg-color),
    -5px 5px 10px var(--bg-color);
`;

const ProjectsContainer = styled('section')`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  display: grid;
  grid-template-areas:
    't t t'
    'i i i'
    'i i i'
    'i i i';
  gap: 10px 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--bg-color);
`;

const ProjectsTitle = styled('h2')`
  grid-area: t;
  grid-column: t;
  margin-bottom: 40px;
  font-size: 2em;
  color: var(--main-color);
  text-align: center;
`;

export default Projects;
