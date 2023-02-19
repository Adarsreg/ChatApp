import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "../Sidebar.css";

function Sidebar(props: any) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [channels, setChannels] = useState([]);

    return (
        <div className={classNames("sidebar", { nonVisible: !sidebarOpen })}>
            <div className="logo d-flex justify-content-between">
                <div className="logo-name">

                    CHATON
                </div>
                <img
                    onClick={() => setSidebarOpen(false)}
                    src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcross.svg?v=1596721763254"
                    alt=""
                />
            </div>
            <div className="vertical-menu pt-2">
                <ul>
                    <li>
                        <img
                            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
                            alt=""
                        />
                        <span>Chats</span>
                    </li>
                    <li>
                        <img
                            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fconversation.svg?v=1596542126344"
                            alt=""
                        />
                        <span>User 2</span>
                    </li>
                    <li>
                        <img
                            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcopy.svg?v=1596543073128"
                            alt=""
                        />
                        <span>user 3</span>
                    </li>
                    <li>
                        <img
                            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fbookmark.svg?v=1596542475338"
                            alt=""
                        />
                        <span>user 4</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
