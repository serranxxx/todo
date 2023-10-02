import { Avatar, Drawer,  Row } from 'antd'
import React from 'react'
import { selectAvatar } from './getImages'
import { AiOutlineCheckSquare, AiOutlineMail } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'


/**
 * Componente modal para visualizar el menu de usuario en un entorno movil.
 * 
 * Este componente proporciona un botón personalizado con opciones de personalización.
 * @param {Object} user - Objeto que incluye las propiedades de el usuario
 * @param {function} logout - función para cerrar sesión.
 * @param {function} TaskCounter - Función que contabiliza el número de pruebas contestadas.
 * @param {state} visible - Estado de visibilidad del Drawer.
 * @param {function} setDrawer - Funnción que cambia la visibildad del drawer.
 * 
 */

export const DrawerMenu = ({ user, logout, TaskCounter, visible, setDrawer }) => {
    return (
        <Drawer
            placement="top"
            onClose={() => setDrawer(false)}
            width='100%'
            height='100%'
            open={visible}
            style={{
                backgroundColor: '#e9efff',
            }}>

            <div
                style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',

                }}>

                <Avatar src={selectAvatar(user.avatar)} shape='square' style={{
                    width: '40%', height: '25vh',
                }} />

                <p style={{
                    width: '80%', textAlign: 'center', fontSize: '3em', fontWeight: 700, margin: '3% 0 0 0'
                }}>{user.name}</p>

                <p style={{
                    width: '80%', textAlign: 'center', fontSize: '3em', fontWeight: 700, margin: '0 0 3% 0'
                }}>{user.lastname}</p>

                <hr style={{ width: '70%', border: '1px solid #000' }} />

                <div
                    style={{
                        marginTop: '2vh', height: 50, cursor: 'pointer', border: '2px solid #000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70%',
                        borderRadius: '2vh'
                    }}>
                    <Row style={{
                        width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                    }}>
                        <AiOutlineMail size={20} style={{ color: '#000', cursor: 'pointer', }} />
                        <p style={{
                            textAlign: 'left', margin: '0 3% 0 3%'
                        }}>{user.username}</p>
                    </Row>


                </div>

                <div
                    style={{
                        marginTop: '2vh', height: 50, cursor: 'pointer', border: '2px solid #000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70%',
                        borderRadius: '2vh'
                    }}>
                    <Row style={{
                        width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                    }}>
                        <AiOutlineCheckSquare size={20} style={{ color: '#000', cursor: 'pointer', }} />
                        <p style={{
                            textAlign: 'left', margin: '0 3% 0 3%'
                        }}>Finished tasks:</p>
                        <b style={{
                            textAlign: 'left'
                        }}>{TaskCounter()}</b>
                    </Row>


                </div>


                <div
                    onClick={() => logout()}
                    style={{
                        marginTop: '2vh', height: 50, cursor: 'pointer', border: '2px solid #000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70%',
                        borderRadius: '2vh'
                    }}>
                    <Row style={{
                        width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',
                    }}>
                        <FiLogOut size={20} style={{ color: '#000', cursor: 'pointer', }} />
                        <p style={{
                            textAlign: 'left', margin: '0 3% 0 3%'
                        }}>Logout</p>
                    </Row>

                </div>



            </div>
        </Drawer>
    )
}

