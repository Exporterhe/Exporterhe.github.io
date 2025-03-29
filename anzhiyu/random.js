var posts=["2025/03/26/hello-world/","2025/03/29/synchronized为什么会有数据不一致的情况/","2025/03/29/临时表的产生场景/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };