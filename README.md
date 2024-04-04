# NextJS Simple Steam Authentication

Remember! It's just a simple system without good security methods. Purpose of this project - show example, not ready-made solution

Key features:
+ 🔒 Steam login 
+ 🔓 Steam logout
+ 🛡️ Middleware
+ 🗝️ UpdateSession function
and more!

## How to use

After downloading the project, you should install all of the required dependencies.

    $ npm install

Fill in a `.env` file with the following keys filled, much like `.env.sample` (Remove `.sample` off the file name)

    AUTH_SECRET=ABCD # 32+ char random string
    STEAM_API_KEY= # Your Steam API Key


You can run the web application in `development` mode.

    $ npm run dev

You can also test the web application for `production` if you feel the need.

    $ npm run build
    $ npm start
    
## Improvements To Make
This is only one example of authenticating a user with their Steam account via NextJS. There are some fixes that can be added to better development and cleanliness without making significant changes. For example, you can add code for https only cookies.

