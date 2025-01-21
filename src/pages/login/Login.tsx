import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/loginForm.schema";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in');

        try {
            const userInfo = {
                id: data.userId,
                password: data.password,
            };

            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;

            dispatch(setUser({ user: user, token: res.data.accessToken }));
            toast.success('Logged in', { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`);
        } catch (error) {
            toast.error('Something went wrong', { id: toastId, duration: 2000 });
        }
    };

    return (
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
            <Col sm={18} lg={6}>
                <PHForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(loginFormSchema)}
                >
                    <h2 style={{ marginBottom: "12px", fontSize: "30px" }}>Login</h2>
                    <PHInput type="text" name="userId" label="Id" />
                    <PHInput type="text" name="password" label="Password" />
                    <Button type="primary" htmlType="submit">Login</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default Login;