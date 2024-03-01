import React  from "react";
import {Link} from 'react-router-dom'

const Compiler = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xl py-5">
      <Link>1. Compiler</Link>
      <p>
        Adding a compiler to react this is actually a really big deal because
        For the Longest Time react only ran in the browser and there's no
        compile Step at all and now other Frameworks have come along such as
        Astro and spelt and they added in their own compile step and this
        compile step just takes care of a lot of things for you behind the
        scenes so you don't have to write extra code for that but since react
        never had that we had different hooks like use memo, use callback and the
        memo function that allowed you to do extra performance things to make
        sure your code ran performant since there was no compiler to do that for
        you automatically well with react version 19 the big thing that they're
        pushing is his react compiler so that means that automatically react is
        going to add its own memorization for things like use memo, use callback
        and the memo function so you never have to use those hooks or functions
        ever again it's just going to be automatically taken care of for you by
        the compiler so anytime you would normally need to use memo or use call
        back you can just completely remove that and the compiler will take care
        of it for you now this is a huge win because not only does it make
        your code simpler and easier to read and write since you no longer have
        to think about this but it also will make your code faster because it's
        almost always the case that the actual compiler is going to find more
        instances of where you should be doing memoization than where you would
        normally find it yourself so having this extra compile step is going to
        make your application faster and easier to write and is honestly the
        thing I'm most excited about for react version 19 because these hooks
        are the reason that react is so confusing and complicated to write
        especially as you get larger and larger applications where performance
        is really important. 
      </p>
    </div>
  );
};

export default Compiler;
