import React, { useContext, useEffect, useState } from 'react'
import { Button, Input, Layout, Radio, Row, Select, message, } from 'antd';
import { CustomTask } from '../../components/CustomTask';
import { appContext } from '../../context';
import { generateRandomId } from '../../helpers/getRandomId';
import { AiOutlinePlus } from "react-icons/ai";
import { list } from '../../helpers/getLists';
import { IoMdAdd } from "react-icons/io";
import CustomButton from '../../components/CustomButton';
import { useTasksApi } from '../../hooks/UseAxios';
const { Content } = Layout;
const { Option } = Select


/**
 * Módulo en donde se muestran las tareas del usuario, en este modulo el usuario
 * será capaz de crear nueva, marcar como favoritos, marcar como terminadas y filtrar
 */

export const ContentHome = () => {

    const { newtask, getTasks } = useTasksApi()
    const [newTask, setNewTask] = useState('')
    const { user, myTasks, setMyTasks, currentTask } = useContext(appContext)
    const [taskState, setTaskState] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState(myTasks)
    const [selectedList, setSelectedList] = useState('Tasks')

    /**
* Agregar una nueva tarea
* ** @param {object} user - Objeto de donde se extrae el id del usuario
* ** @param {string} newTask - String que almacena la información de la nueva tarea
* ** @param {Function} newtask - Función que se encarga de agregar una nueva tarea en la base de datos
* ** @param {Function} setNewTask - Función que limpia la variable newTask para reinicar el componente
* ** @param {function} setTaskState - Actualiza el estado de edición
**/
    const postTask = () => {
        const data = {
            createdBy: user._id,
            name: newTask,
            note: '',
            finished: false,
            creationDate: new Date(),
            favorite: false,
            selected: false,
            id: generateRandomId()
        }
        newtask(data, setTaskState)
        setNewTask('')
    }

    const borderRadiusFeat = (name) => {
        switch (name) {
            case 'Tasks':
                return "3vh 0 0 3vh"
            case 'Finished':
                return "0"
            case 'Favorites':
                return "0 3vh 3vh 0"

            default:
                break;
        }
    }


    useEffect(() => {
        if (taskState) {
            getTasks(user, setMyTasks)
            setTaskState(false)
        }
    }, [taskState])

    useEffect(() => {
        setMyTasks(myTasks)
    }, [myTasks])

    useEffect(() => {

        if (myTasks) {
            switch (selectedList) {
                case 'Tasks':
                    const unFinishedTasks = myTasks.filter(task => !task.finished)
                    setFilteredTasks(unFinishedTasks)
                    break;

                case 'Finished':
                    const completedTasks = myTasks.filter(task => task.finished)
                    setFilteredTasks(completedTasks)
                    break;

                case 'Favorites':
                    const favTasks = myTasks.filter(task => task.favorite && !task.finished)
                    setFilteredTasks(favTasks)
                    break;

                default:
                    break;
            }
        }

    }, [selectedList, myTasks])

    useEffect(() => {
        getTasks(user, setMyTasks)
    }, [])




    return (
        <>
            {/*Contenido ajustado a resolución web*/}
            <Content
                className='web'
                style={{
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', marginTop: '13vh',
                    backgroundColor: `#e9efff`, position: 'relative', marginBottom: '9vh',
                    // border:'1px solid red'
                }}
            >

                <div style={{ width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '1%' }}>
                    <Select
                        onChange={(e) => setSelectedList(e)}
                        value={selectedList}
                        className='select'
                        style={{ width: '20%', fontSize: '1.5em' }}

                    >
                        {
                            list.map((list) => (
                                <Option key={list.name} value={list.name}>
                                    {list.name}
                                </Option>
                            ))
                        }
                    </Select>

                </div>



                <div
                    className='scrollable-div'
                    style={{
                        height: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '2% 0 0 0',
                        flexDirection: 'column', overflowY: 'scroll', zIndex: 0
                    }}>
                    {
                        myTasks ? <CustomTask data={filteredTasks} setTaskState={setTaskState} currentTask={currentTask} />
                            : <></>
                    }

                </div>

                <div style={{
                    width: '95%', height: '6vh',
                    position: 'absolute', bottom: '-40px',
                    backdropFilter: 'blur(16px)',
                    // background: `linear-gradient(to top, #2e3c5960, #2e3c5920)`,
                    backgroundColor: '#2e3c5960',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '3vh'
                }}>
                    <Input
                        onPressEnter={() => postTask()}
                        placeholder='+  Add new task'
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                        style={{
                            height: '100%', width: '100%', backgroundColor: 'transparent', border: '0px solid #000',
                            fontSize: '1.3em', color: '#fff', padding: '2%', borderRadius: '3vh', zIndex: 1
                        }} />


                    <Button
                        onClick={() => postTask()}
                        style={{
                            marginRight: '5px', borderRadius: '50%',
                            backgroundColor: '#2e3c59', border: '0px solid #2e3c59',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        icon={<IoMdAdd size={20} style={{ color: '#e9efff', }} />}
                    />


                </div>



            </Content>

            {/*Contenido ajustado a resolución web*/}
            <Content
                className='mobile'
                style={{
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', marginTop: '10vh',
                    backgroundColor: `#e9efff`, position: 'relative', marginBottom: '2vh'
                }}
            >

                
                <div style={{
                    width: '90%', height: '5vh',
                    // position: 'absolute', bottom: '0px',
                    backdropFilter: 'blur(16px)',
                    // background: `linear-gradient(to top, #2e3c5960, #2e3c5920)`,
                    backgroundColor: '#2e3c5980',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '3vh'
                }}>
                    <Input
                        onPressEnter={() => postTask()}
                        placeholder='+  Add new task'
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                        style={{
                            height: '100%', width: '100%', backgroundColor: 'transparent', border: '0px solid #000',
                            fontSize: '1.3em', color: '#fff', padding: '2%', borderRadius: '3vh', zIndex: 1,
                            paddingLeft:'5%'
                        }} />


                    <Button
                        onClick={() => postTask()}
                        style={{
                            marginRight: '5px', borderRadius: '50%',
                            backgroundColor: '#E9EFFF', border: '0px solid #2e3c59',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        icon={<IoMdAdd size={20} style={{ color: '#2e3c59', }} />}
                    />


                </div>

                <div style={{ width: '93%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2% 0 3% 0' }}>
                    <Radio.Group
                        onChange={(e) => setSelectedList(e.target.value)}
                        value={selectedList}
                        className='select'
                        style={{ width: '100%', fontSize: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}

                    >
                        {
                            list.map((list) => (
                                <Radio.Button
                                    style={{
                                        width: '32%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: selectedList === list.name ? '#2e3c5980' : 'transparent',
                                        border: selectedList === list.name ? '0px solid #000' : '',
                                        fontWeight: 600, color: selectedList === list.name ? '#e9efff' : '',
                                        borderRadius: borderRadiusFeat(list.name)

                                    }}
                                    key={list.name} value={list.name}>
                                    {list.name}
                                </Radio.Button>
                            ))
                        }
                    </Radio.Group>

                </div>

                <hr style={{
                    width:'90%', border:'1px solid #2e3c5980'
                }}/>


                <div
                    className='scrollable-div'
                    style={{
                        height: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '2% 0 0 0',
                        flexDirection: 'column', overflowY: 'scroll'
                    }}>
                    {
                        myTasks ? <CustomTask data={filteredTasks} setTaskState={setTaskState} currentTask={currentTask} />
                            : <></>
                    }

                </div>

                

            </Content>
        </>
    )
}
