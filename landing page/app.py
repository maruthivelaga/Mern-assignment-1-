from flask import Flask, request, jsonify, make_response

app = Flask(__name__)

@app.after_request
def add_headers(response):
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route('/recommend', methods=['POST'])
def recommend():
    fabrics = ["fabric1.jpg", "fabric2.jpg", "fabric3.jpg"]
    designs = ["design1.jpg", "design2.jpg", "design3.jpg"]
    recommended_fabric = random.choice(fabrics)
    recommended_design = random.choice(designs)
    return jsonify({"fabric": recommended_fabric, "design": recommended_design})

if __name__ == '__main__':
    app.run(debug=True)
