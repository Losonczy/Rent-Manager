import React, { useState, createContext, useEffect, useContext } from "react";
import { RentContext } from "./RentContext";

export const RentTableContext = createContext();

export const RentTableProvider = (props) => {
    const { rent } = useContext(RentContext);

    const [state, setState] = useState([]);


    rent.map(rent => (
        rent["customer_name"] = rent.customer.first_name + " " + rent.customer.last_name
    ))
    useEffect(() => {

        setState((oldState) => {

            return { ...oldState, data: rent };
        });
        setState((oldState) => {
            return {
                ...oldState,
                columns: [
                    { title: "Customer", field: "customer_name" },
                    { title: "Total cost (Ft)", field: "cost", type: "numeric" },
                    { title: "Booking date", field: "booking_date", type: "date", editable: 'never' },
                    { title: "Start date", field: "start_date", type: "date" },
                    { title: "End Date", field: "endDate", type: "date" },
                    { title: "Done", field: "back", lookup: { true: true, false: false } }

                ],

            };
        });
    }, [rent]);


    return (
        <RentTableContext.Provider value={[state, setState]}>
            {props.children}
        </RentTableContext.Provider>
    );
};