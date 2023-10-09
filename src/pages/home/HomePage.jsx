import { Layout } from 'antd'
import { HeaderApp } from './HeaderHome'
import { ContentHome } from './ContentHome'
import { SiderHome } from './SiderHome'

export const HomePage = () => {


    return (
        <>
            <Layout >
                <HeaderApp />
                <Layout style={{ backgroundColor: '#e9efff', height: '100vh' }}>
                    <ContentHome />
                    <SiderHome />
                </Layout>
            </Layout>

        </>
    )
}
