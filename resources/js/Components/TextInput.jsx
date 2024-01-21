import { forwardRef, useEffect, useRef } from 'react';
import InputError from './InputError';
import PropTypes  from 'prop-types';


export default forwardRef(function TextInput({
    label,
    type = 'text',
    className = '',
    isFocused = false,
    defaultValue,
    variant = 'primary',
    placeholder,
    errorMessage,
    autoComplete,
    required,
    handleChange,
    ...props }, ref) {
    TextInput.propTypes = {
        type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'primary-outline']),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        errorMessage: PropTypes.string,
        placeholder: PropTypes.string,
        handleChange: PropTypes.func
    }
        const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div>
            {label && label?.length > 0 ? <label htmlFor={label?.replace(" ", "-")} className="text-base block mb-2">{label}</label> : null}
            <input
                {...props}
                name={label?.replace(" ", "-")}
                id={label?.replace(" ", "-")}
                defaultValue={defaultValue}
                type={type}
                autoComplete={autoComplete}
                onChange={e => handleChange(e)}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${errorMessage && errorMessage?.length > 0 ? "input-error" : ""} input-${variant}` +
                    className
                }
                required={required}
                placeholder={placeholder}
                ref={input}
                />
                {errorMessage && errorMessage?.length > 0 ? <InputError message={errorMessage} className="mt-2" /> : null}
        </div>
    );
});
