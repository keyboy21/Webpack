import $ from "jquery";
import Post from "/Post";
import Menus from '@assets/menu'
import '@styles/index.css'
const post = new Post('Webpack post title');
console.log(Menus)

$('.parse').html(post.toString());