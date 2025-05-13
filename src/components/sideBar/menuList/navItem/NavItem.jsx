import React, {forwardRef} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";

export default function NavItem(props) {
    const {
        item,
        level
    } = props;

    const Icon = item.icon;
    const menuIcon =item.icon && (
        <Icon strokeWidth={1.5} size="1.3rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
    )
    let itemTarget = '_self';
    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };

    return (
        <Grid>
            <ListItemButton
                {...listItemProps}
                // disabled={item.disabled}
                sx={{
                    // borderRadius: `${customization.borderRadius}px`,
                    mb: 0.5,
                    alignItems: 'flex-start',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`
                }}
                // selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
                // onClick={() => itemHandler(item.id)}
            >
                <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>
                <ListItemText
                    primary={
                        <Typography color="#FCF6F5FF">
                            {item.title}
                        </Typography>
                    }
                    secondary={
                        item.caption && (
                            <Typography variant="caption" display="block" gutterBottom>
                                {item.caption}
                            </Typography>
                        )
                    }
                />
            </ListItemButton>
        </Grid>
    )
}