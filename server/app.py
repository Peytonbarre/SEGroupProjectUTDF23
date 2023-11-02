from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

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
print(os.getenv("MONGOURI"))
app.config['MONGO_URI'] = os.getenv("MONGOURI")

#Starting the DB connection
mongo = PyMongo(app)

#Take from details, insert new user with details into DB
@app.route('/register', methods=['POST'])
def register():
    message = request.json
    username = message['username']
    password = message['password']
    password = generate_password_hash(password)
    # Also, add unique constraint
    mongo.db.People.insert_one({'username': username, 'password': password})
    return jsonify({"message": "Registration successful"})

#Take from details, validate it against database
@app.route('/login', methods=['GET'])
def login():
    return jsonify({"message": "hello world"})

#Take from details, insert new post to database
@app.route('/createPost', methods=['POST'])
def createPost():
    return jsonify({"message": "hello world"})

#Search database for posts made by friends, sort by date (descending)
@app.route('/displayPosts', methods=['GET'])
def displayPosts():
    return jsonify({"message": "hello world"})

#Add friendship to database based on username input
@app.route('/addFriend', methods=['POST'])
def addFriend():
    return jsonify({"message": "hello world"})

#From username input, return a list of the user's friends
@app.route('/getFriends', methods=['GET'])
def getFriends():
    return jsonify({"message": "hello world"})

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

#Updates the user's profile with given info, if new transcript then parse it
@app.route('/updateProfile', methods=['PUT'])
def updateProfile():
    parseTranscript()
    return jsonify({"message": "hello world"})

#incriments the amount of likes by 1
#need to include user checking I think
@app.route('/likePost', methods=['PUT'])
def likePost():
    return jsonify({"message": "hello world"})

#deincriments the amount of likes by 1
#Same as above, add user validation
@app.route('/unlikePost', methods=['PUT'])
def unlikePost():
    return jsonify({"message": "hello world"})

#Adds a new reply to a post based on postid and reply content
@app.route('/replyPost', methods=['POST'])
def replyPost():
    return jsonify({"message": "hello world"})

#Parses the transscript photo for the classes, sections, and professor
def parseTranscript():
    return jsonify({"message": "hello world"})

#Running the main app, not needed but good practice
if __name__ == "__main__":
    app.run()