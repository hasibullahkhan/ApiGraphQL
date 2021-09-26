import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    }
});

// const api = axios.create({
//     baseURL: 'https://api.github.com',      // Github
//     headers: {
//         Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,  // access token
//     }
// });

function GithubGraphQL() {

    const fatchData_ql = async (abc) => {

        const QUERY_ORGANIZATION = `query queryOrganization($organizationName: String!){
            organization(login: $organizationName){
             name
             description
         }
     }` ;

        const res = await api.post('/graphql', {
            query: QUERY_ORGANIZATION,
            variables: {
                organizationName: abc
            }
        })
        console.log('GraphQL Response:', res)
    }


    return (<pre>
        <h1> GithubGraphQL</h1>
    </pre>
    )

}
export default GithubGraphQL;
