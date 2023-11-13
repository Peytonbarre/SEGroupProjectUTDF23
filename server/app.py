from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
from datetime import datetime
import os
import pymongo

'''
AVAILABLE DATABASE+COLLECTIONS:
- Classmeet.Classes
- Classmeet.Likes
- Classmeet.Messages
- Classmeet.People
- Classmeet.Posts
- Classmeet.Replies
**Let me know (Peyton) if we need more collections/databases and I'll add them 
'''

#Creating app and CORSing application
app = Flask(__name__)
CORS(app)

#Loading and creating environment variables for MongoDB
load_dotenv()
app.config['MONGO_URI'] = os.getenv("MONGOURI")

#Starting the DB connection
mongo = PyMongo(app)

#PEYTON BARRE
#Take from details, insert new user with details into DB
@app.route('/register', methods=['POST'])
def register():
    #Gets the information from the frontend form
    message = request.json
    username = message['username']
    password = message['password']

    #Hashes the password for security reasons
    password = generate_password_hash(password)

    #Posts the password and username into the database
    mongo.db.People.insert_one({'username': username, 'password': password})

    #Returns a success message when the password is successfully added
    return jsonify({"message": "Registration successful"})

#PEYTON BARRE
#Take from details, validate it against database
@app.route('/login', methods=['GET'])
def login():
    #Gets information from the frontend form
    message = request.json
    username = message['username']
    password = message['password']

    #Finds the user from the database based on info given
    user = mongo.db.People.find_one({'username': username})

    #Checks if the user exists and if the password matches (Using hashing)
    if user and check_password_hash(user['password'], password):
        #Returns message if login works
        #TODO create JWK that carries a key and perform route forwarding
        return jsonify({'message': "Login successful"})
    
    #Return auth fail if login does not work
    return jsonify({'message': "Login failed"}), 401

#MANVIR CHAKAL
#Take from details, insert new post to database (Manvir)
@app.route('/createPost', methods=['POST'])
def createPost():
    # Gets the information from the frontend form
    message = request.json
    username = request.args.get('username')
    classid = request.args.get('classid')
    title = message['title']
    body = message['body']

    # Checks if the user and class exists
    if mongo.db.People.find_one({'username': username}) and mongo.db.Classes.find_one({'classid': classid}):
        # Posts the post into the database
        post = {
            'username': username,
            'classid': classid,
            'title': title,
            'body': body,
            'created_at': datetime.utcnow()  # Stores the current UTC time
        }
        mongo.db.Posts.insert_one(post)

        return jsonify({"message": "Post created successfully"}), 201
    
    else:
        return jsonify({"message": "Post creation failed"}), 401

#MANVIR CHAKAL
#Search database for posts made by friends, sort by date (descending) (Manvir)
@app.route('/displayPosts', methods=['GET']) 
def displayPosts():
    # This should be the username of the logged-in user,
    # which you could get from a session or token, but for simplicity,
    # let's say it's passed as a query parameter
    username = request.args.get('username')

    # If no username is provided, return an error
    if not username:
        return jsonify({'message': "Username is required to display posts."}), 400

    # Retrieve the user's friends list
    user = mongo.db.People.find_one({'username': username})
    if not user:
        return jsonify({'message': "User not found."}), 404

    friends = user.get('friends', [])
    
    # Now find the posts made by friends
    # Assuming there is a 'username' field in the Posts document to indicate who made the post
    posts_cursor = mongo.db.Posts.find({'username': {'$in': friends}}).sort('created_at', pymongo.DESCENDING)
    
    # Convert cursor to list (limit to a reasonable number for the response)
    posts = list(posts_cursor.limit(50))

    # Assuming you want to return JSON data, you'll need to convert the posts to a JSON-serializable format
    # ObjectId is not JSON serializable, so you need to convert it to a string
    for post in posts:
        post['_id'] = str(post['_id'])
        post['created_at'] = post['created_at'].isoformat()

    return jsonify({'posts': posts}), 200

#MANOJ MANIVANNAN
#Add friendship to database based on username input (Manoj)
@app.route('/addFriend', methods=['POST'])
def addFriend():
    # Get the current user's username from the request (you can use a session or token for this)
    username = request.args.get('username')

    # Get the friend's username from the request data (assuming it's sent as JSON)
    data = request.get_json()
    friend_username = data.get('friend_username')

    # Check if the required fields are provided
    if not username or not friend_username:
        return jsonify({'message': "Both 'username' and 'friend_username' are required to add a friend."}), 400

    # Find the current user in the database
    user = mongo.db.People.find_one({'username': username})
    if not user:
        return jsonify({'message': "User not found."}), 404

    # Check if the friend exists in the database
    friend = mongo.db.People.find_one({'username': friend_username})
    if not friend:
        return jsonify({'message': "Friend not found."}), 404

    # Check if the friend is not already in the user's friend list
    if friend_username in user.get('friends', []):
        return jsonify({'message': "This user is already your friend."}), 400

    # Update the user's friend list
    user['friends'].append(friend_username)
    mongo.db.People.update({'username': username}, {'$set': {'friends': user['friends']}})

    return jsonify({'message': f"You are now friends with {friend_username}."}), 200

#MANOJ MANIVANNAN
#From username input, return a list of the user's friends (Manoj)
@app.route('/getFriends', methods=['GET'])
def getFriends():
    # Get the username from the request (you can use a session or token for this)
    username = request.args.get('username')

    # Check if a username is provided
    if not username:
        return jsonify({'message': "Username is required to retrieve the user's friends."}), 400

    # Find the user in the database
    user = mongo.db.People.find_one({'username': username})
    if not user:
        return jsonify({'message': "User not found."}), 404

    # Retrieve the user's friend list
    friends = user.get('friends', [])

    return jsonify({'friends': friends}), 200

#Add a user to a class/group based on the code/name that is input
@app.route('/joinClass', methods=['POST'])
def joinClass():
    return jsonify({"message": "hello world"})

#Post a new message to the database, store the user, content, and class sent
@app.route('/sendClassMessage', methods=['POST'])
def sendClassMessage():
    return jsonify({"message": "hello world"})

#Given a class code/name, return all of the messages in the database with that class
@app.route('/getClassMessages', methods=['GET'])
def getClassMessages():
    return jsonify({"message": "hello world"})

#Mageto Nyakoni
#Updates the user's profile with given info, if new transcript then parse it
@app.route('/updateProfile', methods=['PUT'])
def updateProfile():
        # Get the username from the request (you can use a session or token for this)
    username = request.args.get('username')

    # Check if a username is provided
    if not username:
        return jsonify({'message': "Username is required to update the profile."}), 400

    # Find the user in the database
    user = mongo.db.People.find_one({'username': username})
    if not user:
        return jsonify({'message': "User not found."}), 404

    # Get the updated profile information from the request JSON data
    updated_profile = request.json

    # Check if there is new transcript data to parse
    if 'transcript' in updated_profile:
        # Call the parseTranscript() function to process the transcript data
        parseTranscript(updated_profile['transcript'])

    # Update the user's profile information in the database
    mongo.db.People.update_one({'username': username}, {'$set': updated_profile})

    return jsonify({"message": "Profile updated successfully"}), 200
#MANAS
# incriments the amount of likes by 1 and adds the user to the liked_users list
@app.route('/likePost', methods=['PUT'])
def likePost():
    # Get the post ID from the request
    post_id = request.json.get('post_id')
    
    # Get the username of the logged-in user (you should implement your own user authentication logic)
    username = request.json.get('username')
    
    if not post_id or not username:
        return jsonify({"message": "Post ID and username are required"}), 400
    
    # Check if the post exists
    post = mongo.db.Posts.find_one({'_id': post_id})
    if not post:
        return jsonify({"message": "Post not found"}), 404
    
    # Check if the user has already liked the post
    liked_users = post.get('liked_users', [])
    if username not in liked_users:
        # Increment the likes count
        likes_count = post.get('likes', 0)
        likes_count += 1
        # Add the user to the liked_users list
        liked_users.append(username)
        
        # Update the post with the new likes count and liked_users list
        mongo.db.Posts.update_one({'_id': post_id}, {'$set': {'likes': likes_count, 'liked_users': liked_users}})
        return jsonify({"message": "Like added successfully"})
    
    return jsonify({"message": "You have already liked this post"}), 400

#MANAS
# deincrements the amount of likes by 1, with user validation
@app.route('/unlikePost', methods=['PUT'])
def unlikePost():
    # Get the post ID from the request
    post_id = request.json.get('post_id')
    
    # Get the username of the logged-in user (you should implement your own user authentication logic)
    username = request.json.get('username')
    
    if not post_id or not username:
        return jsonify({"message": "Post ID and username are required"}), 400
    
    # Check if the post exists
    post = mongo.db.Posts.find_one({'_id': post_id})
    if not post:
        return jsonify({"message": "Post not found"}), 404
    
    # Check if the user has already liked the post
    liked_users = post.get('liked_users', [])
    if username in liked_users:
        # Remove the user from the liked_users list
        liked_users.remove(username)
        # Update the likes count
        likes_count = post.get('likes', 0)
        if likes_count > 0:
            likes_count -= 1
            # Update the post with the new likes count and liked_users list
            mongo.db.Posts.update_one({'_id': post_id}, {'$set': {'likes': likes_count, 'liked_users': liked_users}})
            return jsonify({"message": "Like removed successfully"})
    
    return jsonify({"message": "You have not liked this post"}), 400

#Mageto Nyakoni
#Adds a new reply to a post based on postid and reply content
@app.route('/replyPost', methods=['POST'])
def replyPost():
     # Get the post ID and reply content from the request
    post_id = request.json.get('post_id')
    reply_content = request.json.get('reply_content')

    if not post_id or not reply_content:
        return jsonify({"message": "Post ID and reply content are required"}), 400

    # Check if the post exists
    post = mongo.db.Posts.find_one({'_id': post_id})
    if not post:
        return jsonify({"message": "Post not found"}), 404

    # Create a new reply
    reply = {
        'post_id': post_id,
        'reply_content': reply_content,
        'created_at': datetime.utcnow()  # Store the current UTC time
    }

    # Insert the reply into the database
    mongo.db.Replies.insert_one(reply)

    return jsonify({"message": "Reply added successfully"}), 201

#Parses the transscript photo for the classes, sections, and professor
def parseTranscript():
    return jsonify({"message": "hello world"})

#Running the main app, not needed but good practice
if __name__ == "__main__":
    app.run()
