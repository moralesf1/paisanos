import React, {useState} from 'react'

const HocCollapse = (WrappedComponent) => {


    const Collapse = ({...props}) => {
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

        return <WrappedComponent {...props} handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed}  />
    }


    return Collapse
}

export default HocCollapse;