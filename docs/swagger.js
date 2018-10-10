const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDef = {
    'basePath': '/',
    'host': 'localhost:3000',
    'info': {
        'description': 'Sistema cujo objetivo é auxiliar na aprendizagem e revisão de conceitos utilizando flashcards.',
        'title': 'Flexes',
        'version': '1.0.0',
        'license': {
            'name': 'Flexes',
            'url': 'https://github.com/valterlucena/devweb-back'
        }
    },
    'consumes': [
        'application/json'
    ],
    'produces': [
        'application/json'
    ],
    'paths': {
        '/usuario': {
            'get': {
                'tags': [
                    'Usuario'
                ],
                'summary': 'Get all users',
                'responses': {
                    '200': {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/Usuario'
                        }
                    }
                }
            },
            'post': {
                'tags': [
                    'Usuario'
                ],
                'summary': 'Create a new user',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'body',
                        'description': 'Username of the user that we want to create.',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Usuario'
                        }
                    },
                    {
                        'name': 'password',
                        'in': 'body',
                        'description': 'Password of the user that we want to create.',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Usuario'
                        }
                    },
                    {
                        'name': 'type',
                        'in': 'body',
                        'description': "Type of the user that we want to create. It can be 'aluno' or 'professor'",
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Usuario'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ], 
                'responses': {
                    '201': {
                        'description': "{'result': {New user created}}"
                    }
                }
            }
        },
        '/usuario/{username}': {
            'get': {
                'tags': [
                    'Usuario'
                ],
                'summary': 'Get user by username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'username of the user we want to find',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'The user was found',
                        'schema': {
                            '$ref': "#/definitions/Usuario"
                        }
                    }
                }
            },
            'put': {
                'tags': [
                    'Usuario'
                ],
                'summary': 'Update user with given username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'username of the user we want to update',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'usuario',
                        'in': 'body',
                        'description': 'user with updated properties',
                        'required': false,
                        'schema': {
                            '$ref': '#definitions/Usuario'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'result': {User updated}}"
                    }
                }
            },
            'delete': {
                'tags': [
                    'Usuario'
                ],
                'summary': 'Delete user with given username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'username of the user we want to delete',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'message': {User deleted}}"
                    }
                }
            }
        }
    }
};

const options = {
    'apis': ['../**/*.docs.js'],
    'swaggerDefinition': swaggerDef
};

module.exports = swaggerJSDoc(options);