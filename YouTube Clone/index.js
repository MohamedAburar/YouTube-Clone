const cardContainer = document.getElementById("main");
const sidebarSubscriptions = document.getElementById("subscription");

const cards = [
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_xRmcmvBAnfcfuLYuyrhd6c5yvFC3l78lQ&s',
        duration : '42:32',
        profile : 'https://yt3.ggpht.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s48-c-k-c0x00ffffff-no-rj',
        title : 'HTML Crash Course For Absolute Beginners',
        channelName :'Traversy Media',
        views:'6.7M views .',
        time :'6 Years ago'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPEtyx_7HNorzE_lXtWHDsC42Sm9q_mbMjg&s', 
        duration : '48:11', 
        profile: 'https://yt3.ggpht.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s48-c-k-c0x00ffffff-no-rj',
        title : 'CSS Full Course - Includes Flexbox and CSS Grid Tutorials',
        channelName: 'freeCodeCamp.org',
        views: '912k ',
        time : '5 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9Hojvei8PFYCehex4rbGbpHgQ-B1CIw46w&s', 
        duration : '2:24:26', 
        profile: 'https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s48-c-k-c0x00ffffff-no-rj',
        title : 'Photoshopping YOUR Drawings! | Realistified! S1E3',
        channelName: 'edureka!',
        views: '1.4M',
        time : '5 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTyoBZNVDr_iNd9xtHDPXRaMV-0pNAfSj1g&s', 
        duration : '58:56', 
        profile: 'https://yt3.ggpht.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s48-c-k-c0x00ffffff-no-rj',
        title : 'JavaScript Tutorial | Document Object Model',
        channelName: 'Telusko',
        views: '583k',
        time : '5 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVI6ZLEp7qucgKylftA-nwMRqbKqQKSU5juQ&s', 
        duration : '1:18:34', 
        profile: 'https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s48-c-k-c0x00ffffff-no-rj',
        title : 'jQuery Tutorial | jQuery full course ',
        channelName: 'Simplilearn',
        views: '144k',
        time : '2 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOc75jWAuzA0GaZmfqQfBkXf_-h-8OJblhA&s', 
        duration : '1:05:23', 
        profile: 'https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s48-c-k-c0x00ffffff-no-rj',
        title : 'Node.js Ultimate Beginner s Guide in 7 Easy Steps',
        channelName: 'Fireship',
        views: '1.5M',
        time : '4 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHl6z-klBFKW_V-6-V374sHEGcl1JNpLngQ&s', 
        duration : '36:42', 
        profile: 'https://yt3.ggpht.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s48-c-k-c0x00ffffff-no-rj',
        title : 'Learn Express JS In 35 Minutes',
        channelName: 'Web Dev Simplified',
        views: '770k',
        time : '2 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65KSq2v58r5FRNQeKuN5rrEclUJ14fLaXuA&s', 
        duration : '38:56', 
        profile: 'https://yt3.ggpht.com/HHjrQZrBhfkuwgOkjzUJoWr1pteqnTro55ww253giS7A77VgkFeSZEWu0WFFUkzY2lf3vjzwhw=s48-c-k-c0x00ffffff-no-rj',
        title : 'Nothing Phone (2) Impressions ft Nothing CEO!',
        channelName: 'IBM Technology',
        views: '1.5M',
        time : '5 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUwVBd_XZ1auby30zmT1mE8HsZEQDlGjMuw&s', 
        duration : '56:33', 
        profile: 'https://yt3.ggpht.com/ytc/AIdro_naavCy-rkR4iU851a1vMh7LrBa_Hbxf3qpnRiMqK9IEZc=s48-c-k-c0x00ffffff-no-rj',
        title : 'PostgreSQL Tutorial Full Course',
        channelName: 'Derek Banas',
        views: '236k',
        time : '1 year'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgkaSW6p3yHhnZHhqOq39RBRv0ydzcLCbxg&s', 
        duration : '51:45', 
        profile: 'https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s48-c-k-c0x00ffffff-no-rj',
        title : 'React Tutorial for Beginners',
        channelName: "Programming with Mosh",
        views: '2.8M',
        time : '1 year'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7ooJber5UDxuShE_dyVRN018jQN-hFW7Cg&s', 
        duration : '18:42', 
        profile: 'https://yt3.ggpht.com/R_rSQnTYQkL-rbtTA7djVbXLjU8Bwgua8GHJz6Ollsbyx_txdu0qVDBudCqvpzaxRQfVp2F4=s48-c-k-c0x00ffffff-no-rj',
        title : 'How to Use Git and GitHub',
        channelName: 'Chirs Titus Tech',
        views: '368k',
        time : '2 years'
    },
    {
        thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6ruXhumD8_qnSrlyFDomI37KNFJEiQEDBQ&s', 
        duration : '11:37', 
        profile: 'https://yt3.ggpht.com/DSEtd4ZClhLHDFYAjAWmnLNCP-1hKTNPNfQwlgFoYVynM0jKPVbsRO7DfwHc8Db8-sR4nfc7i6I=s48-c-k-c0x00ffffff-no-rj',
        title : 'Postman API Testing Tutorial | Postman Tutorial For Beginners 2022',
        channelName: 'Code Bless You',
        views: '405k',
        time : '1 year'
    },

]


const generateCard = (thumbnail, duration, profile, title, channelName, views, time) => {
    
    const card = document.createElement("div");
    card.classList.add('card');

    card.innerHTML = `<div class="thumbnail"><img src="${thumbnail}"alt="Thumbnail"><div class="duration">${duration}</div></div><div class="content"><div class="profile-pic"><img src="${profile}"alt="profile"></div><span class="title">${title}</span><span class="channel-name">${channelName}<span class="verified"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg></span></span><span class="views">${views} views . <span class="time">${time} ago</span></span></div>`

    return card;
}

cards.forEach((card) => {
    const finalCard = generateCard(card.thumbnail, card.duration, card.profile, card.title, card.channelName, card.views, card.time);
    cardContainer.appendChild(finalCard);
});



const generateSidebarItem = (profile, channelName) => {
    
    const item = document.createElement("li");

    item.innerHTML = `<a href="#"><span class="subscription-item-icon"><img src="${profile}" alt="image"></span><span class="subscription-item-title"> ${channelName} </span> </a>`

    return item;
}
cards.forEach((card) => {
    const item = generateSidebarItem(card.profile, card.channelName);
    sidebarSubscriptions.appendChild(item);
})