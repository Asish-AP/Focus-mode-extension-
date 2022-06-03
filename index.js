const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    * {
    margin: 0;
    padding: 0;
}
header {
    background-color:rgba(33, 33, 33, 0.9);
    color:#ffffff;
    display:block;
    font: 14px/1.3 Arial,sans-serif;
    height:50px;
    position:relative;
    z-index:5;
}
h2{
    margin-top: 30px;
    text-align: center;
}
header h2{
    font-size: 22px;
    margin: 0 auto;
    padding: 10px 0;
    width: 80%;
    text-align: center;
}
header a, a:visited {
    text-decoration:none;
    color:#fcfcfc;
}

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
    z-index:3;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 90%;
      margin: 100px 70px 20px;
    }
    ._404 {
      font-size: 100px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 150px;
      margin: 100px 70px 20px;
      letter-spacing: 15px;
    }
    ._1 {
      margin-top:20px;  
      text-align: center;
      display: block;
      z-index: 2;
      position: relative;
      letter-spacing: 7px;
      font-size: 2em;
      line-height: 80%;
    }
    ._2 {
      font-family: cursive;
      margin-top:20px; 
      text-align: center;
      display: block;
      z-index: 3;
      position: relative;
      font-size: 20px;
      width:750px
      display:flex;
      padding-top: 50;
      padding-right: 150px;
      padding-left: 150px;
    }
    ._3 {
      margin-top:20px;  
      text-align: center;
      display: block;
      z-index: 2;
      position: relative;
      letter-spacing: 3px;
      font-size: 2em;
      line-height: 80%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
    <div class='c'>
        <div class='_404'>Get Back to work</div>
        <hr>
        <div class='_1'>STUDYING >>> ${pageName}</div>
        <div class='_2'>Time is Precious my dear friend , once gone won't return back . We know u can , just trust yourself that you definately can and Strive hard for your goal.</div>    
        <div class='_3'>Please don't turn me off before you finish ur work</div>
        </div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.hotstar.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("Hotstar");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "open.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
  }