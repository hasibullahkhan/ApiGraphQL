import { React, useEffect, useState } from 'react'
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com' });

function ApiGithub() {

    const [userData, setuserData] = useState(null);
    const [userrepo, setuserrepo] = useState(null);

    // componentDidMount
    useEffect(() => {

        (async () => {
            // const userData = await api.get('/users/uqutub')           // user Data
            const { data: user } = await api.get('/users/uqutub')
            setuserData(user);

            // console.log('userData', users);
            // console.log('status', status)

            const { data: repo } = await api.get('/users/uqutub/repos')
            setuserrepo(repo);
        })()

    }, [])



    // useEffect(() => {

    //     // Immediately Invoked Function Expression - IIFE
    // (async () => {
    //     const { data: user } = await api.get('/uqutub')           // user Data
    //     console.log('user ', user)
    //     //            setUserData(user);      // update state of the userData

    //     const { data: repo } = await api.get('/users/uqutub/repos')
    //     console.log('repos: ', repo)
    //     //          setUserRepos(repo);     // update state of the userRepos        // user repos
    // })()

    // }, [])

    return (
        <div>
            User Data
            <pre>
                {userData && JSON.stringify(userData, null, 4)}
            </pre>
            <pre>
                <hr />
                {<h1>user Repository</h1>}
                {userrepo && JSON.stringify(userrepo, null, 4)}
            </pre>
        </div>
    )
}

export default ApiGithub;