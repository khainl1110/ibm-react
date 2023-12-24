const { response } = require("express");
var randomstring = require("randomstring");

var temp = randomstring.generate(10);

console.log(temp);
// CommitMsg, Content, HashParent, HashCommit
let Node = (CommitMsg, Content, HashParent, HashCommit) => {
    this.CommitMsg = CommitMsg
    this.Content = Content
    this.HashParent = HashParent
    this.HashCommit = HashCommit
}




// https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/gitCommit

  