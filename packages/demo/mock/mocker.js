const proxy = {
    'GET /api/user/1': { id: 1, username: 'kenny', sex: 60 },
    'GET /api/user': [
        { id: 1, username: 'kenny', sex: 6 },
        { id: 2, username: 'kenny', sex: 6 }
    ],
    'GET /api/common': [
        {ID: 1, console: 'when is the Guangyuan interface better'},
        {ID: 2, console: 'is the Guangyuan interface ready'},
        {ID: 2, console: 'CCID work order can pass'},
        {ID: 2, console: 'can CCID work order be adjusted'}
    ],
    'GET /api/data': [
        {
          "sepal_length": 5.1,
          "sepal_width": 3.5,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 3,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.7,
          "sepal_width": 3.2,
          "petal_length": 1.3,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.6,
          "sepal_width": 3.1,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.6,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3.9,
          "petal_length": 1.7,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.6,
          "sepal_width": 3.4,
          "petal_length": 1.4,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.4,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.4,
          "sepal_width": 2.9,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 3.1,
          "petal_length": 1.5,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3.7,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.8,
          "sepal_width": 3.4,
          "petal_length": 1.6,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.8,
          "sepal_width": 3,
          "petal_length": 1.4,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.3,
          "sepal_width": 3,
          "petal_length": 1.1,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 4,
          "petal_length": 1.2,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 4.4,
          "petal_length": 1.5,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3.9,
          "petal_length": 1.3,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.5,
          "petal_length": 1.4,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 3.8,
          "petal_length": 1.7,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.8,
          "petal_length": 1.5,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3.4,
          "petal_length": 1.7,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.7,
          "petal_length": 1.5,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.6,
          "sepal_width": 3.6,
          "petal_length": 1,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.3,
          "petal_length": 1.7,
          "petal_width": 0.5,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.8,
          "sepal_width": 3.4,
          "petal_length": 1.9,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3,
          "petal_length": 1.6,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.4,
          "petal_length": 1.6,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.2,
          "sepal_width": 3.5,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.2,
          "sepal_width": 3.4,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.7,
          "sepal_width": 3.2,
          "petal_length": 1.6,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.8,
          "sepal_width": 3.1,
          "petal_length": 1.6,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3.4,
          "petal_length": 1.5,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.2,
          "sepal_width": 4.1,
          "petal_length": 1.5,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 4.2,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 3.1,
          "petal_length": 1.5,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.2,
          "petal_length": 1.2,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 3.5,
          "petal_length": 1.3,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 3.1,
          "petal_length": 1.5,
          "petal_width": 0.1,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.4,
          "sepal_width": 3,
          "petal_length": 1.3,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.4,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.5,
          "petal_length": 1.3,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.5,
          "sepal_width": 2.3,
          "petal_length": 1.3,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.4,
          "sepal_width": 3.2,
          "petal_length": 1.3,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.5,
          "petal_length": 1.6,
          "petal_width": 0.6,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.8,
          "petal_length": 1.9,
          "petal_width": 0.4,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.8,
          "sepal_width": 3,
          "petal_length": 1.4,
          "petal_width": 0.3,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 3.8,
          "petal_length": 1.6,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 4.6,
          "sepal_width": 3.2,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5.3,
          "sepal_width": 3.7,
          "petal_length": 1.5,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 5,
          "sepal_width": 3.3,
          "petal_length": 1.4,
          "petal_width": 0.2,
          "species": "Iris Setosa"
        },
        {
          "sepal_length": 7,
          "sepal_width": 3.2,
          "petal_length": 4.7,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 3.2,
          "petal_length": 4.5,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.9,
          "sepal_width": 3.1,
          "petal_length": 4.9,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 2.3,
          "petal_length": 4,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.5,
          "sepal_width": 2.8,
          "petal_length": 4.6,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 2.8,
          "petal_length": 4.5,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 3.3,
          "petal_length": 4.7,
          "petal_width": 1.6,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 2.4,
          "petal_length": 3.3,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.6,
          "sepal_width": 2.9,
          "petal_length": 4.6,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.2,
          "sepal_width": 2.7,
          "petal_length": 3.9,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5,
          "sepal_width": 2,
          "petal_length": 3.5,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.9,
          "sepal_width": 3,
          "petal_length": 4.2,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6,
          "sepal_width": 2.2,
          "petal_length": 4,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 2.9,
          "petal_length": 4.7,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 2.9,
          "petal_length": 3.6,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3.1,
          "petal_length": 4.4,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 3,
          "petal_length": 4.5,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.7,
          "petal_length": 4.1,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.2,
          "sepal_width": 2.2,
          "petal_length": 4.5,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 2.5,
          "petal_length": 3.9,
          "petal_width": 1.1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.9,
          "sepal_width": 3.2,
          "petal_length": 4.8,
          "petal_width": 1.8,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 2.8,
          "petal_length": 4,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.5,
          "petal_length": 4.9,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 2.8,
          "petal_length": 4.7,
          "petal_width": 1.2,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 2.9,
          "petal_length": 4.3,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.6,
          "sepal_width": 3,
          "petal_length": 4.4,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.8,
          "sepal_width": 2.8,
          "petal_length": 4.8,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3,
          "petal_length": 5,
          "petal_width": 1.7,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6,
          "sepal_width": 2.9,
          "petal_length": 4.5,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 2.6,
          "petal_length": 3.5,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 2.4,
          "petal_length": 3.8,
          "petal_width": 1.1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 2.4,
          "petal_length": 3.7,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.7,
          "petal_length": 3.9,
          "petal_width": 1.2,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6,
          "sepal_width": 2.7,
          "petal_length": 5.1,
          "petal_width": 1.6,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.4,
          "sepal_width": 3,
          "petal_length": 4.5,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6,
          "sepal_width": 3.4,
          "petal_length": 4.5,
          "petal_width": 1.6,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3.1,
          "petal_length": 4.7,
          "petal_width": 1.5,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.3,
          "petal_length": 4.4,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 3,
          "petal_length": 4.1,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 2.5,
          "petal_length": 4,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.5,
          "sepal_width": 2.6,
          "petal_length": 4.4,
          "petal_width": 1.2,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 3,
          "petal_length": 4.6,
          "petal_width": 1.4,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.6,
          "petal_length": 4,
          "petal_width": 1.2,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5,
          "sepal_width": 2.3,
          "petal_length": 3.3,
          "petal_width": 1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 2.7,
          "petal_length": 4.2,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 3,
          "petal_length": 4.2,
          "petal_width": 1.2,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 2.9,
          "petal_length": 4.2,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.2,
          "sepal_width": 2.9,
          "petal_length": 4.3,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.1,
          "sepal_width": 2.5,
          "petal_length": 3,
          "petal_width": 1.1,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 2.8,
          "petal_length": 4.1,
          "petal_width": 1.3,
          "species": "Iris Versicolor"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 3.3,
          "petal_length": 6,
          "petal_width": 2.5,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.7,
          "petal_length": 5.1,
          "petal_width": 1.9,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.1,
          "sepal_width": 3,
          "petal_length": 5.9,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.9,
          "petal_length": 5.6,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.5,
          "sepal_width": 3,
          "petal_length": 5.8,
          "petal_width": 2.2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.6,
          "sepal_width": 3,
          "petal_length": 6.6,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 4.9,
          "sepal_width": 2.5,
          "petal_length": 4.5,
          "petal_width": 1.7,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.3,
          "sepal_width": 2.9,
          "petal_length": 6.3,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 2.5,
          "petal_length": 5.8,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.2,
          "sepal_width": 3.6,
          "petal_length": 6.1,
          "petal_width": 2.5,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.5,
          "sepal_width": 3.2,
          "petal_length": 5.1,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 2.7,
          "petal_length": 5.3,
          "petal_width": 1.9,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.8,
          "sepal_width": 3,
          "petal_length": 5.5,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.7,
          "sepal_width": 2.5,
          "petal_length": 5,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.8,
          "petal_length": 5.1,
          "petal_width": 2.4,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 3.2,
          "petal_length": 5.3,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.5,
          "sepal_width": 3,
          "petal_length": 5.5,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.7,
          "sepal_width": 3.8,
          "petal_length": 6.7,
          "petal_width": 2.2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.7,
          "sepal_width": 2.6,
          "petal_length": 6.9,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6,
          "sepal_width": 2.2,
          "petal_length": 5,
          "petal_width": 1.5,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.9,
          "sepal_width": 3.2,
          "petal_length": 5.7,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.6,
          "sepal_width": 2.8,
          "petal_length": 4.9,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.7,
          "sepal_width": 2.8,
          "petal_length": 6.7,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.7,
          "petal_length": 4.9,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3.3,
          "petal_length": 5.7,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.2,
          "sepal_width": 3.2,
          "petal_length": 6,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.2,
          "sepal_width": 2.8,
          "petal_length": 4.8,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 3,
          "petal_length": 4.9,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 2.8,
          "petal_length": 5.6,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.2,
          "sepal_width": 3,
          "petal_length": 5.8,
          "petal_width": 1.6,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.4,
          "sepal_width": 2.8,
          "petal_length": 6.1,
          "petal_width": 1.9,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.9,
          "sepal_width": 3.8,
          "petal_length": 6.4,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 2.8,
          "petal_length": 5.6,
          "petal_width": 2.2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.8,
          "petal_length": 5.1,
          "petal_width": 1.5,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.1,
          "sepal_width": 2.6,
          "petal_length": 5.6,
          "petal_width": 1.4,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 7.7,
          "sepal_width": 3,
          "petal_length": 6.1,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 3.4,
          "petal_length": 5.6,
          "petal_width": 2.4,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.4,
          "sepal_width": 3.1,
          "petal_length": 5.5,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6,
          "sepal_width": 3,
          "petal_length": 4.8,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.9,
          "sepal_width": 3.1,
          "petal_length": 5.4,
          "petal_width": 2.1,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3.1,
          "petal_length": 5.6,
          "petal_width": 2.4,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.9,
          "sepal_width": 3.1,
          "petal_length": 5.1,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.8,
          "sepal_width": 2.7,
          "petal_length": 5.1,
          "petal_width": 1.9,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.8,
          "sepal_width": 3.2,
          "petal_length": 5.9,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3.3,
          "petal_length": 5.7,
          "petal_width": 2.5,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.7,
          "sepal_width": 3,
          "petal_length": 5.2,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.3,
          "sepal_width": 2.5,
          "petal_length": 5,
          "petal_width": 1.9,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.5,
          "sepal_width": 3,
          "petal_length": 5.2,
          "petal_width": 2,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 6.2,
          "sepal_width": 3.4,
          "petal_length": 5.4,
          "petal_width": 2.3,
          "species": "Iris Virginica"
        },
        {
          "sepal_length": 5.9,
          "sepal_width": 3,
          "petal_length": 5.1,
          "petal_width": 1.8,
          "species": "Iris Virginica"
        }
      ]
 }
 module.exports = proxy