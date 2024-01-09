import React, { useContext, useEffect, useState } from 'react'
import { Button, Layout, Row, Input } from 'antd';
import { appContext } from '../../context';
import { AiOutlineClose, } from 'react-icons/ai';
import { BsFillTrashFill, BsTrash } from "react-icons/bs";
import CustomButton from '../../components/CustomButton';
import { useTasksApi } from '../../hooks/UseAxios';
const { TextArea } = Input;
const { Sider } = Layout;


/**
 * Módulo en donde se muestra la tarea actual con sus especificaciones, 
 * El usuario tiene oportunidad de editar o eliminar la tarea desde este modulo
 */

export const SiderHome = () => {

    const { editTask, getTasks, deleteTask } = useTasksApi()
    const { myTasks, current, setMyTasks, user, } = useContext(appContext)
    const [currentTask, setCurrentTask] = useState(null)
    const [isTrash, setIsTrash] = useState(false)
    const [taskState, setTaskState] = useState(false)
    const [note, setNote] = useState('')
    const [name, setName] = useState('')
    const [collapsed, setCollapsed] = useState(true)

    /**
* Función que cambia el formato de la fehca
* ** Esta función cambia el formato de una variable date a un formato estandar
* ** @param {date} date - Fecha de creación de la tarea
* ** @returns {fechaFormateada} Fecha de creación de la tarea con formato estandar
**/
    const formatDate = (date) => {
        const fechaOriginal = new Date(date);
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaOriginal.toLocaleDateString('en-US', opcionesFecha);
        return fechaFormateada;
    }
    /**
* Función que edita la tarea
* En esta función el usuario tiene la posibilidad de cambiar el nombre de la tarea y agregar o editar la nota
* ** @param {string} name - Nombre de la tarea
* ** @param {string} note - Nota de la tarea
* ** @param {Function} editTask - función que edita la tarea en la base de datos
* ** @param {function} setTaskState - Actualiza el estado de edición
**/
    const handleNote = () => {
        const data = {
            createdBy: currentTask.createdBy,
            name: name,
            note: note,
            finished: currentTask.finished,
            creationDate: currentTask.creationDate,
            favorite: currentTask.favorite,
            selected: currentTask.selected,
            id: currentTask.id,
        }
        editTask(data, setTaskState)
    }

    useEffect(() => {
        if (taskState) {
            getTasks(user, setMyTasks)
            setTaskState(false)
        }
    }, [taskState])


    useEffect(() => {
        if (currentTask) {
            setNote(currentTask.note)
            setName(currentTask.name)
        }
    }, [currentTask])

    useEffect(() => {
        if (myTasks) {
            const task = myTasks.find(task => task.id === current)
            if (task) {
                setCollapsed(false)
                setCurrentTask(task)
            } else {
                setCollapsed(true)
            }
        }

    }, [current])


    return (
        <>
            {/*Sider ajustado a resolución web*/}
            <Sider
                className='web'
                trigger={null} collapsible
                collapsed={collapsed}
                collapsedWidth={30}
                style={{
                    height: 'auto',
                    backgroundColor: `#dce4f7`, marginTop: '12vh',
                    position: 'relative'

                }}
                width={collapsed ? '0%' : 400}
            >
                <Button
                    onClick={() => setCollapsed(true)}
                    type='ghost' icon={<AiOutlineClose style={{ color: '#2e3c5960' }} size={15} />}
                    style={{ display: collapsed ? 'none' : '', position: 'absolute', right: '5px', top: '10px' }} />

                {
                    !collapsed ?
                        <div style={{
                            width: 400, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', marginTop: '5%'
                            }}>


                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{
                                        width: '80%', fontSize: '1.1em', fontWeight: 600, color: '#2e3c59',
                                        textAlign: 'center', backgroundColor: 'transparent', border: '0px solid #2e3c59'
                                    }} />


                            </Row>

                            <hr style={{ width: '90%', margin: '5% 0 8% 0', border: '1px solid #2e3c5920' }} />

                            <TextArea
                                className='scrollable-div'
                                onChange={(e) => setNote(e.target.value)}
                                value={note}
                                rows={8}
                                placeholder='Add note'
                                style={{
                                    width: '90%', backgroundColor: '#e9efff', borderRadius: '0vh',
                                    border: '0px solid #000', marginBottom: '5%'
                                }} />

                            <Row style={{
                                width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <Button
                                    onClick={() => handleNote()}
                                    style={{
                                        borderRadius: '3vh', border: '0px solid #000',
                                        backgroundColor: '#2e3c59', color: '#E9EFFF'
                                    }}>
                                    Save changes
                                </Button>
                                <Row style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <p>Delete task</p>
                                    <Button
                                        onClick={() => deleteTask(currentTask, setTaskState, setCollapsed)}
                                        onMouseEnter={() => setIsTrash(true)} onMouseLeave={() => setIsTrash(false)}
                                        className='button' type='ghost'
                                        icon={isTrash ? <BsFillTrashFill size={18} />
                                            : <BsTrash size={18} />} />
                                </Row>

                            </Row>


                            {/* <CustomButton
                                type='primary'
                                animated
                                text={'Save'}
                                width='25%'
                                backgroundColor='#2e3c59'
                                borderRadious='1vh'
                                textColor='#e9efff'
                                fontWeight={500}
                                onClick={() => handleNote()}
                            /> */}


                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                flexDirection: 'row', position: 'absolute', bottom: '15px'
                            }}>
                                <p style={{ fontWeight: 600, color: '#2e3c59', fontSize: '1.1em' }}>Created {formatDate(currentTask.creationDate)}</p>

                            </Row>

                        </div>
                        : <></>
                }

            </Sider>
            {/*Sider ajustado a resolución web*/}
            <Sider
                className='mobile'
                trigger={null} collapsible
                collapsed={collapsed}
                collapsedWidth={0}
                style={{
                    height: 'auto',
                    backgroundColor: `#dce4f7`, marginTop: '9vh',
                    position: 'relative', alignItems: 'center', justifyContent: 'center'

                }}
                width={'100%'}
            >
                <Button
                    onClick={() => setCollapsed(true)}
                    type='ghost' icon={<AiOutlineClose style={{ color: '#2e3c5960' }} size={20} />}
                    style={{ display: collapsed ? 'none' : '', position: 'absolute', right: '5px', top: '8px' }} />

                {
                    !collapsed ?
                        <div style={{
                            width: 450, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', marginTop: '5%'
                            }}>


                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{
                                        width: '80%', fontSize: '1.1em', fontWeight: 600, color: '#2e3c59',
                                        textAlign: 'center', backgroundColor: 'transparent', border: '0px solid #2e3c59'
                                    }} />


                            </Row>

                            <hr style={{ width: '80%', margin: '5% 0 8% 0', border: '1px solid #2e3c5930' }} />

                            <TextArea
                                className='scrollable-div'
                                onChange={(e) => setNote(e.target.value)}
                                value={note}
                                rows={6}
                                placeholder='Add note'
                                style={{
                                    width: '80%', backgroundColor: '#e9efff', borderRadius: '0vh',
                                    border: '0px solid #000', marginBottom: '5%'
                                }} />


                            <Row style={{
                                width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <Button
                                    onClick={() => handleNote()}
                                    style={{
                                        borderRadius: '3vh', border: '0px solid #000',
                                        backgroundColor: '#2e3c59', color: '#E9EFFF'
                                    }}>
                                    Save changes
                                </Button>
                                <Row style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <p>Delete task</p>
                                    <Button
                                        onClick={() => deleteTask(currentTask, setTaskState, setCollapsed)}
                                        onMouseEnter={() => setIsTrash(true)} onMouseLeave={() => setIsTrash(false)}
                                        className='button' type='ghost'
                                        icon={isTrash ? <BsFillTrashFill size={18} />
                                            : <BsTrash size={18} />} />
                                </Row>

                            </Row>


                            <Row style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', position: 'absolute', bottom: '5px'
                            }}>
                                <p style={{ fontWeight: 600, color: '#2e3c59', fontSize: '1.1em' }}>Created {formatDate(currentTask.creationDate)}</p>

                            </Row>

                        </div>
                        : <></>
                }

            </Sider>
        </>
    )
}
