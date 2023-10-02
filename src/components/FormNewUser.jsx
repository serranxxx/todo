
import { Form, Input, Button, Row, Col, message } from 'antd';
import CustomButton from './CustomButton';
import propTypes from 'prop-types';
import { avatars } from '../helpers/getImages';
import { useState } from 'react';


/**
 * Componente que representa un formulario para crear un usuario
 * 
 * Este componente recibe el nombre del botón de submit y la función en la que se 
 * procesarán los datos del usuario
 * 
 * @param {string} text - Nombre que aparecerá en el botón del formulario
 * @param {Function} onSubmit - Función ligada el formulario
 * 
 */

const FormNewUser = ({ text = 'primary', onSubmit }) => {

    const [loginForm] = Form.useForm()
    const [Avatar, setAvatar] = useState(null)

    /**
* Valida que se haya seleccionado un avatar antes de finalizar el formulario
* una vez que se haya validado, se envía la información a la función onSubmit
* ** @param {Object} e - valores sleccionados por el usuario
* ** @param {Number} avatar - Actualiza el estado de edición
**/

    const onFinish = (e) => {
        if (Avatar) {
            onSubmit(e.email, e.name, e.lastname, e.password, Avatar)
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
                    }}>Name</p>
                    <Form.Item
                        //   label="Username"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
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
                    }}>Last name</p>
                    <Form.Item
                        //   label="Username"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                        style={{ width: '100%', margin: '0 0 1% 0' }}
                    >
                        <Input style={{ width: '100%', height: '5vh' }} />
                    </Form.Item>
                </Col>


            </Row>

            <Row style={{
                width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexDirection: 'row', margin: '3% 0 0 0'
            }}>

                <Col style={{ width: '49%' }}>
                    <p style={{
                        width: '100%', margin: '1% 0 2% 0', color: '#242021',
                        fontWeight: 500
                    }}>Email</p>
                    <Form.Item
                        //   label="Username"
                        name="email"
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
                        width: '100%', margin: '2% 0 1% 0', color: '#242021',
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
                        style={{ width: '100%', margin: '1% 0 3% 0' }}
                    >
                        <Input.Password style={{ width: '100%', height: '5vh' }} />
                    </Form.Item>
                </Col>




            </Row>



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
                                    height: '10vh', aspectRatio: '1/1', overflow: 'hidden', margin: '0.5vh',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: avatar.value === Avatar ? '#708ad590' : ''
                                }} >
                                <img src={avatar.image} style={{ height: '100%' }} />
                            </Button>

                        ))
                    }
                </div>
            </Form.Item>


            <CustomButton
                type='primary'
                animated={true}
                text={text}
                width='80%'
                height='5vh'
                backgroundColor='#708ad5'
                borderRadious='1vh'
                textColor='#ffffff'
                fontWeight={600}
                onClick={() => loginForm.submit()}
            />
        </Form>
    )

}

FormNewUser.propTypes = {
    text: propTypes.string, // Nombre de boton del formulario disponibles
    onClick: propTypes.func, // Función para manejar el evento onClick
};

export default FormNewUser;