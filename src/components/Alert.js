import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Alert(props) {
    const capitalize = (str) => {
        if (str === 'danger') {
            str = 'Error';
        }
        let word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    return (
        <div className={`sticky top-[4.2rem] inset-x-0 z-50 flex justify-center ${props.alert ? 'h-16' : ''}`}>
            {props.alert && (
                <div
                    className={`bg-white text-${props.alert.type === 'danger' ? 'red-500' : 'green-500'} px-4 py-2 rounded shadow-md w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto flex items-center justify-center`}
                    role="alert"
                >
                    <FontAwesomeIcon
                        icon={props.alert.type === 'danger' ? faTimesCircle : faCheckCircle}
                        className="mr-2"
                    />
                    <strong className="mr-1">{capitalize(props.alert.type)}:</strong>
                    <span className="text-sm sm:text-base">{props.alert.message}</span>
                </div>
            )}
        </div>
    );
}

export default Alert;
