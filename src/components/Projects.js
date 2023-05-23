import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tour & Travel Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Blog Website",
      description: "Design & Development",
      imgUrl: "https://cdn.dribbble.com/users/1094631/screenshots/15491024/media/bd73e5ca7a4daae5f4ccb7696cccd8cd.jpg?compress=1&resize=400x300",
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: "https://i.ytimg.com/vi/Wbc2db82jLQ/maxresdefault.jpg",
    },
    {
      title: "Video Streaming Website",
      description: "Design & Development",
      imgUrl: "https://imgproxy.epicpxls.com/ZOClIH0Akng92ArQcnVEG3RstE7_DBvx0Awz1YlcmkQ/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9hMWZhNDFk/MTY1Mjc3NTFkNjU1/NWMxMzcwZGUzMmM3/Yw.jpg",
    },
    {
      title: "WordPress Website",
      description: "Design & Development",
      imgUrl: "https://d33v4339jhl8k0.cloudfront.net/docs/assets/55e7171d90336027d77078f6/images/5868eea6c697915403a0880c/file-t7KjIhvIUZ.png",
    },
    {
      title: "App Development",
      description: "Design & Development",
      imgUrl: "https://thumbs.dreamstime.com/z/mobile-app-ui-ux-design-different-login-screens-including-application-create-account-sign-up-check-your-email-reset-141353955.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
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
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <h2>Digital Marketing</h2>
                      {/* <p>I have a deep understanding of the power and influence of social media in today's digital landscape. With my expertise in social media handling, I can help businesses establish a strong online presence, engage with their target audience, and drive brand awareness. Here's how I can assist in social media management</p> */}
                      <p>we specialize in providing comprehensive and results-driven digital marketing solutions to help businesses thrive in the online world. Our team of skilled digital marketers is passionate about leveraging the power of digital channels to enhance brand visibility, drive targeted traffic, generate leads, and ultimately boost conversions and revenue. We offer a wide range of digital marketing services to ensure a holistic approach to your online presence.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Software Development</h2>
                      <p>we specialize in providing top-notch software development solutions tailored to meet the unique needs and goals of businesses. Our team of highly skilled and experienced software developers is dedicated to delivering high-quality, scalable, and innovative software solutions that empower organizations to streamline their operations, drive growth, and stay ahead in today's competitive landscape.</p>
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
