import { Typography } from "@material-ui/core";

export default function GitCommitItem({commit}) {
    /*

    const hStyle = { color: 'red' };
const element = <h1 style={ hStyle }>Hello world</h1>

    */
    let CommitMsg = commit.CommitMsg.S;
    let Content = commit.Content.S;
    let HashCommit = commit.HashCommit.S;
    let HashParent = commit.HashParent.S;
    // CommitMsg: d.CommitMsg.S,Content: d.Content.S,HashCommit: d.HashCommit.S, HashParent: d.HashParent.S

    return(
        <div>
            <h6
                style={{color:"red"}}
                >
                {HashCommit}
            </h6>
            <h6
                style={{color:"blue"}}
                >
                {CommitMsg}
            </h6>
        </div>
    )

}