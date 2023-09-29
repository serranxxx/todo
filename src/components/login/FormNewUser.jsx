
import { Checkbox, Form, Input, Radio, Button, Row, Col, message } from 'antd';
import CustomButton from '../CustomButton';
import propTypes from 'prop-types';
import { avatars } from '../../helpers/getImages';
import { useState } from 'react';

const FormNewUser = ({ type = 'primary', onSubmit }) => {

    const [loginForm] = Form.useForm()
    const [Avatar, setAvatar] = useState(null)

    const onFinish = (e) => {
        if (Avatar) {
            onSubmit(e.username, e.name, e.password, Avatar)
        } else message.error('You must select an avatar')
    }

    return (
        <Form
            form={loginForm}
            onFinish={onFinish}
            name="basic"
            style={{
                width: '90%', margin: '2%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
            }}



        >
            <Row style={{
                width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <Col style={{ width: '49%' }}>
                    <p style={{
                        width: '100%', margin: '1% 0 2% 0', color: '#242021',
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
                        style={{ width: '100%', margin: '0 0 1% 0' }}
                    >
                        <Input style={{ width: '100%', height: '5vh' }} />
                    </Form.Item>
                </Col>

                <Col style={{ width: '49%' }}>
                    <p style={{
                        width: '100%', margin: '1% 0 2% 0', color: '#242021',
                        fontWeight: 500
                    }}>Name</p>
                    <Form.Item
                        //   label="Username"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        style={{ width: '100%', margin: '0 0 1% 0' }}
                    >
                        <Input style={{ width: '100%', height: '5vh' }} />
                    </Form.Item>
                </Col>
            </Row>

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

            <p style={{
                width: '80%', margin: '2% 0 1% 0', color: '#242021',
                fontWeight: 500
            }}>Avatar</p>

            <Form.Item
                
                style={{ width: '80%', margin: '1% 0 3% 0' }}>

                <div
                   
                    style={{ width: '100%', display: 'flex', flexDirection: 'row', }}>

                    {

                        avatars.map((avatar) => (
                            <Button value={avatar.value} onClick={() => setAvatar(avatar.value)}
                                style={{
                                    height: '10vh', aspectRatio: '1/1', overflow: 'hidden', margin:'0.5vh',
                                    display:'flex', alignItems:'center', justifyContent:'center',
                                    backgroundColor: avatar.value === Avatar ? '#708ad590' : ''
                                }} >
                                <img src={avatar.image} style={{ height:'100%'}} />
                            </Button>

                        ))
                    }
                </div>
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

FormNewUser.propTypes = {
    type: propTypes.string, // Nombre de boton del formulario disponibles
    onClick: propTypes.func, // Función para manejar el evento onClick
};

export default FormNewUser;