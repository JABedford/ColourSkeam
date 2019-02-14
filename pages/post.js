import {withRouter} from 'next/router';
import Layout from '../components/MyLayout';

const Page = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the content of the blog post.</p>
    </Layout>
))

export default Page;