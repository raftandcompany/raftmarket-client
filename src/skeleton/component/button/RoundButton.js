import React from "react"
import { RoundButton }  from "style/roundButton"
import * as All from "asset/SvgCategory"

function Button({ icon, type, ...rest }) {
    return (
        <RoundButton type={type} {...rest}>
            {
                {
                    'New'   : <All.SvgNew />,
                    'Art'   : <All.SvgArt />,
                    'Music' : <All.SvgMusic />,
                    'Sports': <All.SvgSports />,
                    'Vr'    : <All.SvgVr />,
                    'SdCard': <All.SvgSdCard />,
                    'Items' : <All.SvgItems />,
                    'Domain' : <All.SvgDomain />,
                }[icon]
            }
        </RoundButton>
    )
}

export default Button;
