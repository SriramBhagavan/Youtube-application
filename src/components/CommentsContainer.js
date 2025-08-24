import React from "react"

const commentsData=[
    {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
             {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
            {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
            {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },


        ]
    },


        ]
    },
     {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
            {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },


        ]
    },

        ]
    },
     {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
            {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },
    {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },
    {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },

        ]
    },
     {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[
            {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },


        ]
    },
    {
        name:'Bhagavan',
        text:'this is a comment section ',
        replies:[

        ]
    },

]

const Comment=({data})=>{
    const {name,text,replies}=data;
    return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="h-12 col-span-1"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/017/800/528/non_2x/user-simple-flat-icon-illustration-vector.jpg"
        />
        <div>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>;
};

const CommentList=({comments} )=>{
    return comments.map((comment, index)=>(
    <div key={index} >
        <Comment data={comment}/>
    
     <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
     </div>
    </div>
    ));


};

const CommentsContainer =()=>{


    return (
        <div className="m-5 p-5">
          <h1 className="text-2xl font-bold mb-4">Comments: </h1>
          <CommentList comments={commentsData}/>

        </div>
    )
}

export default CommentsContainer