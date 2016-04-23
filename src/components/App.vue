<template>
  <div id="wrapper">
   <nav class="navbar navbar-default" role="navigation">
     <div class="container-fluid">
       <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
           <span class="sr-only">Toggle navigation</span>
           <li><a v-link="'/home'">Home</a></li>
           <li><a v-link="'/transfer'">Transfer</a></li>
           <li><a v-link="'/search'">Search</a></li>
           <li><a v-link="'/about_us'">About us</a></li>
         </button>
         <a class="navbar-brand" href="#"></a>
       </div>

       <!-- Collect the nav links, forms, and other content for toggling -->
       <div class="collapse navbar-collapse" id="navbar">
         <ul class="nav navbar-nav">
           <li><a v-link="'/home'">Home</a></li>
           <li><a v-link="'/transfer'">Transfer</a></li>
           <li><a v-link="'/search'">Search</a></li>
           <li><a v-link="'/about_us'">About us</a></li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
           <li><a href="#"></a></li>
         </ul>
       </div><!-- /.navbar-collapse -->
     </div><!-- /.container-fluid -->
   </nav>



   <div class="container">
     <router-view></router-view>
   </div>
   
 </div>
 </template>
