import { FC, useState, ReactNode } from 'react';
import Alert from 'react-bootstrap/Alert';

interface ErrorProps {

    children: ReactNode,
    showProp:boolean
}

export const Error: FC<ErrorProps> = ({ children,showProp }) => {
    const [show, setShow] = useState(showProp);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {children}
                </p>
            </Alert>
        );
    } else {
        return <></>
    }
}

