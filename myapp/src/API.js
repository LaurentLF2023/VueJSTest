const getSome = function (api){
    return fetch(api, {
        method: 'GET'
    }).then((reponse) => reponse.json())
}

export { getSome }