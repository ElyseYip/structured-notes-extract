import React, {useState} from "react";
import NavItem from "../navItem/NavItem";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItemText from "@mui/material/ListItemText";
import {Button, Collapse, Grid} from "@mui/material";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function NavCollapse (props) {
    const {
        collapseItem,
        level
    } = props
    
    const [selected, setSelected] = useState(null);

    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
        setSelected(!selected ? collapseItem.id : null);
    };

    const items = collapseItem.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} item={menu} level={level} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={level+1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <ListItemButton
                sx={{
                    // borderRadius: `${customization.borderRadius}px`,
                    mb: 0.5,
                    alignItems: 'flex-start',
                    py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`,
                    marginTop: "200px"
                }}
                selected={selected === collapseItem.id}
                onClick={handleClick}
            >
                <ListItemText
                    primary={
                        <Typography color="#FCF6F5FF" sx={{ my: 'auto' }}>
                            {collapseItem.title}
                        </Typography>
                    }
                />
                {open ? (
                    <ExpandLessIcon stroke={"1.5"} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                ) : (
                    <ExpandMoreIcon stroke={"1.5"} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                )}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: 'relative',
                        '&:after': {
                            content: "''",
                            position: 'absolute',
                            left: '32px',
                            top: 0,
                            height: '100%',
                            width: '1px',
                            opacity: 1,
                            // background: theme.palette.primary.light
                        }
                    }}
                >
                    {items}
                </List>
            </Collapse>

            {/*<Grid display="flex" justifyContent="center" sx={{padding:"15px"}}>*/}
            {/*    <Button variant={"contained"} fullWidth>*/}
            {/*        Deposit Funds*/}
            {/*    </Button>*/}
            {/*</Grid>*/}
        </>
    )
}