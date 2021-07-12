import Typography from '@material-ui/core/Typography';
import React from 'react'

function Header({
    variant,
    component,
    data,
    align,
    color,
    className,
}){
    return (
       
        <div>
            <Typography gutterBottom variant={variant === undefined ? 'h4' : variant}
                 component={component === undefined ? 'h2' : component} align={align} color={color} className={className}>
                    {data}
            </Typography> 
        </div>
    )
}

export default Header;
