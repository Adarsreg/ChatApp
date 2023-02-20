import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "../Sidebar.css";

function Sidebar(props: any) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [channels, setChannels] = useState([]);

    return (
        <div className={classNames("sidebar")}>
            <div className="logo d-flex justify-content-between ">
                <div className="logo-name">

                    CHATON
                </div>
                <img
                    onClick={() => setSidebarOpen(false)}
                    //src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcross.svg?v=1596721763254"
                    alt=""
                />
            </div>
            <div className="vertical-menu pt-2 ">
                <ul>
                    <li>
                        <img
                            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
                            alt=""
                        />
                        <span>User 1</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
