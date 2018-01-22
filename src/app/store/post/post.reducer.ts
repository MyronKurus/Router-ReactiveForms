import { Post } from '../../models/post.model';
import { S_CREATE_POST } from './post.action';

const postsInitial: Post[] = [
  {
    userId: 1,
    title: 'Lorem 1 User 1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    userId: 1,
    title: 'Lorem 2 User 1',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    userId: 1,
    title: 'Lorem 3 User 1',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing ' +
    'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    userId: 2,
    title: 'Lorem 1 User 2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    userId: 2,
    title: 'Lorem 2 User 2',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    userId: 2,
    title: 'Lorem 3 User 2',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing ' +
    'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
];

export function posts(state: Post[] = postsInitial, { type, payload }) {
  switch (type) {
    case S_CREATE_POST:
      state.push(payload);
      return state;
    default: return state;
  }
}
