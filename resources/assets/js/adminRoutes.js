import Home from './components/admin/Home';
import GeneralData from './components/admin/general/GeneralData';

/* const GeneralData = resolve => {
  require.ensure(['./components/admin/GeneralData.vue'], () => {
    resolve(require('./components/admin/GeneralData.vue'));
  }, 'general-data');
}; */

const PostNew = resolve => {
  require.ensure(['./components/admin/posts/New.vue'], () => {
    resolve(require('./components/admin/posts/New.vue'));
  }, 'admin-post');
};

const PostList = resolve => {
  require.ensure(['./components/admin/posts/List.vue'], () => {
    resolve(require('./components/admin/posts/List.vue'));
  }, 'admin-post');
};

const PostEdit = resolve => {
  require.ensure(['./components/admin/posts/Edit.vue'], () => {
    resolve(require('./components/admin/posts/Edit.vue'));
  }, 'admin-post');
};

const Photo = resolve => {
  require.ensure(['./components/admin/media/Photo.vue'], () => {
    resolve(require('./components/admin/media/Photo.vue'));
  }, 'admin-photo');
};

const PhotoUpload = resolve => {
  require.ensure(['./components/admin/media/Upload.vue'], () => {
    resolve(require('./components/admin/media/Upload.vue'));
  }, 'admin-photo-upload');
};

const CommentsList = resolve => {
  require.ensure(['./components/admin/comments/List.vue'], () => {
    resolve(require('./components/admin/comments/List.vue'));
  }, 'admin-comment');
};

const CommentEdit = resolve => {
  require.ensure(['./components/admin/comments/Edit.vue'], () => {
    resolve(require('./components/admin/comments/Edit.vue'));
  }, 'admin-comment');
};

const Messages = resolve => {
  require.ensure(['./components/admin/mail/Messages.vue'], () => {
    resolve(require('./components/admin/mail/Messages.vue'));
  }, 'admin-mail');
};

const Message = resolve => {
  require.ensure(['./components/admin/mail/Message.vue'], () => {
    resolve(require('./components/admin/mail/Message.vue'));
  }, 'admin-message');
};

const MemberList = resolve => {
  require.ensure( ['./components/admin/members/List.vue'], () => {
    resolve(require('./components/admin/members/List.vue'));
  }, 'admin-member-list');
}

const MemberNew = resolve => {
  require.ensure(['./components/admin/members/New.vue'], () => {
    resolve(require('./components/admin/members/New.vue'));
  }, 'admin-member-new');
}

const MemberEdit = resolve => {
  require.ensure(['./components/admin/members/Edit.vue'], () => {
    resolve(require('./components/admin/members/Edit.vue'));
  }, 'admin-member-edit');
}

const Events = resolve => {
  require.ensure(['./components/admin/Events/Events.vue'], () => {
    resolve(require('./components/admin/Events/Events.vue'));
  }, 'admin-events');
}

export const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home,
    meta: {
      breadcrumb: 'Admin',
    }
  },
  {
    path: '/admin/general-data',
    name: 'generalData',
    component: GeneralData,
    meta: {
      breadcrumb: 'General Data',
    }
  },
  {
    path: '/admin/post/list',
    name: 'postList',
    component: PostList,
    meta: {
      breadcrumb: 'All Posts',
    }
  },
  {
    path: '/admin/post/new',
    name: 'postNew',
    component: PostNew,
    meta: {
      breadcrumb: 'New Post',
    }
  },
  {
    path: '/admin/post/edit/:id',
    name: 'postEdit',
    component: PostEdit,
    meta: {
      breadcrumb: 'Edit Post',
    }
  },
  {
    path: '/admin/media',
    name: 'media',
    component: Photo,
    meta: {
      breadcrumb: 'Photo',
    }
  },
  {
    path: '/admin/media/upload/:id',
    name: 'mediaUpload',
    component: PhotoUpload,
    meta: {
      breadcrumb: 'Upload photo',
    }
  },
  {
    path: '/admin/comments/list',
    name: 'commentsList',
    component: CommentsList,
    meta: {
      breadcrumb: 'All Comments',
    }
  },
  {
    path: '/admin/comment/edit',
    name: 'commentEdit',
    component: CommentEdit,
    meta: {
      breadcrumb: 'Edit Comment',
    }
  },
  {
    path: '/admin/mail',
    name: 'mail',
    component: Messages,
    meta: {
      breadcrumb: 'Messages',
    }
  },
  {
    path: '/admin/message/:id',
    component: Message,
    name: 'message'
  },
  {
    path: '/admin/members/list',
    name: 'membersList',
    component: MemberList,
    meta: {
      breadcrumb: 'All Members',
    }
  },
  {
    path: '/admin/member/new',
    name: 'memberNew',
    component: MemberNew,
    meta: {
      breadcrumb: 'New Member',
    }
  },
  {
    path: '/admin/member/edit/:id',
    name: 'memberEdit',
    component: MemberEdit,
    meta: {
      breadcrumb: 'Edit Member',
    },
    path: '/admin/events',
    name: 'events',
    component: Events
  },
  { path: '*', redirect: '/admin' }
];