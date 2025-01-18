import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: '12345@'
        }
    });

    const [login, { error }] = useLoginMutation();

    const onSubmit = async (data) => {
        const userInfo = {
            id: data.userId,
            password: data.password,
        };

        const res = await login(userInfo).unwrap();

        const user = verifyToken(res.data.accessToken);

        dispatch(setUser({ user: user, token: res.data.accessToken }));
    };

    return (
        <div style={{
            width: '500px',
            margin: 'auto',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '30px',
            marginTop: '50px'
        }}>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">Id: </label>
                    <input
                        {...register('userId')}
                        type="text"
                        id="id"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        {...register('password')}
                        type="text"
                        id="password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;