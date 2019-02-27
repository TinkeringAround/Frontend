// Mock
const userData = {
  _id: '1234345678910111213',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…jMyfQ.mtPKiZ8wHsuAogJnlbzlnmimMw_BHYqRWk1JPpwez9M',
  email: 't.maier@gingco.net',
  password: '$2a$10$OOXyjzvKxrHCz1wADGQneuH8Mea6tsp.LVBwUAAeE0CKKuN.7EG.m',
  meta: {
    createdAt: new Date(2019, 2, 15)
  },
  activities: [
    {
      meta: {
        creator: 'Thomas Maier',
        completed: false
      },
      game: {
        _id: '98765432101112131',
        title: 'Adventskalender',
        meta: {
          servePuzzlesDaily: false,
          startDate: new Date(2019, 1, 15)
        },
        levels: [
          {
            stages: [
              {
                type: 'text',
                task: 'Was ist rot, rund und gesund?',
                solution: 'Apfel',
                hint: ''
              },
              {
                type: 'text',
                task: 'Was ist rot, rund und gesund?',
                solution: 'Apfel',
                hint: ''
              }
            ]
          },
          {
            stages: [
              {
                type: 'matrix',
                task: '',
                solution: '11,24,33,52',
                hint: 'Unter dem Kühlschrank'
              },
              {
                type: 'matrix',
                task: '',
                solution: '11,24,33,52',
                hint: 'Unter dem Kühlschrank'
              }
            ]
          },
          {
            stages: [
              {
                type: 'word',
                task:
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
                solution: 'ABC',
                hint: 'Box im Arbeitszimmer'
              },
              {
                type: 'word',
                task:
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
                solution: 'ABC',
                hint: 'Box im Arbeitszimmer'
              }
            ]
          }
        ]
      },
      achievements: [
        {
          forLevels: ['Apfel', '']
        },
        {
          forLevels: ['11,24,33,52', '']
        },
        {
          forLevels: ['ABC', '']
        }
      ]
    }
  ]
}

export default userData
