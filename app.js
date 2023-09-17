const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello node');
})

const noticeList = {
    item: [
    {
        id: 1,
        title: '제목',
        tagF: '태그1',
        tagS: '태그2',
        tagT: '태그3',
        content: '내요뇽뇨요뇨요요뇨요뇽뇽뇬욘용',
        category: 'qna',
        topic: '동아리',
        file: '',
        //createdAt: 2023-09-17T14:10:51.000Z,
        //updatedAt: 2023-09-17T14:10:51.000Z,
        deletedAt: null,
        rank: 1,
        nick_name: '닉네임',
        numberOfComments: 0, //댓글 개수
        userId: 1
    },
    {
        id: 2,
        title: '제목2222222',
        tagF: '태그1',
        tagS: '태그2',
        tagT: '태그3',
        content: '내요뇽뇨요뇨요요뇨요뇽뇽뇬욘용222222222',
        category: 'qna',
        topic: '기타',
        file: '',
        //createdAt: 2023-09-17T14:10:51.000Z,
        //updatedAt: 2023-09-17T14:10:51.000Z,
        deletedAt: null,
        rank: 1,
        nick_name: '닉네임2222',
        numberOfComments: 0,//댓글 개수
        userId: 2
        }
    ]
}

const noticePost = {
    content: {
        id: 1,
        title: '제목',
        tagF: '태그1',
        tagS: '태그2',
        tagT: '태그3',
        content: '내요뇽뇨요뇨요요뇨요뇽뇽뇬욘용',
        category: 'qna',
        topic: '동아리',
        file: '',
        //createdAt: 2023-09-17T14:10:51.000Z,
        //updatedAt: 2023-09-17T14:10:51.000Z,
        deletedAt: null,
        rank: 1,
        nick_name: '수gdfg',
        userId: 4
    },
    comment: [
        {
            id: 1,
            content: '댓글 내용이다ㅏㅏ',
            group: 0,
            sequence: 0,
            //createdAt: 2023-09-17T14:20:34.000Z,
            //updatedAt: 2023-09-17T14:20:34.000Z,
            deletedAt: null,
            ListPostId: 1,
            rank: 1,
            nick_name: 'fg',
            userId: 3
        }
    ]
}



//목록
app.get('/api/post',(req,res)=>{
    const category = req.query.category;
    console.log("/api/post?카테고리");
    console.log(category)
    if(category){
        console.log(category)
        res.json(noticeList)
    }

})

//상세보기
app.get('/api/post/:postId',(req,res)=>{
    const category = req.query.category;
    const postId = req.params.postId;
    if(category ){
        res.json(noticePost)
    }
    
})

app.post('/api/post/edit',(req,res)=>{
    console.log(req.body);
    /*
    {
        title:"",
        content:""
        tagF:"",
        tageS:"",
        tagT:"",
        topic?:"" (topic은 qna, devNews 일때만 보낸다.)
        category:"notice"|'qna'|'devNews'|'project'|'patch'
    }

    */
})

app.listen(4000, () => console.log('4000번 포트에서 대기중'));
