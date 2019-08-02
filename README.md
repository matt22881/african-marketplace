# Free Open Source Marketplace BE || NODE.js

***Version 1.0.0***

# Getting Started
 
Clone the repo, cd to the directory, run npm install and node app.js. The server is running at localhost:5000

# Built With

heroku 
node - Node.js JavaScript runtime 
express - Fast, unopinionated, minimalist web framework for node.
Authors
Kevin Sims - Development - kevinsims1


#END POINTS

Get items by Category
/items/category/:category

Delete a User by id
/users/:id

Get all the users
/users

Get a User by id
/users/:id

Get a Users Items by user id
/users/:id/items

Login
/auth/login

Register || Json Oject
/auth/register
{
	"username": "",
	"password": "",
	"department": ""
}

Add an Item || Json Object
/items/additem
{
	"name": "",
	"description": "",
	"price": #,
	"location": "",
	"category": "",
	"URL": "",
	"user_id": #
}

Get All Items
/items



# License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright 2019 Kevin Sims