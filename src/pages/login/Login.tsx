import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const Login = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: '12345@'
        }
    });

    const [login, { data, error }] = useLoginMutation();

    console.log('data =>', data)
    console.log('error =>', error)

    const onSubmit = (data) => {
        const userInfo = {
            id: data.userId,
            password: data.password,
        }

        login(userInfo);
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