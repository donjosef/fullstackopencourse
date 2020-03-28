import React from 'react';

const Notification = ({ notificationMessage, errorMessage }) => {
    
    return (
        <>
            {(notificationMessage || errorMessage) && (
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: 20,
                    background: '#f2f2f2',
                    borderRadius: 5,
                    color: notificationMessage ? 'green' : 'red',
                    fontWeight: 'bold'
                }}>
                    <p>{notificationMessage || errorMessage}</p>
                </div>
            )}
        </>
    )
}

export default Notification;