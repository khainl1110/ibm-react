import { useContext, useState } from "react"
import LoggedInContext from "../Context/LoggedInContext"
import { TextField, Button} from "@material-ui/core"

export default function GitClone() {

    let [content, setContent] = useState("This is some contsdfsdfsdfsdent")
    let [gitCommitMsg, setGitCommitMsg] = useState("This is git commit message")
    let {loggedIn, setLoggedIn} = useContext(LoggedInContext)

    // let controlCreateNewItem = () => {
    //     createNewItem();
    // }

    return(
        <div>
            {loggedIn ? <h1>Logged In</h1> : <h1>Not logged in</h1>
            }
            <h1>Welcome to Git Clone!</h1>
            <TextField
                multiline
                defaultValue={content}
                onChange={e => setContent(e.target.value)}
            />

            <Button >
                Hello
            </Button>
        </div>
    )
}