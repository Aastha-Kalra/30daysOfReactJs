import React from "react";

const SEO = () => {
  return (
    <div id='seo'>
      This document metadata section and essentially what this allows you to do
      is to put a title tag a meta tag or a link tag that deals with metadata
      anywhere inside of your react component and it's automatically going to
      make sure it moves it to the right location inside of like the or wherever
      else it needs to go so if you want to have like a different title on
      multiple different pages you can just drop this title component anywhere
      in your component and it's just going to work out of the box which is
      really nice and they mostly did this so that you can have certain things
      work fine when you're doing server rendering and react server components
      they did this because certain things like react helmet and other libraries
      like that won't work super well with this new way of doing things in react
      so they just built in their own way of doing that which is just a nice
      quality of life feature
    </div>
  );
};

export default SEO;
