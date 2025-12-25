import React, { useState } from 'react';

export function Post({ 
    userName, 
    bio,
    imageURL, 
    time, 
    caption, 
    postImage
}){
    return (
        <>
        <div style={{border: "solid 1px #e0e0e0", padding: "15px", width: "400px", marginLeft: "auto", marginRight: "auto", marginTop: "20px", borderRadius: "10px"}}>

            {/* Header */}
            <div style={{display: "flex", alignItems: "center", marginBottom: "15px"}}>
                <img src={imageURL} style={{
                    width: "48px", height: "48", borderRadius: "50%", objectFit: "cover"
                }}></img>

                <div style={{marginLeft: "10px"}}>
                    <div style={{fontFamily: "sans-serif", fontWeight: "550", fontSize: "18px"}}>{userName}</div>
                    <div style={{fontFamily: "sans-serif", fontWeight: "350", fontSize: "14px", color: "#a3a7a3ff"}}>{bio}</div>

                    {/* Time Row */}
                    <div style={{display: "flex"}}>
                        <div style={{fontFamily: "sans-serif", fontWeight: "350", fontSize: "14px", color: "#b4b8b4"}}>{time}</div>
                        <img style={{marginLeft: "4px", width: "14px", height: "14px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnWJKpxwKJZEJ6lUDv70Tqg5n450bxvUZUQ&s"></img>
                    </div>
                </div>
            </div>
            <div>{caption}</div>
            <img style={{width: "100%", height: "300px"}} src={postImage}></img>
        </div>
        </>
    )
}