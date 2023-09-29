import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

const CustomButton = ({
    type = 'primary',
    text = 'Button',
    width = 'auto',
    height = 'auto',
    backgroundColor = '#007bff',
    textColor = '#fff',
    fontWeight = 400,
    icon = null,
    onClick,

}) => {
    const buttonStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: textColor,
        fontWeight: fontWeight,
        cursor: 'pointer',
        transition: 'all 0.35s ease-in-out'
    };

    return (
        <Button
            className='button'
            icon={icon}
            type={type} style={buttonStyle} onClick={onClick}>
            {text}
        </Button>
    );
};

CustomButton.propTypes = {
    type: propTypes.oneOf(['primary', 'ghost']), // Tipos de botones disponibles
    text: propTypes.string, // Texto en el botón
    width: propTypes.string, // Ancho del botón
    height: propTypes.string, // Alto del botón
    backgroundColor: propTypes.string, // Color de fondo
    textColor: propTypes.string, // Color del texto
    fontWeight: propTypes.number,
    icon: propTypes.element, // Icono (puede ser un elemento JSX)
    onClick: propTypes.func, // Función para manejar el evento onClick
};

export default CustomButton;
