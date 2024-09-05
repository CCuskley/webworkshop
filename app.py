from flask import (Flask, redirect, render_template, request,send_from_directory, url_for)
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ap9s8dg7uy3w45ryghq'
socketio = SocketIO(app)


@app.route('/')
def index():
   print('Request for index page received, okay?')
   return render_template('index_II.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'images/mylogo.png', mimetype='image/vnd.microsoft.icon')

@app.route('/hello', methods=['POST'])
def hello():
   name = request.form.get('name')
   if name:
       print('Request for hello page received with name=%s' % name)
       return render_template('hello.html', name = name)
   else:
       print('Request for hello page received with no name or blank name -- redirecting')
       return redirect(url_for('index'))

@socketio.on('request stimuli')
def send_stims():
   stims=["bobcat","saber tooth tiger","mastodon","elephant","dodo bird","tiger",""]

@socketio.on('connect')
def test_connection():
   print("The front end wants to connect. What say you?")
   emit('connection confirmation',{"data":"Your server says hello!"})


if __name__ == '__main__':
   app.run(debug=True)
