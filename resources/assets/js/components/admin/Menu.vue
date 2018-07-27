<template>
  <div id="menu" role="navigation">
    <div class="navigation">
      <router-link to="/admin" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a><i class="fas fa-tachometer-alt"></i> Dashboard</a></router-link>
      <router-link to="/admin/general-data" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a><i class="fas fa-wrench"></i> General Data</a></router-link>
      <div class="menu-item">
        <a href="#" class="submenu-header" @click="isPostSubmenuOpen = !isPostSubmenuOpen, isMemberSubmenuOpen = false">
            <i class="far fa-edit"></i> Posts <span class="submenu-icon float-right"><i class="fas fa-chevron-right"></i></span>
        </a>
        <div class="submenu-content" id="postSubmenu" :class="{open: isPostSubmenuOpen}">
          <div class="submenu-content-box">
            <!-- <div class="menu-item">Novi dogadjaj</div>
            <div class="menu-item">Svi dogadjaji</div> -->
            <router-link to="/admin/post/new" tag="div" active-class="active" class="menu-item" ><a><i class="fas fa-pen-nib"></i> New Post</a></router-link>
            <router-link to="/admin/post/list" tag="div" active-class="active" class="menu-item" ><a><i class="fas fa-list-ul"></i> List</a></router-link>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <a href="#" class="submenu-header" @click="isMemberSubmenuOpen = !isMemberSubmenuOpen, isPostSubmenuOpen = false">
            <i class="fas fa-users"></i> Members <span class="submenu-icon float-right"><i class="fas fa-chevron-right"></i></span>
        </a>
        <div class="submenu-content" id="postSubmenu" :class="{open: isMemberSubmenuOpen}">
          <div class="submenu-content-box">
            <router-link to="/admin/member/new" tag="div" active-class="active" class="menu-item" ><a><i class="fas fa-user"></i> New Member</a></router-link>
            <router-link to="/admin/members/list" tag="div" active-class="active" class="menu-item" ><a><i class="fas fa-list-ul"></i> List</a></router-link>
          </div>
        </div>
      </div>
      <router-link to="/admin/media" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a href="#"><i class="fas fa-camera-retro"></i> Media</a></router-link>
      <router-link to="/admin/comments/list" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a href="#"><i class="far fa-comment"></i> Comments</a></router-link>
      <router-link to="/admin/mail" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a href="#"><i class="far fa-envelope"></i> Mail</a></router-link>
      <router-link to="/admin/events" tag="div" active-class="active" class="menu-item" exact @click.native="closeSubmenus"><a href="#"><i class="far fa-calendar-alt"></i> Events</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPostSubmenuOpen: false,
      isMemberSubmenuOpen: false
    }
  },
  methods: {
    closeSubmenus() {
      this.isPostSubmenuOpen = false;
      this.isMemberSubmenuOpen = false;
    }
  }
}
</script>

