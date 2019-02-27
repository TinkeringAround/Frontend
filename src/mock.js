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
          [
            {
              type: 'text',
              task: 'Was ist rot, rund und gesund?',
              help: 'Ganz einfach, beantworte die Frage.',
              solution: 'Apfel',
              hint: ''
            },
            {
              type: 'text',
              task: 'Was ist rot, rund und gesund?',
              help: 'Ganz einfach, beantworte die Frage.',
              solution: 'Apfel',
              hint: ''
            }
          ],
          [
            {
              type: 'matrix',
              task: '',
              help:
                'Betätige alle richtigen Schalter. Sollte ein falscher Betätigt sein, öffnet sich das Schloss nicht.',
              solution: '11,24,33,52',
              hint: 'Unter dem Kühlschrank'
            },
            {
              type: 'matrix',
              task: '',
              help:
                'Betätige alle richtigen Schalter. Sollte ein falscher Betätigt sein, öffnet sich das Schloss nicht.',
              solution: '11,24,33,52',
              hint: 'Unter dem Kühlschrank'
            }
          ],
          [
            {
              type: 'word',
              task:
                'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
              help:
                'Das ist aber ein Wortsalat. Deine Aufgabe ist es das Schlüsselwort zu suchen, dabei kann es auch diagonal und von unten nach oben geschrieben sein.',
              solution: 'ABC',
              hint: 'Box im Arbeitszimmer'
            },
            {
              type: 'word',
              task:
                'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
              help:
                'Das ist aber ein Wortsalat. Deine Aufgabe ist es das Schlüsselwort zu suchen, dabei kann es auch diagonal und von unten nach oben geschrieben sein.',
              solution: 'ABC',
              hint: 'Box im Arbeitszimmer'
            }
          ],
          [
            {
              type: 'circle',
              task: '',
              help:
                'Betätige die Schalter in der richtigen Reihenfolge. Es sind insgesamt 4 Schalter zu betätigen.',
              solution: '0,A,3,7',
              hint: 'The Witcher'
            },
            {
              type: 'circle',
              task: '',
              help:
                'Betätige die Schalter in der richtigen Reihenfolge. Es sind insgesamt 4 Schalter zu betätigen.',
              solution: '0,A,3,7',
              hint: 'The Witcher'
            }
          ]
        ]
      },
      achievements: [['Apfel', ''], ['11,24,33,52', ''], ['ABC', ''], ['0,A,3,7', '']]
    }
  ]
}

export default userData
