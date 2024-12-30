import React from 'react'

export default function Input(props) {

    const onChangeHandler = (event) => {
        console.log("on chage");
    }

    const element = props.element === "input" ? (
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            className={`${props.className} ${props.isValid ? "border-green-500 focus:outline-green-500" : "border-red-500 focus:outline-red-500"}`}
            onChange={onChangeHandler}
            isValid={props.isValid}
        />
    ) : (
        <textarea
            id={props.id}
            placeholder={props.placeholder}
            className={`${props.className} ${props.isValid ? "border-green-500 focus:outline-green-500" : "border-red-500 focus:outline-red-500"}`}
            onChange={props.onChangeHandler}
            isValid={props.isValid}
        />
    );

    return (
        <div>
            {element}
        </div>
    )
}
