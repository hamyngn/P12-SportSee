import fetchData from "../utils/fetchData";

export default async function getData(id) {
    let err, activities, sessions, performance, user
    
    let api, url
    api = true
    if(api) {
        url = 'http://localhost:3000/user/'+ id
    } else {
        url = 'http://localhost:8000/user/'+ id
    }

    await fetchData(url, api).then ((res) => {
        const {response, error} = res
        if(error) {
            err = error
        } else {
            user = response
        }
    });
    await fetchData(url + '/activity', api).then ((res) => {
        const {response, error} = res
        if(error) {
            err = error
        } else {
            if(api) {
                activities = response.sessions
            } else {
                if(response.length){
                    activities = response[0].sessions
                }
            }
        }
    });
    await fetchData(url + '/average-sessions', api).then ((res) => {
        const {response, error} = res
        if(error) {
            err = error
        } else {
            if(api) {
                sessions = response.sessions
            } else {
                if(response.length){
                    sessions = response[0].sessions
                }
            }
            
        }
    });
    await fetchData(url + '/performance', api).then ((res) => {
        const {response, error} = res
        if(error) {
            err = error
        } else {
            if(api){
                performance = response
            } else {
                if(response.length){
                    performance = response[0]
                }
            }
            
        }
    });
    return ({error: err, activities: activities, sessions: sessions, performance: performance, user: user})
}