import React from "react";
import {Link} from 'react-router-dom'
const Actions = () => {
  return (
    <Link id="actions" className="flex flex-col justify-center items-center">
      <h1> 2. Actions </h1>
      <p>
        if you've already worked inside of nextjs and that's the idea of actions
        as well as the used client and the used server directive we'll start by
        talking about actions since this affects you a little bit more directly
        but if you've ever worked inside a nextjs you know that you can create a
        form and instead of passing an on submit you pass it an action and this
        action will take in all of your different form data and you can do
        whatever you want with this action and if you're using nextjs this
        action can even run on the server in instead of running in the client
        well the big change with react 19 is first that they're making that this
        is a stable feature because right now it's not really a stable feature
        and secondly they're adding it so it actually works inside of client or
        server applications so this action that I pass in here which is just a
        function that takes in my form data can either run on the client or it
        can run on the server and it has other hooks built around it that make
        dealing with State and loading and so on incredibly easy as you can see
        here we have hooks called use form status and use form State and if you
        want to learn more about these new hooks I actually have an entirely
        free course on every single react hook you need to know and I constantly
        update this course whatever new hooks are released so if that sounds
        interesting check out the link down in the description below and sign up
        for that course and again I'll update it as soon as new hooks are
        released or changed but essentially this new way of using an action
        instead of an onsubmit just gives you a more built-in way in react to
        actually deal with forms form submissions form error states form loading
        form data everything that there is to do with forms can be done much
        easier by using this action instead of using an onsubmit Handler cuz a
        lot of that boiler plate like loading error messages and so on is
        automatically taken care of for you by these two hooks of use form
        status and use form State and now another additional hook that's being
        added is use optimistic again I entirely cover that hook inside of this
        course and this hook just allows you to do optimistic updates so for
        example if you click on the like button on like a tweet or a post what
        will happen is it'll automatically show you that that has been liked
        while the server is processing and then once the actual result comes
        back it'll either change it to liked or unliked based on if there's an
        error or not so an optimistic update just shows you the most optimistic
        thing like saying okay if you click on this like button you want to like
        it so it'll show is liked immediately even if it hasn't been submitted
        to the server yet so this is just a really simple hook that makes doing
        that much easier and it's honestly really cool and magical how this
        actually works and again I have a full video on that in the course and
        this hooks course that I have is also completely free by the way I'm not
        sure if I mentioned that so if you are interested in it's completely
        free all you have to do is sign up for the course nothing else now
      </p>
    </Link>
  );
};

export default Actions;
