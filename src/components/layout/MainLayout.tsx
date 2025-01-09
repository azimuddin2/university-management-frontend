import { Layout, Menu, MenuProps } from "antd";
import logo from '../../assets/icons/ph_logo.svg';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: 1,
        label: 'Dashboard'
    },
    {
        key: 2,
        label: 'Profile'
    },
    {
        key: 3,
        label: 'Users Management',
        children: [
            {
                key: 11,
                label: 'Create Admin'
            },
            {
                key: 22,
                label: 'Create Student'
            },
        ],
    },
];


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
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img style={{padding: "0px", marginRight: "-12px"}} src={logo} alt="PH University Logo" />
                    <span
                    style={{
                        color:"white",
                        fontSize: "20px",
                        fontWeight: 500
                    }}
                    >PH University</span>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
                        <h1>This is content</h1>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;