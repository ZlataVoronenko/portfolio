import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1-img.png";
import projImg2 from "../assets/img/project2-img.png";
import projImg3 from "../assets/img/project3-img.png";
import projImg4 from "../assets/img/project4-img.png";
import projImg5 from "../assets/img/project5-img.png";
import projImg6 from "../assets/img/project6-img.png";
import projImg7 from "../assets/img/project7-img.png";
import projImg8 from "../assets/img/project8-img.png";
import projImg9 from "../assets/img/project9-img.png";
import projImg10 from "../assets/img/project10-img.png";
import projImg11 from "../assets/img/project11-img.png";
import projImg12 from "../assets/img/project12-img.png";
import projImg111 from "../assets/img/project-img1.png";
import projImg22 from "../assets/img/project-img2.png";
import projImg33 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Binary",
            description: "Design for web products",
            imgUrl: projImg1,
        },
        {
            title: "SmartSpace",
            description: "RESIDENTIAL & OFFICE SPACES",
            imgUrl: projImg4,
        },
        {
            title: "GoCorona",
            description: "About your hea",
            imgUrl: projImg3,
        },
        {
            title: "AOD New York",
            description: "A new generation of vintage bike",
            imgUrl: projImg2,
        },
        {
            title: " PrimeOne Catering",
            description: "Restorant in New York",
            imgUrl: projImg5,
        },
        {
            title: "Endless",
            description: "Credit management services",
            imgUrl: projImg6,
        },
    ];

    const projectsTwo = [
        {
            title: "Macbook Pro M2(2022) ",
            description: "Start of sales",
            imgUrl: projImg8,
        },
        {
            title: "Get random cat",
            description: "Small project",
            imgUrl: projImg9,
        },
        {
            title: "Background changer",
            description: "Change color",
            imgUrl: projImg7,
        },
        {
            title: "Password generator",
            description: "Get random password",
            imgUrl: projImg11,
        },
        {
            title: "Movie app",
            description: "Only up-to-date information",
            imgUrl: projImg10,
        },
        {
            title: "Github search profiles",
            description: "Can find a profile",
            imgUrl: projImg12,
        },
    ];

    const projectsThree = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg111,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg22,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg33,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg111,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg22,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg33,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                                                <Row>
                                                    {
                                                        projectsTwo.map((project, index) => {
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
                                            <Tab.Pane eventKey="third">
                                                <p>It's not all my projects, I have more in my GitHub. Contact me if you want to know more about them.</p>
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