import axios from "axios";
import { message } from 'antd';

export const onLogin = async (username, password, login) => {

    axios.get(`https://6516149809e3260018c966c1.mockapi.io/taskify/users`)
        .then((response) => {

            const user = response.data.find(user => user.email === username)
            if (user) {
                if (user.password === password) {
                    login(user.email, user.name, user.id, user.avatar)
                    message.success('logged')

                } else message.error('User not found')
            } else message.error('User not found')
            })

        .catch((error) => {
            // Manejo de errores
            console.error('Error:', error);
            message.error('Something went wrong, please try again')
        });
}

