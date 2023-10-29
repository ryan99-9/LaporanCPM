import React from "react";
import Axios from "axios";
import { Table, Button, Form, Dropdown } from "react-bootstrap";

import NavMenu from "../../component/NavMenu";

// const URL_API = 'http://localhost:2000/product'
const URL_API = "https://backend.laporanbpr.com/product";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memory: [],
        };
    }
    render() {
        return (
            <div style={{ height: "100vh" }}>
                <NavMenu />
                <iframe
                    padding="5rem"
                    width="100%"
                    height="95%"
                    src="https://www.youtube.com/embed/TSEaQYIK6QM?autoplay=1"
                    title="Deposito Aman, Menguntungkan &amp; Bunga Tinggi | Bank Universal BPR"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
}

export default Menu;
