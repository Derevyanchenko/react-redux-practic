import { addManyCustomersAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    // чтобы мы могли потом использовать эту функцию как экшен (прокидывать ее в диспатч) - мы из этой функции должны вернуть новую функцию, которая параметром принимает dispatch

    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}