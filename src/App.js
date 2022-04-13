import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncActions/customers";
import { store } from "./store";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {

    const dispatch = useDispatch()

    // из-за того, что мы используем несколько редюсеров (combineReducers) -нам для обращения к состоянию над использовать такую формулу - state.названиеРедюсера.обьектinitialState
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)



    const addCash = (cash) => {
        // dispatch({
        //     type: 'ADD_CASH',
        //     payload: cash
        // })
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        // dispatch({
        //     type: 'GET_CASH',
        //     payload: cash
        // })
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name: name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    return (
        <div className="App">
            <h1>Счет: { cash }</h1>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))} >Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())} >Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
            </div>
            { customers.length > 0 ?
                <div>
                    <h4>Клиенты:</h4>
                    { customers.map(customer => (
                        <div key={customer.id}>
                            { customer.name }
                            <button onClick={() => removeCustomer(customer.id)}>delete</button>
                        </div>
                    )) }                    
                </div>
                :
                <h4>
                    Клиенты отсутствуют!
                </h4>
            }
        </div>
    );
}

export default App;
