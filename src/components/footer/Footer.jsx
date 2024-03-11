import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} xs={8}>
            <img src={logo} alt="Logo" style={{height: "5em", width: "auto"}}/>
          </Col>
          <Col size={12} sm={6} xs={4} className="text-center text-sm-end" >
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/philipp-drescher"><img src={navIcon1} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}