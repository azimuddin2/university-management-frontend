import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
    return (
        <Controller
            name={name}
            render={({ field }) => (
                <Form.Item style={{ marginBottom: "12px" }} label={label}>
                    <Input
                        {...field}
                        type={type}
                        id={name}
                        style={{ width: "100%" }}
                        size="large"
                        required
                    />
                </Form.Item>
            )}
        />
    );
};

export default PHInput;