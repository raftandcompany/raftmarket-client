import React from "react"
import { RoundButton }  from "style/roundButton"
import * as All from "asset/SvgCategory"
import { SvgSearch, SvgAlarm, SvgBack, SvgFacebook } from "asset/SvgImg"

function Button({ icon, type, ...rest }) {
    return (
        <RoundButton type={type} {...rest}>
            {
                {
                    'New'   : <All.SvgNew />,
                    'Art'   : <All.SvgArt />,
                    'Music' : <All.SvgMusic />,
                    'Sports': <All.SvgSports />,
                    'Virtual Reality'    : <All.SvgVr />,
                    'Trading Card': <All.SvgSdCard />,
                    'Collective Items' : <All.SvgItems />,
                    'Domain Name' : <All.SvgDomain />,
                    'search' : <SvgSearch />,
                    'alarm' : <SvgAlarm />,
                    'back' : <SvgBack />,
                    'facebook' : <SvgFacebook />,
                }[icon]
            }
            <span>{icon}</span>
        </RoundButton>
    )
}

export default Button;
