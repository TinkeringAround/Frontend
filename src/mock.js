// Mock
const userData = {
  _id: '1234345678910111213',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…jMyfQ.mtPKiZ8wHsuAogJnlbzlnmimMw_BHYqRWk1JPpwez9M',
  email: 't.maier@gingco.net',
  username: 'Thomas',
  password: '$2a$10$OOXyjzvKxrHCz1wADGQneuH8Mea6tsp.LVBwUAAeE0CKKuN.7EG.m',
  meta: {
    createdAt: new Date(2019, 2, 15),
    status: 'active',
    code: '670373'
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
                title: 'Was ist die Antwort?',
                comment: 'Das sollte ja kein Problem für dich sein.',
                clue: '',
                type: 'text',
                puzzle: {
                  task: 'Was ist rot, rund und gesund?',
                  solution: 'Apfel',
                  hint: ''
                }
              },
              {
                title: 'Was ist die Antwort?',
                comment: 'Das sollte ja kein Problem für dich sein.',
                clue: '',
                type: 'text',
                puzzle: {
                  task: 'Was ist rot, rund und gesund?',
                  solution: 'Apfel',
                  hint: ''
                }
              }
            ]
          },
          {
            stages: [
              {
                title: 'Errätst du den Code?',
                comment: 'Richtige Kombination führt zu einem neuer Hinweis.',
                clue: 'Setze die richtigen Felder, dann bekommst du den nächsten Hinweis.',
                type: 'matrix',
                puzzle: {
                  task: '',
                  solution: '11,24,33,52',
                  hint: 'Unter dem Kühlschrank'
                }
              },
              {
                title: 'Errätst du den Code?',
                comment: 'Richtige Kombination führt zu einem neuer Hinweis.',
                clue: 'Setze die richtigen Felder, dann bekommst du den nächsten Hinweis.',
                type: 'matrix',
                puzzle: {
                  task: '',
                  solution: '11,24,33,52',
                  hint: 'Unter dem Kühlschrank'
                }
              }
            ]
          },
          {
            stages: [
              {
                title: '...',
                comment: '...',
                clue: '...',
                type: 'word',
                puzzle: {
                  task:
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
                  solution: 'ABC',
                  hint: 'Box im Arbeitszimmer'
                }
              },
              {
                title: '...',
                comment: '...',
                clue: '...',
                type: 'word',
                puzzle: {
                  task:
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
                  solution: 'ABC',
                  hint: 'Box im Arbeitszimmer'
                }
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
