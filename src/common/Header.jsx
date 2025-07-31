import { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function MyNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <>
            <section id="home">
                <Navbar
                    expand="lg"
                    expanded={expanded}
                    onToggle={() => setExpanded(!expanded)}
                    className={`navbar fixed-top ${scrolled ? "scrolled" : ""}`}
                >

                    <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="logo" >
                            <a href="#"><img src="/imgs/logo.jpg" alt="" style={{ height: "50px" }} /></a>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto nav-links">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#aboutus">About Us</Nav.Link>

                                <Nav.Link href="#products">Products</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#inspection">Inspection & Quality</Nav.Link>
                                <Nav.Link href="#reachus">Reach Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </>
    );
}

export default MyNavbar;
