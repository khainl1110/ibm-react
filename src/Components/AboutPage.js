import { Typography, ListItem, ListItemText, List } from '@material-ui/core';
import ServerlessAbout from "./Serverless/ServerlessAbout";
export default function AboutPage() {
    return (
        <div>
            <Typography variant = "h6">
                About me: International student pursuing BS Software Engineer at SJSU '23 <br/>
                <a href ="linkedin.com/in/khai-nguyen-b59503106/">LinkedIn </a>
                Email: khainl1110@gmail.com
                (612) 743-6850
            </Typography>
            <Typography variant = "h3">A new way to shop</Typography>
            <Typography> This project uses</Typography>

            <List>
                <ListItem>
                    <ListItemText>
                        React and Material Design
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Advanced knowledge in React such as useState, useContext
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Advanced knowledge in Material Design like theme API
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Software engineer concepts such as low coupling, high cohesion for organizing code
                    </ListItemText>
                </ListItem>
            </List>
            <Typography>Github: @khainl1110</Typography>
            <ServerlessAbout />
        </div>
        
    )
}
