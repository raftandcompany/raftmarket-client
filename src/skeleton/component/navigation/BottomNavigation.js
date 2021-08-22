import React from "react"
import { Navigation }  from "style/layoutStyle"


function BottomNavigationAction({ label, icon} {
    return (
        <button>
            <span>{label}</span>
        </button>
    )
})

function BottomNavigation({ value, setValue...rest }) {
    const [value, setValue] = Ract.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    )
}

export default BottomNavigation;
