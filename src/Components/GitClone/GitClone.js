import { useContext, useEffect, useState } from "react"
import LoggedInContext from "../Context/LoggedInContext"
import { TextField, Button} from "@material-ui/core"
import GitCommitItem from "./GitCommitItem"
var randomstring = require("randomstring");

export default function GitClone() {

    let [content, setContent] = useState("This is some contsdfsdfsdfsdent")
    let [gitCommitMsg, setGitCommitMsg] = useState("This is git commit message")
    let [gitCommits, setGitCommits] = useState([])
    let [lvl, setLvl] = useState(0)
    let [hashParent, setHashParent] = useState('adgfdd')
    let {loggedIn, setLoggedIn} = useContext(LoggedInContext)

    let fetchAllGitCommits = () => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/gitCommit', {
        })
        .then(response => response.json())
        .then(data => {
            // has lag
            data.Items.sort((a,b) => a.lvl.N - b.lvl.N)
            console.log(data.Items)
            setGitCommits(data.Items)
            
            // set lvl and hash parent of last element
            setLvl(data.Items[data.Items.length -1].lvl.N)
            setHashParent(data.Items[data.Items.length -1].HashCommit.S)
        })
        .then(() => {
            console.log(lvl + " " + hashParent)
        })
    }

    let pushNewCommit = () => {
        fetch('https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/gitCommit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CommitMsg": gitCommitMsg,
                "Content": content,
                "HashCommit": randomstring.generate(10),
                "HashParent": hashParent,
                "lvl": (Number(lvl) +1).toString()
            })

        }).then(response => response.json())
        .then(data => console.log(data))
    }
    useEffect(fetchAllGitCommits, [])

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

            <Button>
                Create new commit
            </Button>
            <Button onClick = {pushNewCommit}>
                Push to git repo
            </Button>

            <Button onClick = {fetchAllGitCommits}>
                Test level
            </Button>

            <div>
                <h1>Git commits </h1>
                <h2>Commits</h2>
                {
                    gitCommits.map(commit => <GitCommitItem 
                                                commit = {commit}
                                                key = {commit.HashCommit.S}
                                             />)
                }
            </div>
        </div>
    )
}