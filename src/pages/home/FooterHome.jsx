import { Button, Input, Layout, Row, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { generateRandomId } from '../../helpers/getRandomId';
import { appContext } from '../../context';
import { useTasksApi } from '../../hooks/UseAxios';



const { Footer } = Layout;
export const FooterHome = (props) => {

    const { newtask, getTasks } = useTasksApi()
    const [newTask, setNewTask] = useState('')
    const [taskState, setTaskState] = useState(false)
    const { user, myTasks, setMyTasks, currentTask } = useContext(appContext)

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
        getTasks(user, setMyTasks)
    }, [])
    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'row',
            height: '10vh', padding: '0 5% 0 5%',
            // borderTop: '1px solid #463f3a20',
            // boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: 'transparent'
        }}>

            <div style={{
                width: '100%', height: '5vh',
                // position: 'absolute', bottom: '0px',
                backdropFilter: 'blur(16px)',
                // background: `linear-gradient(to top, #2e3c5960, #2e3c5920)`,
                backgroundColor: '#2e3c59',
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
                        paddingLeft: '5%'
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

        </Footer>
    )
}

