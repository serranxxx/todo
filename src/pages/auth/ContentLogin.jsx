import React, { useContext, useState } from 'react'
import { Layout, Row, } from 'antd';
import { images } from '../../helpers/getImages';
import { appContext } from '../../context';

import FormNewUser from '../../components/FormNewUser';
import FormLogin from '../../components/FormLogin';
import { useNavigate } from 'react-router-dom';
import { useTasksApi } from '../../hooks/UseAxios';

const { Content } = Layout;

/**
 * Módulo en donde se procesan y se almacene las opciones de inicio de sesión
 * Este módulo se autentica y validan los datos ingresados por el usuario, 
 * así como también se crean usuarios nuevos
 * 
 */

export const ContentLogin = () => {

    const { newUser, onLogin } = useTasksApi()
    const { login } = useContext(appContext)
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    /**
 * validar y autenticar los datos el usuario, así como cambiar el estado global de isLogged
 * ** @param {Object} values - usuario y password ingresadas por el usuario
 * ** @param {function} onLogin - función encargada de validar a el usuario en la base de datos
**/

    const onFinish = (values) => {
        onLogin(values.username, values.password, login, navigate)
    };

    /**
* Crear un nuevo usuario
* ** @param {string} email - usuario y password ingresadas por el usuario
* ** @param {string} name - usuario y password ingresadas por el usuario
* ** @param {string} lastname - usuario y password ingresadas por el usuario
* ** @param {string} password - usuario y password ingresadas por el usuario
* ** @param {number} avatar - usuario y password ingresadas por el usuario
* ** @param {function} newUser - función encargada de crear un nuevo usuario en la base de datos
* ** @param {function} setIsLogin - función encargada de cambiar el estado isLogin
**/

    const onNewUser = (email, name, lastname, password, avatar) => {
        setIsLogin(newUser(email, password, name, avatar, lastname))
    }

    return (
        <>
            {/*Login ajustado a resolución web*/}
            <Content
                className='background-login web'
                style={{
                    margin: '24px 16px', padding: 24, minHeight: 280,
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: `#dce4f7`, position: 'relative',
                }}
            >

                <div style={{
                    width: '60vh', height: '80%', left: '170px', position: 'absolute',
                    boxShadow: '0px 0px 18px #00000010', backgroundColor: '#f1f6ff',
                    borderRadius: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <Row style={{
                        width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <img src={images.logo} style={{ width: '13%' }} />
                        <div style={{
                            width: '0.5%', height: '70%', backgroundColor: '#242021',
                            margin: '0 5% 0 5%'
                        }} />
                        <img src={images.text} style={{ width: '41%' }} />

                    </Row>


                    <hr style={{ width: '70%', border: '2px solid #24202130', margin: '10% 0 2% 0', borderRadius: '2vh' }} />

                    {
                        isLogin ? // isLogin es un estado que indica si se inicia sesión o se crea un nuevo usuario
                            <>

                                <FormLogin text="Login" onSubmit={onFinish} />

                                <p style={{
                                    fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                    width: '100%', textAlign: 'center', color: '#242021',
                                }}>Don't you have an account? <a style={{ color: '#708ad5' }} onClick={() => setIsLogin(false)}>Create one</a></p>
                            </>

                            : <>
                                <FormNewUser text="Create new user" onSubmit={onNewUser} />

                                <p style={{
                                    fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                    width: '100%', textAlign: 'center', color: '#242021',
                                }}><a style={{ color: '#708ad5' }} onClick={() => setIsLogin(true)}>I have an account already</a></p>
                            </>
                    }

                </div>


            </Content>

            {/*Login ajustado a resolución móvil*/}
            <Content
                className='mobile'
                style={{
                    margin: '24px 16px', padding: 24, minHeight: 280,
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: `#f1f6ff`, position: 'relative',
                    borderRadius: '2vh'
                }}
            >

                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Row style={{
                        width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <img src={images.logo} style={{ width: '13%' }} />
                        <div style={{
                            width: '0.5%', height: '70%', backgroundColor: '#242021',
                            margin: '0 5% 0 5%'
                        }} />
                        <img src={images.text} style={{ width: '41%' }} />

                    </Row>


                    <hr style={{ width: '70%', border: '2px solid #24202130', margin: '10% 0 2% 0', borderRadius: '2vh' }} />

                    {
                        isLogin ? // isLogin es un estado que indica si se inicia sesión o se crea un nuevo usuario
                            <>
                                {/* El componente FormLogin y FromNewUser reciben dos propiedades, 
                                type: correspone al texto que aparecerá en el boton, definiendo el tipo de Form
                                onSubmit: Es la función que corresponde al formulario una vez que se haya terminado */}

                                <FormLogin text="Login" onSubmit={onFinish} />

                                <p style={{
                                    fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                    width: '100%', textAlign: 'center', color: '#242021',
                                }}>Don't you have an account? <a style={{ color: '#708ad5' }} onClick={() => setIsLogin(false)}>Create one</a></p>
                            </>

                            : <>
                                <FormNewUser text="Create new user" onSubmit={onNewUser} />

                                <p style={{
                                    fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                    width: '100%', textAlign: 'center', color: '#242021',
                                }}><a style={{ color: '#708ad5' }} onClick={() => setIsLogin(true)}>I have an account already</a></p>
                            </>
                    }

                </div>


            </Content>
        </>
    )
}
