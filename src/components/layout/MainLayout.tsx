import { Layout, Menu } from "antd";
import logo from '../../assets/icons/ph_logo.svg';
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
//     },
//     {
//         key: 'User Management',
//         label: 'User Management',
//         children: [
//             {
//                 key: 'Create Admin',
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
//             },
//             {
//                 key: 'Create Faculty',
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//             },
//             {
//                 key: 'Create Student',
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>
//             },
//         ],
//     },
// ];

const MainLayout = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img
                        style={{ padding: "0px", marginRight: "-12px" }}
                        src={logo}
                        alt="PH University Logo"
                    />
                    <span
                        style={{
                            color: "white",
                            fontSize: "20px",
                            fontWeight: 500
                        }}
                    >PH University</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={adminSidebarItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    © PH University {new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;