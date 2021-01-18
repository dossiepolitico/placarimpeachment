import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Progress from '../components/progress'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
    data: {
        site: {
            siteMetadata: {
                siteName: string;
            };
        };
    };
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                siteName
            }
        }
    }
`;

export default class IndexPage extends React.Component<IndexPageProps> {
    public render() {
        const { siteName } = this.props.data.site.siteMetadata;
        return (
            <Layout>
                <div className="px-2 pt-5">
                    <h1 className="text-4xl uppercase font-bold mb-5">Placar do Impeachment</h1>
                </div>
                <Progress favor={25} contrary={25} abstention={25} unknown={25} />
            </Layout>
        );
    }
}
