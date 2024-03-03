import React from "react";

const Suspense = () => {
  return (
    <div id="suspense">
      Suspense a new react 18 feature that allows you to essentially stream in
      things so you can stream your data in to be rendered it's really popular
      in something like nextjs and essentially what they're doing here is
      empowering suspense by making sure that it waits for certain things like
      your style tags links and scripts to load so if you have certain style
      tags that are only loaded on certain pages or certain components or you
      have script tags that are running on only certain pages this is going to
      make sure that all your Styles and all your script tags are actually
      downloaded and ran before the page actually shows that way you don't have
      an instance where your page renders but none of your CSS has been
      downloaded yet this is just essentially making sure all of that will work
      well together and it even gives you a simple API that you can use to do
      this with more than just style link and script tags if you really want to
      but that's a rather Advanced feature
    </div>
  );
};

export default Suspense;
