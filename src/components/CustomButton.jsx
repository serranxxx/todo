import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

/**
 * Componente personalizado de botón.
 * 
 * Este componente proporciona un botón personalizado con opciones de personalización.
 * @param {Object} props - Propiedades del botón personalizado.
 * @param {string} props.type - Tipo de botón ('primary' o 'ghost').
 * @param {boolean} props.animated - Indica si el botón tiene animación.
 * @param {string} props.text - Texto que se muestra en el botón.
 * @param {string} props.width - Ancho del botón.
 * @param {string} props.height - Alto del botón.
 * @param {string} props.backgroundColor - Color de fondo del botón.
 * @param {string} props.textColor - Color del texto en el botón.
 * @param {string} props.borderRadius - Radio de borde del botón.
 * @param {number} props.fontWeight - Peso de la fuente del texto.
 * @param {React.Element} props.icon - Icono a mostrar junto al texto.
 * @param {function} props.onClick - Función para manejar el evento onClick del botón.
 *
 * @returns {React.Element} - Elemento del botón personalizado.
 */

const CustomButton = ({
    type = 'primary',
    animated = false,
    text = '',
    width = 'auto',
    height = 'auto',
    backgroundColor = '#007bff',
    textColor = '#fff',
    borderRadious = '1vh',
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
        borderRadius: borderRadious,
        cursor: 'pointer',
        transition: 'all 0.35s ease-in-out'
    };

    return (
        <Button
            className={animated ? 'button' : ''}
            icon={icon}
            type={type} style={buttonStyle} onClick={onClick}>
            {text}
        </Button>
    );
};

CustomButton.propTypes = {
    type: propTypes.oneOf(['primary', 'ghost']), 
    animated: propTypes.bool,
    text: propTypes.string, 
    width: propTypes.string, 
    height: propTypes.string, 
    backgroundColor: propTypes.string, 
    textColor: propTypes.string, 
    borderRadious: propTypes.string,
    fontWeight: propTypes.number, 
    icon: propTypes.element,
    onClick: propTypes.func, 
};

export default CustomButton;
