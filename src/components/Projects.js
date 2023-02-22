import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/cesiicopy.png";
import projImg5 from "../assets/img/iss.png";
import projImg6 from "../assets/img/aforp copy.png";
import projImg7 from "../assets/img/Lc copy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {ArrowRightCircle} from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Preventeur des risques SST",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Apprenti QHSE",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Stagiaire maquettiste/Finition",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const formations = [
    {
      title: "CESI",
      description: "Master MDO-QSE,QHSE",
      imgUrl: projImg4,
    },
    {
      title: "ISEQ",
      description: "Responsable des Systemes QHSE",
      imgUrl: projImg5,
    },
    {
      title: "AFORP,pole UIMM",
      description: "Dessin industriel et conception de produit",
      imgUrl: projImg6,
    },
    {
      title: "Lycee Polyvalent de Cachan",
      description: "CPRP,Dessin industriel et conception de produit",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Mon parcours</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Expériences</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Formations</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <button onClick={() => window.open('https://cvdesignr.com/p/5b04b9310aa65', '_blank')} style={{ color: 'white', display: 'block', margin: '0 auto' }}>Je vous invite à parcourir mon cv ici <ArrowRightCircle size={25} /></button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>En ce moment je suis entrain de terminer mon master. J'aimerai dans le futur travailler dans le domaine de l'industrie ou du nucléraire. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                          {
                            formations.map((formation, index) => {
                              return (
                                  <ProjectCard
                                      key={index}
                                      {...formation}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
