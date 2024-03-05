import React from "react";

const Ref = () => {
  return (
    <div id="ref">
      forward ref is something you are never going to need to use ever again and
      that's because the ref prop that you normally get by using forward ref is
      automatically going to be passed to every component inside of react so you
      can just use refs by just passing it along as a second prop and you don't
      need this crappy forward ref function wrapping stuff anymore
    </div>
  );
};

export default Ref;
