profile = {
    username:"YaarMe",
    fullname:"Akash Rajan Verma",
    profile_image:"./yaarme_logo.jpg",
    cover_image:"",
    title:"Information Technology & Services",
    location:"Raipur, Chhattisgarh",
    followers:"113",
    description:"Building the world's most luxurious social media."
}

post = {
    date:"7/11/2020",
    caption:`We have just started working to develop a social media platfrom
    which aim to connect you with your friends and family in most convenient way.`,
    weblink:"yaarme.com"
}

let dp = document.querySelector('.profile-picture img');
let username = document.querySelector('.username');
let tl = document.querySelector('.title-location');
let followers = document.querySelector('.followers');
let description = document.querySelector('.description');
dp.src = profile.profile_image;
username.innerHTML = profile.username
tl.innerHTML = `${profile.title} &#8226 ${profile.location}`
followers.innerHTML = `${profile.followers} followers`
description.innerHTML = profile.description

let postInfo = document.querySelector('.post-info');
postInfo.innerHTML = `Posted by ${profile.fullname} &#8226 ${[post.date]}`

let caption = document.querySelector('.caption');
caption.innerHTML = post.caption