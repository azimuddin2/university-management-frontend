import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item style={{ marginBottom: '12px' }} label={label}>
          <Input
            {...field}
            type={type}
            id={name}
            style={{ width: '100%' }}
            size="large"
          />
          {error && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'red',
                marginTop: '2px',
              }}
            >
              <MdErrorOutline
                style={{ fontSize: '18px', marginRight: '2px' }}
              />
              <span>{error.message}</span>
            </div>
          )}
        </Form.Item>
      )}
    />
  );
};

export default PHInput;
