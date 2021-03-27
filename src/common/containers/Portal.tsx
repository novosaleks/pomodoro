import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    id: string,
}

const Portal: React.FC<PortalProps> = ({ id, children }) => {
    const container = document.createElement('div');
    container.id = id;

    useEffect(() => {
        document.body.prepend(container);
        document.body.style.overflow = 'hidden';
        return () => {
            container.remove();
            document.body.style.overflow = '';
        };
    }, [container]);


    return (
        ReactDOM.createPortal(
            children,
            container
        )
    );
};

export default Portal;