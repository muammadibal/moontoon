import React from 'react';
import PropTypes from 'prop-types'

PrimaryButton.proptypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
    disabled: PropTypes.bool
}

export default function PrimaryButton({
    type,
    className = '',
    disabled,
    variant,
    children,
    ...props }) {
    return (
        <button
            type={type}
            {...props}
            className={
                `rounded-2xl py-[13px] w-full text-center btn-${variant} ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
