const proxy = {
    'GET /api/user': { id: 1, username: 'kenny', sex: 60 },
    'GET /api/user/list': [
        { id: 1, username: 'kenny', sex: 6 },
        { id: 2, username: 'kenny', sex: 6 }
    ],
    'GET /api/common/list': [
        {ID: 1, console: 'when is the Guangyuan interface better'},
        {ID: 2, console: 'is the Guangyuan interface ready'},
        {ID: 2, console: 'CCID work order can pass'},
        {ID: 2, console: 'can CCID work order be adjusted'}
    ]
 }
 module.exports = proxy