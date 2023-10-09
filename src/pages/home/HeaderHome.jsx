import React, { useContext, useState } from 'react'
import { Avatar, Dropdown, Layout, Menu, Row, } from 'antd';
import { images, selectAvatar } from '../../helpers/getImages';
import { appContext } from '../../context';
import { FiLogOut } from "react-icons/fi";
import { AiOutlineCheckSquare, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { DrawerMenu } from '../../helpers/modals';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;


/**
 * Módulo en donde se muestran el nombre del usuario, logo de la aplicación
 * Así como también a través de este módulo se puede acceder a la información
 * del usuario, así como hacer logout en la aplicación
 */
export const HeaderApp = () => {

    const [visible, setVisible] = useState(false);
    const { user, logout, myTasks } = useContext(appContext)
    const [drawer, setDrawer] = useState(false)
    const navigate = useNavigate()

    /**
* Contar cuantas tareas se han finalizado
* ** @param {object} myTasks - Tareas de el usuario
* ** @returns {number} - Número de pruebas completadas por el usuario
**/
    const TaskCounter = () => {
        if (myTasks) {
            const finishedTasks = myTasks.filter(task => task.finished)
            if (finishedTasks) {
                return finishedTasks.length
            } else return 0
        }

    }

    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }

    /**
* Menu de la aplicación. Este menú se almacenerá en un dropdown, el cual
* lo mostrará cuando se seleccione
* ** @param {object} user - Información del usuario
* ** @param {Function} TaskCounter - Número de pruebas completadas por el usuario
* ** @param {Function} logout - función para cerrar sesión
**/
    const menu = (

        <>
            {
                user ?
                    <Menu style={{
                        backgroundColor: '#e9efff',
                        width: 300,
                        border: '1.5px solid #00000040',
                    }}>
                        <Menu.Item
                            style={{ cursor: 'default', border: '1.5px solid #2e3c5930', }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', marginTop: '0' }}>
                                <Avatar shape="square" size={50} src={selectAvatar(user.avatar)} style={{ marginLeft: 0, marginRight: 15, borderRadius: '0.5vw' }} />
                                <p style={{ fontWeight: 'bold', wordBreak: 'break-word', fontSize: '1.3em', color: '#2e3c59' }}>{user.name} {user.lastname}</p>
                            </div>
                        </Menu.Item>

                        <Menu.Item
                            style={{
                                marginTop: '0.4em', height: 50, cursor: 'pointer', border: '1.5px solid #2e3c5930',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                            }}>
                                <AiOutlineMail size={20} style={{ color: '#2e3c59', cursor: 'pointer', }} />
                                <p style={{
                                    textAlign: 'left', margin: '0 3% 0 3%', color: '#2e3c59'
                                }}>{user.username}</p>
                            </Row>


                        </Menu.Item>

                        <Menu.Item
                            style={{
                                marginTop: '0.4em', height: 50, cursor: 'pointer', border: '1.5px solid #2e3c5930',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                            }}>
                                <AiOutlineCheckSquare size={20} style={{ color: '#2e3c59', cursor: 'pointer', }} />
                                <p style={{
                                    textAlign: 'left', margin: '0 3% 0 3%', color: '#2e3c59'
                                }}>Finished tasks:</p>
                                <b style={{
                                    textAlign: 'left'
                                }}>{TaskCounter()}</b>
                            </Row>


                        </Menu.Item>


                        <Menu.Item
                            onClick={onLogout}
                            style={{
                                marginTop: '0.4em', height: 50, cursor: 'pointer', border: '1.5px solid #2e3c5930',
                            }}>
                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                            }}>
                                <FiLogOut size={20} style={{ color: '#2e3c59', cursor: 'pointer', }} />
                                <p style={{
                                    textAlign: 'left', margin: '0 3% 0 3%', color: '#2e3c59'
                                }}>Logout</p>
                            </Row>

                        </Menu.Item>


                    </Menu>
                    : <></>
            }
        </>

    )

    return (
        <>

            {/*Header ajustado a resolución web*/}
            <Header
                className='web'
                style={{
                    padding: 0,
                    position: 'fixed', zIndex: 1, width: '100%',
                    backgroundColor: `#2e3c59`,
                    height: '12vh', alignItems: 'center', justifyContent: 'center',
                    // boxShadow:'0px 6px 8px #00000010'

                }}
            >
                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row', width: '95%', height: '100%'
                }}>
                    <Row style={{
                        width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'
                    }}>
                        <img src={images.light} style={{ height: 35 }} />
                        <div style={{
                            width: '0.5%', height: 30, backgroundColor: '#e9efff',
                            margin: '0 5% 0 5%', borderRadius: '1vh'
                        }} />
                        <img src={images.text_light} style={{ height: 25 }} />
                    </Row>


                    {
                        user ? <Dropdown overlay={menu} onVisibleChange={(flag) => setVisible(flag)} visible={visible}>
                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: 'auto',
                                padding: '0 10px 0 10px', borderRadius: '2vh',
                                cursor: 'pointer'
                            }}>

                                {/* <Avatar src={selectAvatar(user.avatar)} size={45} style={{ margin: 0 }} /> */}
                                <p style={{
                                    color: '#dce4f7', fontWeight: 600, fontSize: '1.3em', fontStyle: 'italic',
                                    margin: '0 10px 0 10px'
                                }}>{user.name} {user.lastname}</p>
                                <AiOutlineMenu size={15} style={{ color: '#dce4f7' }} />

                            </Row>
                        </Dropdown>

                            : <></>
                    }



                </Row>



            </Header>

            {/*Header ajustado a resolución movil*/}
            <Header
                className='mobile'
                style={{
                    padding: 0,
                    position: 'fixed', zIndex: 1, width: '100%',
                    backgroundColor: `#2e3c59`,
                    height: '12vh', alignItems: 'center', justifyContent: 'center',
                }}
            >
                {
                    user ? <Row style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'row', width: '80%', height: '100%'
                    }}>
                        <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar src={selectAvatar(user.avatar)} style={{ height: 45, width: 45, cursor: 'pointer' }} onClick={() => setDrawer(true)} />
                        </div>

                        <div style={{
                            width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <img src={images.text_light} style={{ height: 30 }} />
                        </div>


                    </Row>
                        : <></>
                }




            </Header>

            {/*Drawer que susituye al menú en una resolución web*/}
            {/* <DrawerMenu user={user} logout={logout} TaskCounter={TaskCounter} visible={drawer} setDrawer={setDrawer} /> */}
        </>


    )
}





