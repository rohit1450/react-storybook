import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button, { ButtonProps } from '../Button/Button';

export interface ToasterProps {
    type: 'info' | 'success' | 'warning' | 'error' | 'default';
    position: 'top-right' | 'top-left' | 'top-center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    autoClose: number;
    hideProgressBar: boolean;
    newestOnTop: boolean;
    closeOnClick: boolean;
    rtl: boolean;
    pauseOnFocusLoss: boolean;
    draggable: boolean;
    pauseOnHover: boolean;
    button: ButtonProps;
    theme: 'light' | 'dark' | 'colored';
    transition: string;
    notifyText: string;
}

const Toaster: React.FC<ToasterProps> = ({ position, notifyText, button, type, autoClose, hideProgressBar, newestOnTop, closeOnClick, rtl,
    pauseOnFocusLoss, draggable, pauseOnHover, theme }) => {
    const notify = () => toast(notifyText, { type });
    const { buttonType, color, label, className, onClick } = button;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(event);
        notify();
    };

    return (
        <div className='h-40'>
            <div>
                <Button buttonType={buttonType} color={color} label={label} className={className} onClick={handleClick} />
            </div>
            {type &&
                <ToastContainer
                    position={position}
                    autoClose={autoClose}
                    hideProgressBar={hideProgressBar}
                    newestOnTop={newestOnTop}
                    closeOnClick={closeOnClick}
                    rtl={rtl}
                    pauseOnFocusLoss={pauseOnFocusLoss}
                    draggable={draggable}
                    pauseOnHover={pauseOnHover}
                    theme={theme}
                />
            }

        </div>
    )
}

export default Toaster;