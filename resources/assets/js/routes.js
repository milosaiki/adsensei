import Home from './components/public/Home.vue';
import PostsList from './components/public/posts/List.vue';
import Posts from './components/public/posts/Posts.vue';
import Post from './components/public/posts/Post.vue';

const About = resolve => {
  require.ensure(['./components/public/about/About.vue'], () => {
    resolve(require('./components/public/about/About.vue'));
  }, 'public-about');
};

const Member = resolve => {
  require.ensure(['./components/public/members/Member.vue'], () => {
    resolve(require('./components/public/members/Member.vue'));
  }, 'public-member');
};

const Contact = resolve => {
  require.ensure(['./components/public/contact/Contact.vue'], () => {
    resolve(require('./components/public/contact/Contact.vue'));
  }, 'public-contact');
};

/* const PostsList = resolve => {
  require.ensure(['./components/public/posts/List.vue'], () => {
    resolve(require('./components/public/posts/List.vue'));
  }, 'public-posts');
} */

const Photo = resolve => {
  require.ensure(['./components/public/gallery/Gallery.vue'], () => {
    resolve(require('./components/public/gallery/Gallery.vue'));
  }, 'public-gallery');
};

const Event = resolve => {
  require.ensure(['./components/public/events/List.vue'], () => {
    resolve(require('./components/public/events/List.vue'));
  }, 'public-events');
};

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '/o-nama',
    component: About,
    name: 'about',
    meta: {
      breadcrumb : 'O nama'
    }
  },
  {
    path: '/clanovi',
    component: Member,
    name: 'members'
  },
  {
    path: '/kontakt',
    component: Contact,
    name: 'contact'
  },
  {
    path: '/tekstovi',
    component: PostsList,
    children: [
      {
        path: '',
        component: Posts,
        name: 'posts',
        meta: {
          breadcrumb: 'Tekstovi'
        }
      },
      {
        path: '/tekst/:id',
        component: Post,
        name: 'post'
      }
    ]
  },
  {
    path: '/galerija',
    component: Photo,
    name: 'photo'
  },
  {
    path: '/dogadjaji',
    component: Event,
    name: 'event'
  },
  {
    path: '*',
    redirect: '/'
  }
];