import React, { useContext, useState } from 'react'
import { Layout, Row, } from 'antd';
import { images } from '../../helpers/getImages';
import { onLogin } from '../../services/authServices';
import { appContext } from '../../context';

import FormNewUser from './FormNewUser';
import { newUser } from '../../services/apiServices';
import FormLogin from './FormLogin';

const { Content } = Layout;

export const ContentLogin = (props) => {

    const { login } = useContext(appContext)
    const [isLogin, setIsLogin] = useState(true)

    const onFinish = (values) => {
        onLogin(values.username, values.password, login)
    };

    const onNewUser = (username, name, password, avatar) => {
        newUser(username, password, name, avatar)
    }


    return (
        <Content
            className='background-login'
            style={{
                margin: '24px 16px', padding: 24, minHeight: 280,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
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
                    {/* <p style={{
                        fontSize: '1.3em', fontWeight: '600', wordBreak: 'break-word',
                        width: '40%', textAlign: 'left', color: '#242021'
                    }}>Welcome back! We're glad to see you again</p> */}
                </Row>


                <hr style={{ width: '80%', border: '2px solid #24202130', margin: '6% 0 2% 0', borderRadius: '2vh' }} />

                {
                    isLogin ?
                        <>
                            <FormLogin type="Login" onSubmit={onFinish} />

                            <p style={{
                                fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                width: '100%', textAlign: 'center', color: '#242021',
                            }}>Don't you have an account? <a style={{ color: '#708ad5' }} onClick={() => setIsLogin(false)}>Create one</a></p>
                        </>

                        : <>
                            <FormNewUser type="Create new user" onSubmit={onNewUser} />

                            <p style={{
                                fontSize: '1em', fontWeight: '600', wordBreak: 'break-word',
                                width: '100%', textAlign: 'center', color: '#242021',
                            }}><a style={{ color: '#708ad5' }} onClick={() => setIsLogin(true)}>I have an account already</a></p>
                        </>
                }

            </div>


        </Content>
    )
}
