import { Button, Checkbox, Empty, message } from 'antd'
import React from 'react'
import { AiOutlineCheck, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useTasksApi } from '../hooks/UseAxios';

/**
 * Componente interactivo que representa las tareas
 * 
 * Este componente interactivo recibe como parametros las tareas disponibles
 * y se encarga de mostrarlas de un modo amigable a el usuario final, dandole la oportunidad 
 * de interactuar con estas
 * 
 * @param {Array} myTasks - Lista de todas las tareas correspondientes al perfil.
 * @returns {React.Element} - Tareas mostradas en una carda individual
 * 
 */

export const CustomTask = ({ data, setTaskState, currentTask }) => {

    const { editTask } = useTasksApi()

    /**
     * Alternar el estado selected de una tarea entre verdadero y falso
     * una vez que se modifica el estado se edita la tarea en la base de datos haciendo uso de
     * la función editTask
     * ** @param {string} _id - id específico de la prueba.
     * ** @param {function} setTaskState - Actualiza el estado de edición
    **/

    const handleFinished = (_id) => {

        const taskSelected = data.find(task => task.id === _id)
        if (taskSelected) {
            taskSelected.finished = !taskSelected.finished
            editTask(taskSelected, setTaskState)
        }
    }


    /**
 * Alternar el estado favorite de una tarea entre verdadero y falso
 * una vez que se modifica el estado se edita la tarea en la base de datos haciendo uso de
 * la función editTask
 * ** @param {string} _id - id específico de la prueba.
 * ** @param {function} setTaskState - Actualiza el estado de edición
**/

    const handleFavorite = (_id) => {

        const taskSelected = data.find(task => task.id === _id)
        if (taskSelected) {
            taskSelected.favorite = !taskSelected.favorite
            editTask(taskSelected, setTaskState)
        }
    }


    return (
        <>
            {
                data ?
                    data.length > 0 ?
                        data.map((task) => (
                            <>
                                {/*Card ajustada a resolución web*/}
                                <div
                                    className='web'

                                    style={{
                                        width: '95%', height: '6vh', marginBottom: '1%',
                                        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                                        backgroundColor: '#dce4f7', transition: 'all 0.35s ease-in-out', cursor: 'pointer',
                                        borderRadius: '3vh',
                                    }}>

                                    <Button onClick={() => handleFinished(task.id)}
                                        icon={task.finished ? <AiOutlineCheck size={15} /> : <></>}
                                        type='ghost' style={{
                                            borderRadius: '50%', border: '3px solid #2e3c59', height: 25, width: 25,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginLeft: '10px'
                                        }} />
                                    {/* <div style={{
                                        width: '7%', height: '100%', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>


                                        
                                    </div> */}

                                    <div
                                        onClick={() => currentTask(task.id)}
                                        style={{
                                            width: '86%', height: '100%', display: 'flex',
                                            alignItems: 'center', justifyContent: 'flex-start'
                                        }}>
                                        <p style={{
                                            fontSize: '1.3em', fontWeight: 500, color: '#2e3c59',
                                            textDecoration: task.finished ? 'line-through' : ''
                                        }}>{task.name}</p>
                                    </div>

                                    <Button
                                        onClick={() => handleFavorite(task.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            marginRight: '10px'
                                        }}
                                        icon={task.favorite ? <AiFillStar size={30} style={{ color: '#2e3c59' }} /> : <AiOutlineStar size={30} style={{ color: '#2e3c5960' }} />}
                                        type='ghost' />

                                </div>

                                {/*Card ajustada a resolución móvil*/}
                                <div
                                    className='mobile'
                                    style={{
                                        width: '92%', height: '6vh', marginBottom: '2%',
                                        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                                        backgroundColor: '#dce4f7', transition: 'all 0.35s ease-in-out', cursor: 'pointer',
                                        borderRadius: '3vh'
                                    }}>
                                    <Button onClick={() => handleFinished(task.id)}
                                        icon={task.finished ? <AiOutlineCheck size={15} /> : <></>}
                                        type='ghost' style={{
                                            borderRadius: '50%', border: '3px solid #2e3c59', height: 25, width: 25,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginLeft:'10px'
                                        }} />

                                    <div
                                        onClick={() => currentTask(task.id)}
                                        style={{
                                            width: '70%', height: '100%', display: 'flex',
                                            alignItems: 'center', justifyContent: 'flex-start'
                                        }}>
                                        <p style={{
                                            fontSize: '1.3em', fontWeight: 500, color: '#2e3c59',
                                            textDecoration: task.finished ? 'line-through' : ''
                                        }}>{task.name}</p>
                                    </div>

                                    <Button
                                            onClick={() => handleFavorite(task.id)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center', justifyContent: 'center',
                                                marginRight:'10px'
                                            }}
                                            icon={task.favorite ? <AiFillStar size={30} style={{ color: '#2e3c59' }} /> : <AiOutlineStar size={30} style={{ color: '#2e3c5960' }} />}
                                            type='ghost' />

                                </div>
                            </>
                        ))

                        : <div style={{
                            width: '100%', height: '40vh',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Empty
                                description={<p style={{
                                    fontWeight: 600, fontSize: '1.5em', color: '#2e3c5940',
                                    wordBreak: 'break-word'
                                }}>{"It seems that you don't have any tasks yet"}</p>}
                                imageStyle={{ height: '110%' }}
                                style={{
                                    margin: '4vh 0 0 0'
                                    // width: '68vw'
                                }} />
                        </div>
                    : <></>
            }
        </>
    )
}
