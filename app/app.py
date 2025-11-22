from flask import Flask, request, jsonify

app = Flask(__name__)

# 存储积分的全局变量
scores = []

@app.route('/submit-score', methods=['POST'])
def submit_score():
    data = request.json
    score = data.get('score')

    if score is not None:
        scores.append(score)
        total = sum(scores)
        return jsonify({"status": "success", "total_score": total})
    else:
        return jsonify({"status": "error", "message": "Invalid score"}), 400

if __name__ == '__main__':
    app.run(debug=True)