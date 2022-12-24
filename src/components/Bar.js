import React from 'react'

const Bar = (props) => {
    return (
        <div  id={`bar${props.index}`} style={{height:props.height*10+30,width:"50px",backgroundColor: "#FFBCBC"}}>
            <div style={{height:"30px",width:"50px",backgroundColor: "#D83A56",textAlign:"center",padding:"2px",fontSize:"large"}}><stong>{props.height}</stong></div>
        </div>
    )
}

export default Bar
