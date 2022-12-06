import Nav from 'react-bootstrap/Nav';
import NavbarData from './dataset'

function MainNavbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            {/* <Nav.Item>
                {NavbarData.map((sideNav, index) => {
                    return <Link to={sideNav.path} className="sideLink" key={index}>{sideNav.name.toUpperCase()}</Link>
                })}
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item> */}
        </Nav>
    );
}

export default MainNavbar;