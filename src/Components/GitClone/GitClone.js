import { useContext, useState } from "react"
import LoggedInContext from "../Context/LoggedInContext"
import { TextField, Button} from "@material-ui/core"

export default function GitClone() {

    let [content, setContent] = useState("This is some contsdfsdfsdfsdent")
    let [gitCommitMsg, setGitCommitMsg] = useState("This is git commit message")
    let [gitCommits, setGitCommits] = useState([])
    let {loggedIn, setLoggedIn} = useContext(LoggedInContext)

    let fetchAllGitCommits = () => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/gitCommit', {
        })
        .then(response => response.json())
        .then(data => {
            // has lag
            data.Items.sort((a,b) => a.lvl.N - b.lvl.N)
            setGitCommits(data.Items)
            for(const d of gitCommits) {
                //let temp = {CommitMsg: d.CommitMsg.S,Content: d.Content.S,HashCommit: d.HashCommit.S, HashParent: d.HashParent.S}
                console.log(d.CommitMsg.S + " " + d.Content.S + " " + d.HashCommit.S + " " + d.HashParent.S + " " + d.lvl.N)
              
            } 
        })
    }

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

            <TextField
                multiline
                defaultValue={gitCommitMsg}
                onChange={e => setGitCommitMsg(e.target.value)}
            />

            <Button onClick={fetchAllGitCommits}>
                Hello
            </Button>
        </div>
    )
}