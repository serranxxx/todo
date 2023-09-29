import axios from "axios";
import { message } from 'antd';

function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    return randomId;
}


export const newUser = async (username, password, name, avatar) => {

    const data = {
        name: name,
        password: password,
        email: username,
        avatar: avatar,
        id: generateRandomId()
    }

    axios.post(`https://6516149809e3260018c966c1.mockapi.io/taskify/users`, data, {
        headers: {
            'Content-Type': 'application/json'
          }
    })
        .then((response) => {

            console.log(response)
        })

        .catch((error) => {
            // Manejo de errores
            console.error('Error:', error);
            message.error('Something went wrong, please try again')
        });
}

