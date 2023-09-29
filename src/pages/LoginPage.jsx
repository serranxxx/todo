import React from 'react'
import { Layout } from 'antd';
import { ContentLogin } from '../components/login/ContentLogin';

export const LoginPage = () => {
    
    return (
        <Layout style={{height:'100vh', backgroundColor:'#d2daec'}}>
            <ContentLogin />
        </Layout>
    )
}
