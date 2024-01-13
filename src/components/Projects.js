import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chess Game",
      description: "Chess game using different libraries of python like pygame and algorithms like min max and beta max pruning.",
      imgUrl: projImg1,
      githubLink:"https://github.com/rakshitpandey2003/artificial-intelligence-chess-min-max-alpha-beta-"
    },
    {
      title: "Amazon Clone",
      description: "Used reactJS and its various libraries and firebase in this project to create website similar to amazon.",
      imgUrl: projImg2,
      githubLink:"https://github.com/rakshitpandey2003/amazon-clone-web-developmen-react-app-/tree/main/untitled%20folder%203/react-challenge-amazon-clone-master"
    },
    {
      title: "Chat App",
      description: "Can create new chats with different members of chat app , can create and delete groups, add member to those groups and communicate",
      imgUrl: projImg3,
      githubLink:"https://github.com/rakshitpandey2003/Chat-App"
    },
    {
      title: "Vehicle detection and counting",
      description: "Python engine for counting passing vehicles on road.",
      imgUrl: projImg4,
      githubLink:"https://github.com/rakshitpandey2003/opencv-read-cars"
    },
    {
      title: "To do List",
      description: "You can add task , mark task , update task and delete task to do.",
      imgUrl: projImg5,
      githubLink:"https://github.com/rakshitpandey2003/todolist"
    },
    {
      title: "Quiz App",
      description: "App to create quizes and exam for fixed or all users , user will take exams and check results.",
      imgUrl: projImg6,
      githubLink:"https://github.com/rakshitpandey2003/Quiz-App-REST-API-TS-Mongoose/tree/master"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my portfolio website! I'm Rakshit Pandey, a web developer. Get ready to explore a collection of my projects that highlight my skills and passion for [mention your area of focus or expertise]. Each project represents my dedication to delivering exceptional results. Join me on this visual journey and experience the creativity and innovation that define my work. Let's get started!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am committed to continual growth and learning, keeping abreast of the latest technologies and trends to deliver innovative solutions. I thrive on challenges, relishing the opportunity to devise creative approaches for solving intricate problems.</p>
                      <p>Collaboration lies at the core of my professional ethos. I believe in cultivating robust relationships with clients and colleagues, fostering an environment of transparent communication. Through close collaboration, we can accomplish remarkable outcomes and breathe life into our ideas.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p style={{fontSize : "30px"}}>Thank you for visiting</p>
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
