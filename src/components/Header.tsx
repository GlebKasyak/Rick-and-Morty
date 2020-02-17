import * as React from "react";
import { Layout, Menu } from "antd";
import { NavLink, useHistory } from "react-router-dom";

export default (): JSX.Element => {
    const history = useHistory();

    return  (
        <Layout.Header  className="header">
            <div className="logo">Rick and Morty</div>
            <Menu
                className="header__menu"
                mode="horizontal"
                defaultSelectedKeys={ [history.location.pathname] }
            >
                <Menu.Item key="/">
                    <NavLink to="/">
                        Home page
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/favorite-page">
                    <NavLink to="/favorite-page">
                        Favorite page
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}