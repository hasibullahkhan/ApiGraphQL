import React, { useEffect } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',      // Github
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,  // access token
    }
});



function GithubAPI() {

    const fetchData_ql = async (organizationName) => {
        const QUERY_ORGANIZATION = `query queryOrganization($organizationName: String!){
            organization(login: $organizationName) {
                name
                description
                url
                createdAt
            }
}`;
        const res = await api.post('/graphql', {
            query: QUERY_ORGANIZATION,
            variables: {
                organizationName
            }
        })
        console.log('GraphQL Response: ', res);
    }

    useEffect(() => {
        fetchData_ql("qutbITech")

    }, [])
    return (
        <div>

        </div>
    );

}
export default GithubAPI;