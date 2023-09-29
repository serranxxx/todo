
import { Checkbox, Form, Input } from 'antd';
import CustomButton from '../CustomButton';
import propTypes from 'prop-types';

const FormLogin = ({ type = 'primary', onSubmit }) => {

    const [loginForm] = Form.useForm()

    return (
        <Form
            form={loginForm}
            onFinish={onSubmit}
            name="basic"
            style={{
                width: '90%', margin: '2%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
            }}



        >
            <p style={{
                width: '80%', margin: '1% 0 2% 0', color: '#242021',
                fontWeight: 500
            }}>Username</p>
            <Form.Item
                //   label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                style={{ width: '80%', margin: '0 0 1% 0' }}
            >
                <Input style={{ width: '100%', height: '5vh' }} />
            </Form.Item>

            <p style={{
                width: '80%', margin: '2% 0 1% 0', color: '#242021',
                fontWeight: 500
            }}>Password</p>

            <Form.Item
                //   label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                style={{ width: '80%', margin: '1% 0 3% 0' }}
            >
                <Input.Password style={{ width: '100%', height: '5vh' }} />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"

                style={{ width: '80%', }}
            >
                <Checkbox style={{
                    color: '#24202180',
                    fontWeight: 500
                }}>Remember me</Checkbox>
            </Form.Item>


            <CustomButton
                type='primary'
                text={type}
                width='80%'
                height='5vh'
                backgroundColor='#708ad5'
                textColor='#ffffff'
                fontWeight={600}
                onClick={() => loginForm.submit()}
            // icon={<i className="fas fa-check"></i>} // Ejemplo de icono Font Awesome
            // onClick={handleClick}
            />



        </Form>
    )

}

FormLogin.propTypes = {
    type: propTypes.string, // Nombre de boton del formulario disponibles
    onClick: propTypes.func, // Función para manejar el evento onClick
};

export default FormLogin;